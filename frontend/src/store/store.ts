import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { rememberEnhancer, rememberReducer } from "redux-remember";
import { shortsApi } from "./reducers/shorts/shortsApi";

const rememberedReducers = [
  ""
];

const rootReducer = combineReducers({
  [shortsApi.reducerPath]: shortsApi.reducer,
});

const rememberedReducer = rememberReducer(rootReducer);

export const store = configureStore({
  reducer: rememberedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(shortsApi.middleware),
  enhancers: (getDefaultEnhancer) =>
    getDefaultEnhancer().concat(
      rememberEnhancer(window.localStorage, rememberedReducers)
    ),
});

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = typeof store;
export type AppDispatch = AppStore["dispatch"];
