import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuid } from "uuid";
import storeNoteInLocalStorage from "../storeNoteInLocalStorage";
import getNoteFromLocalStorage from "../getNoteFromLocalStorage";

const initialState = {
    notes: getNoteFromLocalStorage("notes"),
    error: null,
}

const NoteSlice = createSlice({
    name: "notes",
    initialState,
    reducers: {
        addNote(state, action) {
            const { title, content } = action.payload;
            let noteId = uuid();

            let tempNotes = { noteId, title, content };
            tempNotes.noteDate = new Date().toISOString();

            state.notes.push(tempNotes);
            storeNoteInLocalStorage("notes", state.notes);

        },
        deleteNote(state, action) {

            const tempId = action.payload;

            const tempNotes = state.notes.filter((curElem) => {
                return curElem.noteId !== tempId;
            })

            state.notes = tempNotes;
            storeNoteInLocalStorage('notes', tempNotes);

        },
        editNote(state, action) {
            const { noteId, title, content } = action.payload;

            const tempNotes = state.notes.map((note) => {

                if (note.noteId === noteId) {

                    note.title = title;
                    note.content = content;
                    note.noteDate = new Date().toISOString();

                }

                return note;

            })

            state.notes = tempNotes;
            storeNoteInLocalStorage("notes", tempNotes)

        },
    }
})
export const { addNote, deleteNote, editNote } = NoteSlice.actions;
export const getAllNotes = (state) => state.notes.notes;
export const getAllCounts = (state) => state.notes.count;

export default NoteSlice.reducer;