import React, { useState } from 'react'
import { useEffect } from 'react'
import { Fade } from 'react-reveal'
import Desktop from './component/Desktop'
import Footer from './component/Footer'
import Header from './component/Header'
import NotesCard from './component/NotesCard'
import Sidebar from './component/Sidebar'
import './Notes.css'
import { useStateValue } from './StateProvider'
function Notes() {
  const NOTESURL = 'https://kernelbackend.herokuapp.com/api/notes/';

  const [notes, setNotes] = useState([]);
  const [{ token, deleted }, dispatch] = useStateValue();

  useEffect(async () => {

    if (deleted) {
      getNotes()
      dispatch({
        type: 'SET_DELETED',
        deleted: false
      })
    }
    else{
      getNotes()
    }

  }, [localStorage.getItem('uid'), deleted])

  async function getNotes() {
    const options = {
      headers: {
        'content-type': 'application/json',
        'auth-token': localStorage.getItem('token')
      }
    }

    const resp = await fetch(NOTESURL + localStorage.getItem('uid'), options);
    const respData = await resp.json();

    if(resp.status === 500){
      alert(respData.error)
    }
    else{
      setNotes(respData);
    }

  }

  const [pw, setPw] = useState();
useEffect(() => {
    if (window.outerWidth < 800) {
      setPw(false);
    } else {
      setPw(true);
    }
  }, [document.clientWidth]);

  return (
   <>
   {
     pw ? (
      <div className='notes'>
      <div className="note_top">
        <Header />

      </div>
      <div className="notesBody">
        <div className="notesLeft">
          <Sidebar />
        </div>
        <div className="notesRight">
          <h2>Your Notes</h2>
          <div className="allnotes">
            {
              notes.length > 0 ? notes.map(note => (
                  <NotesCard key={note._id} id={note._id} title={note.title} desc={note.description} date={note.date} />
              )):(<h1 className='noNotes'>No Notes Yet</h1>)
            }
          </div>
        </div>
      </div>
      <div className="notesBottom">
        <Footer/>
      </div>
    </div>
     ):(
       <Desktop/>
     )
   }
   </>
  )
}

export default Notes
