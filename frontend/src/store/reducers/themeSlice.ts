import { lightTheme } from "@/common/styles/theme";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface ThemeState {
  theme: object;
}

const initialState: ThemeState = {
  theme: lightTheme,
};

const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    setTheme: (state, action: PayloadAction<ThemeState>) => {
      state = action.payload;
    },

    getTheme: (state) => {
      return state;
    },
  },
});

export const ThemeReducer = themeSlice.reducer;
export const ThemeActions = themeSlice.actions;
