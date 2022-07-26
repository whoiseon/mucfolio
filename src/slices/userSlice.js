import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { auth, firestore } from "../firebaseConfig";

const initialState = {
  userInfo: null,
  userSignUpLoading: false,
  userSignUpDone: true,
  userSignUpError: null,
  userLogInLoading: false,
  userLogInDone: true,
  userLogInError: null,
  userLogoutLoading: false,
  userLogoutDone: true,
  userLogoutError: null,
  loadToMyInfoLoading: false,
  loadToMyInfoDone: false,
  loadToMyInfoError: false,
};

export const userSignUp = createAsyncThunk("USER_SIGNUP", async ({ name, email, password }) => {
  try {
    const createUser = await auth.createUserWithEmailAndPassword(email, password);
    await createUser.user.updateProfile({ displayName: name });
    await firestore.collection('users').doc(createUser.user.uid).set({
      name,
      email,
    });

    return createUser.user;
  } catch (error) {
    if (error.code) {
      throw error.code;
    }
  }
});

export const userLogIn = createAsyncThunk("USER_LOGIN", async ({ email, password }) => {
  try {
    const loggingUser = await auth.signInWithEmailAndPassword(email, password);
    return loggingUser.user;
  } catch (error) {
    let errorMsg = '';
    switch (error.code) {
      case 'auth/user-not-found':
        errorMsg = '아이디와 비밀번호를 다시 확인해주세요.';
        break;
      case 'auth/wrong-password':
        errorMsg = '비밀번호를 다시 확인해주세요.';
        break;
      case 'auth/invalid-email':
        errorMsg = '이메일 형식에 맞지 않습니다.';
        break;
      default:
        errorMsg = `오류가 발생했습니다. / ${error}`;
    }
    throw errorMsg;
  }
});

export const userLogout = createAsyncThunk("USER_LOGOUT", async () => {
  try {
    await auth.signOut();
  } catch (error) {
    if (error.code) {
      throw error.code;
    }
  }
});

export const loadToMyInfo = createAsyncThunk("LOAD_TO_MY_INFO", async () => {
  let userInfo = null;
  await auth.onAuthStateChanged((user) => {
    if (user) {
      userInfo = user;
      sessionStorage.setItem('connect_user', JSON.stringify(user));
    } else {
      userInfo = null;
      sessionStorage.removeItem('connect_user');
    }
  });

  return JSON.parse(sessionStorage.getItem('connect_user'));
});

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: {
    [userSignUp.pending]: (state) => {
      state.userSignUpLoading = true;
      state.userSignUpDone = false;
      state.userSignUpError = null;
    },
    [userSignUp.fulfilled]: (state, action) => {
      state.userSignUpLoading = false;
      state.userSignUpDone = true;
      state.userInfo = action.payload;
      sessionStorage.setItem('connect_user', JSON.stringify(action.payload));
    },
    [userSignUp.rejected]: (state, action) => {
      state.userSignUpLoading = false;
      state.userSignUpError = action.error.message;
    },
    [userLogIn.pending]: (state) => {
      state.userLogInLoading = true;
      state.userLogInDone = false;
      state.userLogInError = null;
    },
    [userLogIn.fulfilled]: (state, action) => {
      state.userLogInLoading = false;
      state.userLogInDone = true;
      state.userInfo = action.payload;
      sessionStorage.setItem('connect_user', JSON.stringify(action.payload));
    },
    [userLogIn.rejected]: (state, action) => {
      state.userLogInLoading = false;
      state.userLogInError = action.error.message;
    },
    [userLogout.pending]: (state) => {
      state.userLogoutLoading = true;
      state.userLogoutDone = false;
      state.userLogoutError = null;
    },
    [userLogout.fulfilled]: (state, action) => {
      state.userLogoutLoading = false;
      state.userLogoutDone = true;
      state.userInfo = null;
      sessionStorage.removeItem('connect_user');
    },
    [userLogout.rejected]: (state, action) => {
      state.userLogoutLoading = false;
      state.userLogoutError = action.error.message;
    },
    [loadToMyInfo.pending]: (state) => {
      state.loadToMyInfoLoading = true;
      state.loadToMyInfoDone = false;
      state.loadToMyInfoError = null;
    },
    [loadToMyInfo.fulfilled]: (state, action) => {
      const userInfo = sessionStorage.getItem('connect_user');
      state.loadToMyInfoLoading = false;
      state.loadToMyInfoDone = true;
      state.userInfo = JSON.parse(userInfo);
    },
    [loadToMyInfo.rejected]: (state, action) => {
      state.loadToMyInfoLoading = false;
      state.loadToMyInfoError = action.error.message;
    },
  },
});

export default userSlice;
