import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import dayjs from "dayjs";
import 'firebase/firestore';
import firebase from "firebase/compat/app";
import { firestore } from "../firebaseConfig";

const initialState = {
  projectList: [],
  scheduleView: null,
  scheduleTest: null,
  userProjectLoading: false,
  userProjectDone: false,
  userProjectError: null,
  userScheduleLoading: false,
  userScheduleDone: false,
  userScheduleError: null,
  addNewProjectLoading: false,
  addNewProjectDone: false,
  addNewProjectError: null,
  addNewScheduleLoading: false,
  addNewScheduleDone: false,
  addNewScheduleError: null,
  updateScheduleLoading: false,
  updateScheduleDone: false,
  updateScheduleError: null,
  deleteScheduleLoading: false,
  deleteScheduleDone: false,
  deleteScheduleError: null,
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

export const getUserSchedule = createAsyncThunk("GET_USER_SCHEDULE", async ({ uid, projectName, scheduleName }) => {
  try {
    const emptyProjectName = projectName.replace('-', ' ');
    const emptyScheduleName = scheduleName.replace('-', ' ');
    const response = await firestore.collection('users').doc(uid)
      .collection('project').doc(emptyProjectName)
      .get();
    const scheduleData = response.data();

    return scheduleData[emptyScheduleName];
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

export const addNewSchedule = createAsyncThunk("ADD_NEW_SCHEDULE", async ({ uid, projectName, content, title }) => {
  try {
    const emptyProjectName = projectName.replace('-', ' ');
    const createdSchedule = {
      project: emptyProjectName,
      content,
      createdAt: dayjs().format("YY.MM.DD"),
      status: false,
      title,
    };
    await firestore.collection('users').doc(uid)
      .collection('project').doc(emptyProjectName)
      .update({
        [title]: {
          project: emptyProjectName,
          content,
          createdAt: dayjs().format("YY.MM.DD"),
          status: false,
          title,
          comment: {},
        },
      });

    return createdSchedule;
  } catch (error) {
    if (error.code) {
      throw error.code;
    }
  }
});

export const updateSchedule = createAsyncThunk("UPDATE_SCHEDULE", async ({ uid, projectName, content, title }) => {
  try {
    const emptyProjectName = projectName.replace('-', ' ');

    await firestore.collection('users').doc(uid)
      .collection('project').doc(emptyProjectName)
      .update({
        [title]: {
          project: emptyProjectName,
          content,
          createdAt: dayjs().format("YY.MM.DD"),
          status: false,
          title,
          comment: {},
        },
      });
  } catch (error) {
    if (error.code) {
      throw error.code;
    }
  }
});

export const deleteSchedule = createAsyncThunk("DELETE_SCHEDULE", async ({ uid, projectName, scheduleName }) => {
  try {
    const emptyProjectName = projectName.replace('-', ' ');
    const emptyScheduleName = scheduleName.replace('-', ' ');

    const response = await firestore.collection('users').doc(uid)
      .collection('project').doc(emptyProjectName)
      .update({
        [emptyScheduleName]: firebase.firestore.FieldValue.delete(),
      });

    return {
      projectName: emptyProjectName,
      scheduleName: emptyScheduleName,
    };
  } catch (error) {
    if (error.code) {
      throw error.code;
    }
  }
});

export const scheduleCheck = createAsyncThunk("SCHEDULE_CHECK", async ({ uid, projectName, scheduleName, checked }) => {
  try {
    const emptyProjectName = projectName.replace('-', ' ');
    const emptyScheduleName = scheduleName.replace('-', ' ');
    await firestore.collection('users').doc(uid)
      .collection('project').doc(emptyProjectName)
      .update({
        [`${emptyScheduleName}.status`]: !checked,
      });
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
    [getUserSchedule.pending]: (state) => {
      state.userScheduleLoading = true;
      state.userScheduleDone = false;
      state.userScheduleError = null;
    },
    [getUserSchedule.fulfilled]: (state, action) => {
      state.userScheduleLoading = false;
      state.userScheduleDone = true;
      state.scheduleView = action.payload;
    },
    [getUserSchedule.rejected]: (state, action) => {
      state.userScheduleLoading = false;
      state.userScheduleError = action.error.message;
    },
    [addNewProject.pending]: (state) => {
      state.addNewProjectLoading = true;
      state.addNewProjectDone = false;
      state.addNewProjectError = null;
    },
    [addNewProject.fulfilled]: (state, action) => {
      state.addNewProjectLoading = false;
      state.addNewProjectDone = true;
      state.projectList.push(action.payload);
    },
    [addNewProject.rejected]: (state, action) => {
      state.addNewProjectLoading = false;
      state.addNewProjectError = action.error.message;
    },
    [addNewSchedule.pending]: (state) => {
      state.addNewScheduleLoading = true;
      state.addNewScheduleDone = false;
      state.addNewScheduleError = null;
    },
    [addNewSchedule.fulfilled]: (state, action) => {
      const filter = state.projectList.find((v) => v.projectName === action.payload.project);
      state.addNewScheduleLoading = false;
      state.addNewScheduleDone = true;
      filter.schedule.push(action.payload);
    },
    [addNewSchedule.rejected]: (state, action) => {
      state.addNewScheduleLoading = false;
      state.addNewScheduleError = action.error.message;
    },
    [updateSchedule.pending]: (state) => {
      state.updateScheduleLoading = true;
      state.updateScheduleDone = false;
      state.updateScheduleError = null;
    },
    [updateSchedule.fulfilled]: (state, action) => {
      state.updateScheduleLoading = false;
      state.updateScheduleDone = true;
    },
    [updateSchedule.rejected]: (state, action) => {
      state.updateScheduleLoading = false;
      state.updateScheduleError = action.error.message;
    },
    [deleteSchedule.pending]: (state) => {
      state.deleteScheduleLoading = true;
      state.deleteScheduleDone = false;
      state.deleteScheduleError = null;
    },
    [deleteSchedule.fulfilled]: (state, action) => {
      state.deleteScheduleLoading = false;
      state.deleteScheduleDone = true;
    },
    [deleteSchedule.rejected]: (state, action) => {
      state.deleteScheduleLoading = false;
      state.deleteScheduleError = action.error.message;
    },
  },
});

export default projectSlice;
