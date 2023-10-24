import { combineReducers, configureStore } from "@reduxjs/toolkit";
import ListOfStudySessionReducer from "./Slices/ListOfStudySession";

const rootReducer = combineReducers({
    listOfStudySession: ListOfStudySessionReducer,
});

export const store = configureStore({
    reducer: rootReducer
});

export type RootState = ReturnType<typeof store.getState>;
