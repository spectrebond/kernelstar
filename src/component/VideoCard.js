import React from 'react'
import { useState } from 'react'
import './VideoCard.css'
import YouTube from 'react-youtube';
import { Close, PlayCircleOutline, Save } from '@mui/icons-material';
import YouTubeIcon from '@mui/icons-material/YouTube';
import { Button, IconButton } from '@material-ui/core';
import Fade from 'react-reveal/Fade'
import Tilty from 'react-tilty'
function VideoCard({ topic, subtopic, desc, videoUrl }) {
  const [open, setOpen] = useState(false);
  const [video, setVideo] = useState("");


  const [title, setTitle] = useState("");
  const [descrip, setDesc] = useState("");


  const close = () => {
    setOpen(false)
  }

  const openModal = () => {
    setOpen(true)
    const VID_REGEX = /(?:youtube(?:-nocookie)?\.com\/(?:[^\/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/|\S*?[?&]v=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/;
    setVideo(videoUrl.match(VID_REGEX)[1]);
  }


  const NOTESURL = 'https://kernelbackend.herokuapp.com/api/notes';

  const save = async () => {
    if (localStorage.getItem('uid')) {

      const notesdata = {
        title: title,
        desc: descrip,
        uid: localStorage.getItem('uid')
      }

      const options = {
        method: 'POST',
        headers: {
          'content-type': 'application/json',
          'auth-token': localStorage.getItem('token')
        },
        body: JSON.stringify(notesdata)
      }

      const resp = await fetch(NOTESURL, options);
      const respData = await resp.json();

      if (respData) {
        alert(respData.message)
        setTitle("")
        setDesc("")
      }
      else {
        alert("Oops an error occured")
      }
    }
  }

  const opts = {
    height: '365',
    width: '648',
    frameborder: '0',
    playerVars: {
      autoplay: 1,
    },
  };


  return (
    <>
    <Fade >
      <div className='videoCard'>
        <div className="cardInfo">
          <YouTubeIcon className='ytIcon' />
          <h3>{subtopic}</h3>
          <p>{desc}</p>
        </div>
        <Button className='playbtn' variant='contained' onClick={openModal} startIcon={<PlayCircleOutline className='playIcon' />}>Play</Button>
      </div>
      </Fade>
      {
        open && (
          <div className="videoModal">
            <div className="video_container">
              <div className="notesdiv">
                <input type="text" placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} />
                <textarea type="text" placeholder="Write your Notes Here..." value={descrip} onChange={(e) => setDesc(e.target.value)} />
                <Button variant='contained' className='addNotesBtn' startIcon={<Save />} onClick={save}>Save</Button>
              </div>
              <YouTube videoId={video} opts={opts} className='ytIcon' />
              <IconButton onClick={close} className='vBtn'>
                <Close />
              </IconButton>
            </div>
          </div>
        )
      }
    </>
  )
}

export default VideoCard
