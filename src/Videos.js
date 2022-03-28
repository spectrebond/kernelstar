import { Button } from '@material-ui/core';
import { Add, Close, Mic, MicOff, Save, Search, SettingsInputAntenna } from '@material-ui/icons';
import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import Footer from './component/Footer';
import Header from './component/Header';

import VideoCard from './component/VideoCard';

import { useStateValue } from './StateProvider'
import './Videos.css'

function Videos() {
  const [{ label, value }, dispatch] = useStateValue();
  const [videos, setVideos] = useState([]);
  const [micoff, setmicOff] = useState(true)
  const [input, setInput] = useState("");
  const [placeholder, setPlaceholder] = useState(null);

  const [isLoading, setisLoading] = useState(false);


  const [open, setOpen] = useState(false);

  const history = useHistory()
  useEffect(() => {
    if (label == null) {
      history.push('/courses')
    }
  }, [label])
  const URL = `https://kernelbackend.herokuapp.com/api/${value}`

  useEffect(async () => {
    setisLoading(true)
    const options = {
      headers: {
        'auth-token': localStorage.getItem('token')
      }
    }
    const resp = await fetch(URL, options);
    const respData = await resp.json();
    if (respData.error) {
      setisLoading(false)
      history.push('/');
    }
    else {
      setTimeout(() => {
        setisLoading(false)
        setVideos(respData)
      }, 2000);
    }
    console.log(respData)
  }, [value, localStorage.getItem('token')])

  const starRecognition = () => {

    setmicOff(false);

    var SpeechRecognition = window.speechRecognition || window.webkitSpeechRecognition;
    const recognition = new SpeechRecognition();
    recognition.onstart = function () {
      setPlaceholder("listening, please speak...")
    };

    recognition.onspeechend = function () {
      setPlaceholder("stopped listening, hope you are done...");
      recognition.stop();
      setmicOff(true);
    }

    recognition.onresult = function (event) {
      var transcript = event.results[0][0].transcript;
      setInput(transcript)
      setPlaceholder(null)
      setmicOff(true)
    };

    recognition.start();

  }

  useEffect(() => {
    serachVideos(input)
  }, [input])

  async function serachVideos(input) {
    const options = {
      headers: {
        'auth-token': localStorage.getItem('token')
      }
    }
    const url = `https://kernelbackend.herokuapp.com/api/${value}/` + input;

    const resp = await fetch(url, options);
    const respData = await resp.json();
    if (respData.error) {
      history.push('/');
    }
    else {
      setVideos(respData)
    }
    console.log(respData)
  }

  const openNotes = () => {
    setOpen(true);
  }

  const close = () => {
    setOpen(false)
  }

  const [pw, setPw] = useState();
useEffect(() => {
    if (window.innerWidth < 800) {
      setPw(false);
    } else {
      setPw(true);
    }
  }, [document.clientWidth]);

  return (
    <>
      <div className='videos'>
        <div className="videos_top">
          <Header />
        </div>
        <div className="videosHeader">
          <h1>Videos on {label}</h1>
          <div className="inputBar">
            <Search />
            <input type="text" name="" id="" placeholder={!placeholder ? ("Search videos on " + label) : (placeholder)} value={input} onChange={(e) => setInput(e.target.value)} />
            {
              micoff ? (<MicOff onClick={starRecognition} className='mic' />) : (<Mic />)
            }
          </div>


        </div>
        <div className="videosBody">
          {
            !isLoading ? (videos.length > 0 ? videos.map((video) => (
                <VideoCard  key={video._id} topic={video.topic} subtopic={video.subtopic} desc={video.desc} videoUrl={video.videoUrl} />
            )):(<h1 style={{color: 'gray'}}>No Videos Yet 😟</h1>)):(<img src={process.env.PUBLIC_URL+'./loading.svg'}/>)
          }
        </div>
        <div className="videosBottom">
          <Footer/>
        </div>
      </div>
      
    </>
  )
}

export default Videos
