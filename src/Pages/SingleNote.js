import React from 'react'
import { useSelector } from 'react-redux'
import "./SingleNote.scss"
import { getAllNotes } from '../store/slices/NoteSlice'
import { useParams } from 'react-router'

const SingleNote = () => {
  const { id } = useParams();

  const notes = useSelector(getAllNotes);

  let pageNote = notes.filter(note => note.noteId === id)

  return (
    <>
      <div className="headers">
        <h1>{pageNote[0].title}</h1>
        <hr />
      </div>
      <p>{pageNote[0].content}</p>
    </>

  )

}

export default SingleNote