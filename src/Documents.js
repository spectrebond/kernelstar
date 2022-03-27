import { Mic, MicOff, Search } from '@material-ui/icons';
import React, { useEffect } from 'react'
import { useState } from 'react';
import DocsCard from './component/DocsCard';
import Footer from './component/Footer';
import Header from './component/Header'
import './Documents.css'
function Documents() {

  const [micoff, setmicOff] = useState(true)
  const [input, setInput] = useState("");
  const [placeholder, setPlaceholder] = useState(null);

  const [isLoading, setIsLoading] = useState(false)

  const url = `https://kernelbackend.herokuapp.com/api/docs`;
  const [docs, setDocs] = useState([]);
  useEffect(async () => {
    setIsLoading(true)

    const resp = await fetch(url);
    const respData = await resp.json();
    if(resp.ok){
      setTimeout(() => {
        setDocs(respData)
        setIsLoading(false)
      }, 2000);
    }
  }, [])
  console.log(docs)
  
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
  
  
  useEffect(async()=>{
    const filterurl = `https://kernelbackend.herokuapp.com/api/docs/`;
    const resp = await fetch(filterurl+input)
    const respData = await resp.json()

    setDocs(respData)
  },[input])

  const [pw, setPw] = useState();
useEffect(() => {
    if (window.innerWidth < 800) {
      setPw(false);
    } else {
      setPw(true);
    }
  }, [document.clientWidth]);

  const tags = [
    {
      tagname: "Java",
      value: "java"
    },
    {
      tagname: "Python",
      value: "python"
    },
    {
      tagname: "Data Structures",
      value: "data structures"
    },
    {
      tagname: "Algorithms",
      value: "algorithms"
    },
    {
      tagname: "Development",
      value: "development"
    },
  ]

 
  return (
    <div className='docs'>
      <div className="docsTop">
        <Header />
      </div>
      <div className="docsBody">
        <div className="docsBodyTop">
          <div className="inputBar">
            <Search />
            <input type="text" name="" id="" placeholder={!placeholder ? ("Search documents") : (placeholder)} value={input} onChange={(e) => setInput(e.target.value)} />
            {
              micoff ? (<MicOff onClick={starRecognition} className='mic' />) : (<Mic />)
            }
          </div>
          <div className="tags">
            {
              tags.map(tag => (
                <p onClick={(e)=>setInput(tag.value)}>{tag.tagname}</p>
              ))
            }
          </div>
        </div>

        <div className="docsBodyBottom">
        {
          isLoading ? (<img src={process.env.PUBLIC_URL+'./loading.svg'}/>) : (
            docs && docs.map((doc, index) => (
              <DocsCard number={index} key={doc._id} topic={doc.topic} subtopic={doc.subtopic} url={doc.docsUrl} />
            ))
          )
        }
        </div>
      </div>
      <div className="docsBottom">
        <Footer/>
      </div>
    </div>
  )
}

export default Documents
