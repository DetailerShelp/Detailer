import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { rememberEnhancer, rememberReducer } from "redux-remember";
import { userApi } from "@/store/reducers/user/userApi";
import { newChatReducer } from "@/store/messenger/chatSlice";
import { shortsApi } from "./reducers/shorts/shortsApi";
import { commentsReducer } from "@/store/reducers/comments/commentsSlice";
import { commentsApi } from "@/store/reducers/comments/commentsApi";
import { newCommentReducer } from "./reducers/comments/newCommentSlice";
import { postApi } from "@/store/reducers/post/postApi";

const rememberedReducers = [""];

const rootReducer = combineReducers({
  newCommentReducer,
  commentsReducer,
  newChatReducer,
  [userApi.reducerPath]: userApi.reducer,
  [commentsApi.reducerPath]: commentsApi.reducer,
  [postApi.reducerPath]: postApi.reducer,
  [shortsApi.reducerPath]: shortsApi.reducer,
});

const rememberedReducer = rememberReducer(rootReducer);

export const store = configureStore({
  reducer: rememberedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(userApi.middleware)
      .concat(commentsApi.middleware)
      .concat(postApi.middleware)
      .concat(shortsApi.middleware),
  enhancers: (getDefaultEnhancer) =>
    getDefaultEnhancer().concat(
      rememberEnhancer(window.localStorage, rememberedReducers)
    ),
});

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = typeof store;
export type AppDispatch = AppStore["dispatch"];
