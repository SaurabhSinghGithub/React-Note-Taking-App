import React from 'react'
import { Link } from 'react-router-dom';
import { ImCancelCircle } from "react-icons/im";
import { FiEdit } from "react-icons/fi";
import "./NoteList.scss"
import { useDispatch } from 'react-redux';
import { deleteNote } from '../../../store/slices/NoteSlice';
import { parseISO, formatDistanceToNow } from 'date-fns';
import { useSelector } from 'react-redux';


const NoteList = ({ notes }) => {

    const dispatch = useDispatch();

    if (!notes || notes.length === 0) {
        return (<h1 className='not-found'>No any notes found</h1>)
    }

    return (
        <>

            <div className="header">
                <h1>Notes</h1>
            </div>
            <hr />

            <div className="notes">

                {notes.map((curElem) => {
                    const { noteId, title, content, noteDate } = curElem
                    return (
                        <div className="card" key={noteId}>
                            <div className="card-title">
                                <h3>{title.substring(0, 50) + "..."}</h3>
                                <hr />
                            </div>
                            <div className="card-content">
                                <p>{content.substring(0, 150) + "..."}</p>
                            </div>
                            <div className="card-time">
                                <p>{formatDistanceToNow(parseISO(noteDate))}</p>
                            </div>
                            <div className="card-edits">
                                <div className="card-icons">
                                    <ImCancelCircle className='icon-1'
                                        onClick={() => {
                                            dispatch(deleteNote(noteId))
                                        }
                                        } />

                                    <Link to={`/editNotes/${noteId}`}> <FiEdit className='icon-2' /></Link>
                                </div>

                                <Link to={`/singleNote/${noteId}`}><p>Read More</p></Link>

                            </div>
                        </div>
                    )
                })}

            </div>


        </>
    )
}

export default NoteList