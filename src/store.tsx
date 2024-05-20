import { combineReducers, configureStore } from "@reduxjs/toolkit";
import ListOfTaskReducer from "./Slices/ListOfTask";
import PomoTimerReducer from "./Slices/PomoTimer";

const rootReducer = combineReducers({
    listOfTask: ListOfTaskReducer,
    pomoTimer: PomoTimerReducer,
});

export const store = configureStore({
    reducer: rootReducer
});

export type RootState = ReturnType<typeof store.getState>;
