import { createSlice } from "@reduxjs/toolkit";

// Duration is in minutes
interface IStudySession {
    id: string;
    name: string;
    timeStarted: Date;
    timeEnded: Date;
}

interface IListOfStudySession {
    ListOfStudySession: IStudySession[];
}

const initialState: IListOfStudySession = {
    ListOfStudySession: [],
};

export const ListOfStudySessionSlice = createSlice({
    name: "ListOfStudySession",
    initialState,
    reducers: {
        addStudySession: (state, action) => {
            const { studySession } = action.payload;
            state.ListOfStudySession = [studySession, ...state.ListOfStudySession];
        },
        removeStudySession: (state, action) => {
            const { id } = action.payload;
            state.ListOfStudySession = state.ListOfStudySession.filter((StudySession) => StudySession.id !== id);
        },
        editStudySession: (state, action) => {
            const { updateData } = action.payload;
            const indexToUpdate = state.ListOfStudySession.findIndex((StudySession) => StudySession.id === updateData.id);
            const isExistingIndex = indexToUpdate != -1;
            if (isExistingIndex) {
                state.ListOfStudySession[indexToUpdate] = {... state.ListOfStudySession[indexToUpdate], ... updateData };
            }
        }
    },
})

export type { IListOfStudySession, IStudySession };
export const { addStudySession } = ListOfStudySessionSlice.actions;
export default ListOfStudySessionSlice.reducer;;