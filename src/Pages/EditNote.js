import React from 'react'
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getAllNotes } from '../store/slices/NoteSlice';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import { editNote } from '../store/slices/NoteSlice';

const Editnote = () => {

  const { id } = useParams();
  const dispatch = useDispatch()
  const notes = useSelector(getAllNotes);
  let tempNotes = notes.filter(curElem => curElem.noteId === id)

  const [userInput, setuserInput] = useState(tempNotes[0])

  const [titleError, settitleError] = useState(false)
  const [contentError, setcontentError] = useState(false)
  const [canSave, setCanSave] = useState(false)


  const handleChange = (event) => {

    event.preventDefault();

    const { name, value } = event.target

    if (name === "title") {

      if (value.length === 0) {

        settitleError(true)

      } else {
        settitleError(false)
        setCanSave(true)

      }

    }

    if (name === "content") {

      if (value.length === 0) {

        setcontentError(true)

      } else {
        setcontentError(false)
        setCanSave(true)
      }

    }

    setuserInput((preValue) => {

      return {
        ...preValue,
        [name]: value,
      }

    })
  }

  const onSave = () => {

    if (!titleError && !contentError) {

      dispatch(editNote(userInput))
      toast("Note Added!")
      setuserInput({
        title: "",
        content: "",
      })

    }

  }


  return (
    <div className='form'>

      <h2>Add New Note</h2>

      <hr />

      <form action="" onSubmit={(e) => e.preventDefault()}>

        <label htmlFor="title">Title:</label>
        <input type="text" name="title" id="title" placeholder='Note Title here...'
          onChange={handleChange}
          value={userInput.title} />

        <span>{titleError ? "Title can't be empty!" : ""}</span>

        <label htmlFor="Content">Content:</label>
        <textarea name="content" id="Content" cols="30" rows="10" placeholder='Note Content here...'
          onChange={handleChange}
          value={userInput.content}></textarea>

        <span>{contentError ? "Content can't be empty!" : ""}</span>

        <button onClick={onSave} disabled={!canSave}>SAVE NOTE</button>

        <ToastContainer />

      </form>

    </div>
  )
}

export default Editnote;