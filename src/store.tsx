import { combineReducers, configureStore } from "@reduxjs/toolkit";
import ListOfTaskReducer from "./Slices/ListOfTask";

const rootReducer = combineReducers({
    listOfTask: ListOfTaskReducer,
});

export const store = configureStore({
    reducer: rootReducer
});

export type RootState = ReturnType<typeof store.getState>;
