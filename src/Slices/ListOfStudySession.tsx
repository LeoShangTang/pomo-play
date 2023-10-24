import { createSlice } from "@reduxjs/toolkit";
import { IStudySession } from "./StudySession";

interface IListOfStudySession {
    ListOfStudySession: IStudySession[];
}

const initialState: IListOfStudySession = {
    ListOfStudySession: [],
};


export const ListOfStudySessionSlice = createSlice({
    name: "foodDrink",
    initialState,
    reducers: {
        addStudySession: (state, action) => {
            const { studySession } = action.payload;
            state.ListOfStudySession.unshift(studySession);
        }
    },
})

export type { IListOfStudySession };
export const { addStudySession } = ListOfStudySessionSlice.actions;
export default ListOfStudySessionSlice.reducer;;