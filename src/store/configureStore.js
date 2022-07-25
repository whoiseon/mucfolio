import {combineReducers, configureStore} from "@reduxjs/toolkit";
import {createLogger} from "redux-logger";
import counterSlice from "../slices/counterSlice";

const logger = createLogger();
const devMode = 'development';

const rootReducer = combineReducers({
  counter: counterSlice.reducer,
});

const initialState = {};

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
  devTools: devMode !== 'production',
  preloadedState: initialState,
});

export default store;
