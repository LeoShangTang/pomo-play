import { createSlice } from "@reduxjs/toolkit";
import taskSample from "../SampleData/tasksSample";

// Duration is in minutes

export enum Timers {
    ShortBreak = "shortBreak",
    longBreak = "longBreak",
    Study = "study",
}

// Time is in minutes
interface ICountDownTimer {
    StudyTimer: number,
    ShortBreakTimer: number,
    LongBreakTimer: number,
    CurrentTimer: String,
}

// Current time does not have to be universal... 
// Current time can be a local useState; whereas, switching the timers can be done in store
// useEffect to update local time state when updating CurrentTimer

const initialState: ICountDownTimer = {
    StudyTimer: 25,
    ShortBreakTimer: 5,
    LongBreakTimer: 15,
    CurrentTimer: Timers.Study
};

export const CountDownTimer = createSlice({
    name: "CountDownTimer",
    initialState,
    reducers: {
        changeTimer: (state, action) => {
            const { timer } = action.payload;
            state.CurrentTimer = timer;
        },

    },
})

export default CountDownTimer.reducer;

// export type { IListOfTask, ITask };
// export const { addTask, removeTask, editTask } = ListOfTaskSlice.actions;
// export default ListOfTaskSlice.reducer;

export type { ICountDownTimer };