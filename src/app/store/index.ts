import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { formReducer } from './slice';

const rootReducer = combineReducers({
    form: formReducer,
});

export const store = configureStore({
    reducer: rootReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;
