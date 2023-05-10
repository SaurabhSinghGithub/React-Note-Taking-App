import React from 'react'
import { Link } from 'react-router-dom'
import "./SideBar.scss"
import { AiFillHome } from "react-icons/ai";
import { MdNoteAlt } from "react-icons/md";
import { BsPlusLg } from "react-icons/bs";
import { useLocation } from 'react-router-dom'

const SideBar = () => {

  const location = useLocation();
  const pathname = location.pathname;
 

  return (

    <ul className="sidebar">

      <Link to="/" className='home'>
        <AiFillHome className='icon' />
      </Link>
      <hr />

      <Link to="/notes" className={pathname === "/notes" ? 'active notes links' : 'notes links'}>

        <MdNoteAlt className='icon' />
        <p>Notes</p>

      </Link>

      <Link to="/addNotes" className={pathname === "/addNotes" ? 'active notes links' : 'notes links'}>

        <BsPlusLg className='icon' />
        <p>AddNotes</p>

      </Link>
    </ul>

  )
}

export default SideBar;