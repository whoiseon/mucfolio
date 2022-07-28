import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { firestore } from "../firebaseConfig";

const initialState = {
  projectList: [],
  scheduleTest: null,
  userProjectLoading: false,
  userProjectDone: false,
  userProjectError: null,
  userScheduleLoading: false,
  userScheduleDone: false,
  userScheduleError: null,
};

export const getUserProject = createAsyncThunk("GET_USER_PROJECT", async ({ uid }) => {
  try {
    const userProjects = [];

    const projects = await firestore.collection('users').doc(uid)
      .collection('project')
      .get();

    projects.forEach((doc) => {
      const schedules = doc.data();
      const spreadData = Object.values(schedules);
      const docResponse = {
        projectName: doc.id,
        schedule: [],
      };

      docResponse.schedule.push(...spreadData);
      userProjects.push(docResponse);
    });

    return userProjects;
  } catch (error) {
    if (error.code) {
      throw error.code;
    }
  }
});

const projectSlice = createSlice({
  name: 'project',
  initialState,
  reducers: {},
  extraReducers: {
    [getUserProject.pending]: (state) => {
      state.userProjectLoading = true;
      state.userProjectDone = false;
      state.userProjectError = null;
    },
    [getUserProject.fulfilled]: (state, action) => {
      state.userProjectLoading = false;
      state.userProjectDone = true;
      state.projectList = action.payload;
    },
    [getUserProject.rejected]: (state, action) => {
      state.userProjectLoading = false;
      state.userProjectError = action.error.message;
    },
  },
});

export default projectSlice;
