import React from 'react'
import NoteList from '../Components/Sidebar/Notelist/NoteList'
import { useSelector } from 'react-redux'
import { getAllNotes } from '../store/slices/NoteSlice'

const Notes = () => {

    const notes = useSelector(getAllNotes)

    return (
        <NoteList notes={notes} />
    )
}

export default Notes;