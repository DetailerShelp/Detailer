import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface AnswerWhomType {
    whom: string,
    message: string
}

const initialState: AnswerWhomType = {
    whom: '',
    message: ''
}

const answerWhomSlice = createSlice({
    name: "answer",
    initialState: initialState,
    reducers: {
        setAnswerWhom: (state, action: PayloadAction<string>) => {
            state.whom = action.payload;
            state.message = '@' + action.payload + ',';
        },
        resetAnswerWhom: (state) =>  {
            state.whom = '';
            state.message = '';
        }
    }
})


export const answerWhomReducer = answerWhomSlice.reducer;
export const answerWhomActions = answerWhomSlice.actions;