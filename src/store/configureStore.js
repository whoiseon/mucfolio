import {combineReducers, configureStore} from "@reduxjs/toolkit";
import {createLogger} from "redux-logger";
import userSlice from "../slices/userSlice";
import projectSlice from "../slices/projectSlice";
import memoSlice from "../slices/memoSlice";

const logger = createLogger();
const devMode = 'development';

const rootReducer = combineReducers({
  user: userSlice.reducer,
  project: projectSlice.reducer,
  memo: memoSlice.reducer,
});

const initialState = {};

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck: false,
  }).concat(logger),
  devTools: devMode !== 'production',
  preloadedState: initialState,
});

export default store;
