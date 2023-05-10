import { configureStore } from "@reduxjs/toolkit";
import noteReducer from "./slices/NoteSlice"


const notes = configureStore({
    reducer: {
        notes: noteReducer,
    }
})

export default notes;