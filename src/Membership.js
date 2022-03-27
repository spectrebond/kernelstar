import { Avatar, TextField, Button } from '@material-ui/core'
import { Add, GpsFixed } from '@material-ui/icons'
import Webcam from "react-webcam";
import React, { useCallback, useEffect, useRef, useState } from 'react'
import Header from './component/Header'
import './Membership.css'
import QRCode from 'react-google-qrcode';

function Membership() {

  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [age, setAge] = useState("")
  const [college, setCollege] = useState("")


  const [img, setImg] = useState(null)

  const [loc, setLoc] = useState(null)

  const [memberCard, setMemberCard] = useState(null);

  const videoConstraints = {
    width: 100,
    height: 100,
    facingMode: "user"
  };

  const webcamRef = useRef(null);

  const capture = useCallback(
    () => {
      const imageSrc = webcamRef.current.getScreenshot();
      setImg(imageSrc)
    },
    [webcamRef]
  );

  const detectLoc = () => {
    const geoId = navigator.geolocation.getCurrentPosition(
      async (position) => {
        const lng = position.coords.longitude;
        const lat = position.coords.latitude;

        console.log({ lat, lng }, position.coords.accuracy);
        if (position.coords.accuracy > 100) {
          alert("The GPS accuracy isn't good enough");
        }
        else {
          const LOCATIONURL = (lat, lon) => `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=668c962f5577e05bd4166493d270799e`
          const resp = await fetch(LOCATIONURL(position.coords.latitude, position.coords.longitude));
          const respData = await resp.json();
          console.log(respData.name)
          setLoc(respData.name)
        }
      },
      (e) => {
        alert(e.message);
      },
      { enableHighAccuracy: true, maximumAge: 5000, timeout: 100000 }
    );
    return () => {
      console.log('Clear watch called');
      window.navigator.geolocation.clearWatch(geoId);
    };
  }

  const URL = 'https://kernelstar.herokuapp.com/api/membership/'
  const submit = async () => {
    const data = {
      image64: img,
      name: name,
      email: email,
      age: age,
      college: college,
      location: loc
    }

    const options = {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        'auth-token': localStorage.getItem('token')
      },
      body: JSON.stringify(data)
    }

    const resp = await fetch(URL + localStorage.getItem('uid'), options);
    const respData = await resp.json();

    if (respData) {
      getData()
    }
  }

  async function getData() {
    const options = {
      method: 'GET',
      headers: {
        'auth-token': localStorage.getItem('token')
      },
    }

    const resp = await fetch(URL + localStorage.getItem('uid'), options);
    const respData = await resp.json();

    console.log(respData)
    setMemberCard(respData)
  }

  useEffect(() => {
    getData()
  }, [localStorage.getItem('uid')])


  return (
    <div className='membership'>
      <div className="membershipTop">
        <Header />
      </div>
      <div className="membershipBottom">
        {
          !memberCard ? (
            <div className="membershipForm">
              {
                img ? (
                  <Avatar src={img} className='memberAvatar' style={{ height: '100px', width: '100px' }} />
                ) : (<>
                  <Webcam
                    mirrored={true}
                    audio={false}
                    height={100}
                    ref={webcamRef}
                    screenshotFormat="image/jpeg"
                    width={100}
                    videoConstraints={videoConstraints}
                  />
                  <Button onClick={capture}>Capture</Button>
                </>)
              }

              <TextField label='Your Name' variant='standard' type='text' fullWidth value={name} onChange={(e) => setName(e.target.value)} />
              <TextField label='Email' variant='standard' type='email' fullWidth value={email} onChange={(e) => setEmail(e.target.value)} />
              <TextField label='Age' variant='standard' type='number' fullWidth value={age} onChange={(e) => setAge(e.target.value)} />
              <TextField label='College' variant='standard' type='text' fullWidth value={college} onChange={(e) => setCollege(e.target.value)} />
              <div className="mui-inputBar">
                <TextField className='locField' label='Location' variant='standard' type='text' fullWidth value={loc} onChange={(e) => setLoc(e.target.value)} />
                <Button className='detectBtn' variant='contained' startIcon={<GpsFixed />} onClick={detectLoc}>Auto Detect</Button>
              </div>
              <Button variant='contained' onClick={submit}>Submit</Button>
            </div>
          ) : (
            <div className='memberCard'>
              <div className="memberCard_top">
                <div className="memberuserCard_info">
                <Avatar src={memberCard.image64} />
                <h3>{memberCard.name}</h3>
                </div>

                <QRCode
                  data={memberCard.uid}
                  size={50}
                />


              </div>
              <div className="memberCard_bottom">
                <p><strong>Email: </strong>{memberCard.email}</p>
                <p><strong>College: </strong>{memberCard.college}</p>
                <p><strong>Age: </strong>{memberCard.age}</p>
                <p><strong>Location: </strong>{memberCard.location}</p>
              </div>
            </div>
          )
        }
      </div>
    </div>
  )
}

export default Membership
