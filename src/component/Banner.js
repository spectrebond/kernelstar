import { ArrowDownward, MenuBook, Search } from '@mui/icons-material'
import React, { useEffect, useState } from 'react'
import Fade from 'react-reveal/Fade'

import './Banner.css'
import { useHistory } from 'react-router-dom'
function Banner() {

  const ACC = "https://kernelbackend.herokuapp.com/api/user/account";
  const [user, setUser] = useState(null);
  const history = useHistory()

  
  useEffect(async () => {
    if (localStorage.getItem("uid")) {

      const options = {
        headers: {
          'auth-token': localStorage.getItem('token')
        }
      }

      const resp = await fetch(ACC + "/" + localStorage.getItem("uid"),options);
      const respData = await resp.json();
      if(resp.ok){
        setUser(respData);
      }
    }
  }, [user?.profileUrl || localStorage.getItem("uid")]);

  const login = () =>{
    history.push('/login')
  }
  return (
    <div className="banner">
      <Fade distance="200px" duration={2000}>
      <div className='banner_left'>
        <h1>Kernel<span>star</span></h1>
        <h2>Learning with us is easy.</h2>
        {
          !user ? (
            <button className='bannerBtn' onClick={login}>Let's Get Started / Login</button>
          ):(
            <h3>Welcome, {user?.username}</h3>
          )
        }
      </div>
      </Fade>
      <Fade distance="200px" duration={2000}>
      <div className="banner_right" >
        <img src={process.env.PUBLIC_URL+'./onlinelearn.svg'} alt="" />
      </div>
      </Fade>
        <a href="#scroll"><ArrowDownward className='arrdown'/></a>
    </div>
  )
}

export default Banner
