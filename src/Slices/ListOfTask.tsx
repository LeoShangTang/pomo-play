import { createSlice } from "@reduxjs/toolkit";
import taskSample from "../SampleData/tasksSample";

// Duration is in minutes
interface ITask {
    id: string;
    name: string;
    // description: string;
    // timeStarted: Date;
    // timeEnded: Date;         Potential ideas
}

interface IListOfTask {
    listOfTask: ITask[];
}

const initialState: IListOfTask = {
    listOfTask: taskSample,
};

export const ListOfTaskSlice = createSlice({
    name: "ListOfTask",
    initialState,
    reducers: {
        addTask: (state, action) => {
            const { task } = action.payload;
            state.listOfTask = [task, ...state.listOfTask];
        },
        removeTask: (state, action) => {
            const { id } = action.payload;
            state.listOfTask = state.listOfTask.filter((task) => task.id !== id);
        },
        editTask: (state, action) => {
            const { updateData } = action.payload;
            const indexToUpdate = state.listOfTask.findIndex((task) => task.id === updateData.id);
            const isExistingIndex = indexToUpdate != -1;
            if (isExistingIndex) {
                state.listOfTask[indexToUpdate] = {... state.listOfTask[indexToUpdate], ... updateData };
            }
        }
    },
})

export type { IListOfTask, ITask };
export const { addTask, removeTask, editTask } = ListOfTaskSlice.actions;
export default ListOfTaskSlice.reducer;;