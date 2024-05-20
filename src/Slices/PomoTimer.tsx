import { createSlice } from "@reduxjs/toolkit";
import taskSample from "../SampleData/tasksSample";

// Duration is in minutes

export enum TTimers {
    shortBreak = "shortBreak",
    longBreak = "longBreak",
    study = "study",
}

// Time is in minutes
interface IPomoTimer {
    StudyTimer: number,
    ShortBreakTimer: number,
    LongBreakTimer: number,
    CurrentTimer: String,
}

// Current time does not have to be universal... 
// Current time can be a local useState; whereas, switching the timers can be done in store
// useEffect to update local time state when updating CurrentTimer

const initialState: IPomoTimer = {
    StudyTimer: 25,
    ShortBreakTimer: 5,
    LongBreakTimer: 15,
    CurrentTimer: TTimers.study
};

export const PomoTimerSlice = createSlice({
    name: "PomoTimer",
    initialState,
    reducers: {
        changeTimer: (state, action) => {
            const { timer } = action.payload;
            console.log(timer.CurrentTimer);
            // console.log(timer.CurrentTimer);
            state.CurrentTimer = timer.CurrentTimer;
        },
    },
})

export default PomoTimerSlice.reducer;

// export type { IListOfTask, ITask };
// export const { addTask, removeTask, editTask } = ListOfTaskSlice.actions;
// export default ListOfTaskSlice.reducer;
export const { changeTimer } = PomoTimerSlice.actions;
export type { IPomoTimer };