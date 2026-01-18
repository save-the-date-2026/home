import {createSlice, type PayloadAction} from "@reduxjs/toolkit";

type FormState = {
    answers: Record<string, any>;
};

const initialState: FormState = {
    answers: {},
};

const formSlice = createSlice({
    name: 'form',
    initialState,
    reducers: {
        saveBlockAnswers: (state, action: PayloadAction<Record<string, any>>) => {
            state.answers = { ...state.answers, ...action.payload };
        },
        resetForm: () => initialState,
    },
});

export const { saveBlockAnswers, resetForm } = formSlice.actions;
export const formReducer = formSlice.reducer;
