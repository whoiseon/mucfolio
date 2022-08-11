import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import dayjs from "dayjs";
import {firestore} from "../firebaseConfig";

const initialState = {
  memoList: null,
  getUserMemosLoading: false,
  getUserMemosDone: false,
  getUserMemosError: null,
  addNewMemoLoading: false,
  addNewMemoDone: false,
  addNewMemoError: null,
};

export const getUserMemo = createAsyncThunk("GET_USER_MEMO", async ({ uid }) => {
  try {
    const userMemos = [];

    const memos = await firestore.collection('users').doc(uid)
      .collection('memo')
      .get();

    memos.forEach((doc) => {
      userMemos.push(doc.data());
    });

    return userMemos;
  } catch (error) {
    if (error.code) {
      throw error.code;
    }
  }
});

export const addNewMemo = createAsyncThunk("ADD_NEW_MEMO", async ({ uid, memo }) => {
  try {
    const newMemo = {
      content: memo,
      createdAt: dayjs().format("MM.DD"),
    };

    await firestore.collection('users').doc(uid)
      .collection('memo').doc(memo)
      .set(newMemo);

    return newMemo;
  } catch (error) {
    if (error.code) {
      throw error.code;
    }
  }
});

const memoSlice = createSlice({
  name: 'memo',
  initialState,
  reducers: {},
  extraReducers: {
    [getUserMemo.pending]: (state) => {
      state.getUserMemosLoading = true;
      state.getUserMemosDone = false;
      state.getUserMemosError = null;
    },
    [getUserMemo.fulfilled]: (state, action) => {
      state.getUserMemosLoading = false;
      state.getUserMemosDone = true;
      state.memoList = action.payload;
    },
    [getUserMemo.rejected]: (state, action) => {
      state.getUserMemosLoading = false;
      state.getUserMemosError = action.error.message;
    },
    [addNewMemo.pending]: (state) => {
      state.addNewMemoLoading = true;
      state.addNewMemoDone = false;
      state.addNewMemoError = null;
    },
    [addNewMemo.fulfilled]: (state, action) => {
      state.addNewMemoLoading = false;
      state.addNewMemoDone = true;
      state.memoList.push(action.payload);
    },
    [addNewMemo.rejected]: (state, action) => {
      state.addNewMemoLoading = false;
      state.addNewMemoError = action.error.message;
    },
  },
});

export default memoSlice;
