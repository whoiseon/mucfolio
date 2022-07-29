import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { firestore } from "../firebaseConfig";

const initialState = {
  projectList: [],
  scheduleTest: null,
  userProjectLoading: false,
  userProjectDone: false,
  userProjectError: null,
  addNewProjectLoading: false,
  addNewProjectDone: false,
  addNewProjectError: null,
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

    console.log(userProjects);

    return userProjects;
  } catch (error) {
    if (error.code) {
      throw error.code;
    }
  }
});

export const addNewProject = createAsyncThunk("ADD_NEW_PROJECT", async ({ uid, projectName }) => {
  try {
    const newProject = {
      projectName,
      schedule: [],
    };

    await firestore.collection('users').doc(uid)
      .collection('project').doc(projectName)
      .set({ });

    return newProject;
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
    [addNewProject.pending]: (state) => {
      state.addNewProjectLoading = true;
      state.addNewProjectDone = false;
      state.addNewProjectError = null;
    },
    [addNewProject.fulfilled]: (state, action) => {
      state.addNewProjectLoading = false;
      state.addNewProjectDone = true;
      state.projectList.unshift(action.payload);
    },
    [addNewProject.rejected]: (state, action) => {
      state.addNewProjectLoading = false;
      state.addNewProjectError = action.error.message;
    },
  },
});

export default projectSlice;
