import { Close, Delete, Visibility } from '@mui/icons-material'
import React, { useState } from 'react'
import { useStateValue } from '../StateProvider';
import { Fade, Zoom } from 'react-reveal'
import './NotesCard.css'
import { IconButton } from '@material-ui/core';
import ReactTimeago from 'react-timeago';
function NotesCard({ id, title, desc, date }) {

  const [{ deleted }, dispatch] = useStateValue();

  const [open, setOpen] = useState(false);

  const URL = 'https://kernelbackend.herokuapp.com/api/notes/';
  const deleteNote = async () => {

    var conf = window.confirm("Are you sure you want to delete this note?");

    if (conf == true) {
      const options = {
        method: 'DELETE',
        headers: {
          'auth-token': localStorage.getItem('token')
        }
      }

      const resp = await fetch(URL + id, options);
      const respData = await resp.json();

      if (respData.message) {
        dispatch({
          type: 'SET_DELETED',
          deleted: true
        })
      }
    }
  }

  const view = () => {
    setOpen(true)
  }

  const closeNote = () => {
    setOpen(false)
  }

  return (
    <>
      <Fade right>
        <div className='notesCard'>

            <h3>{title}</h3>
            <h3>{desc}</h3>
            <p>
              <ReactTimeago date={date} />
            </p>
          
            <IconButton onClick={view} className='noteCardIcon_btn'>
              <Visibility />
            </IconButton>
            <IconButton onClick={deleteNote} className='noteCardIcon_btn'>
              <Delete />
            </IconButton>
        </div>
      </Fade>
      {
        open && (
          <div className="modalNote">
            <div className="modalNoteContainer">
              <h2>{title}</h2>
              <h3>{desc}</h3>
              <Close className='noteClose' onClick={closeNote} />
            </div>
          </div>
        )
      }
    </>
  )
}

export default NotesCard
