import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { rememberReducer } from "redux-remember";

const rootReducer = combineReducers({

});

const rememberedReducer = rememberReducer(rootReducer);

export const store = configureStore({
    reducer: rememberedReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = typeof store;
export type AppDispatch = AppStore['dispatch'];