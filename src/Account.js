import React, { useEffect } from 'react'
import Header from './component/Header'
import './Account.css'
import { useState } from 'react'
import Sidebar from './component/Sidebar'
import { Button } from '@material-ui/core'
import Footer from './component/Footer'
import Desktop from './component/Desktop'
import platform from 'platform'
import { Fade } from 'react-reveal'
function Account() {
  const [user, setUser] = useState();

  const [username, setUsername] = useState("")

  const URL = 'https://kernelbackend.herokuapp.com/api/user/account/';
  const userupdate = 'https://kernelbackend.herokuapp.com/api/user/account/username/'

  const [isLoading, setisLoading] = useState(false);


  useEffect(async () => {
    getUser();
  }, [localStorage.getItem('uid')])

  async function getUser() {
    setisLoading(true)
    const options = {
      headers: {
        'auth-token': localStorage.getItem('token')
      }
    }

    if (localStorage.getItem('uid')) {
      const resp = await fetch(URL + localStorage.getItem('uid'), options);
      const respData = await resp.json();
      setTimeout(() => {
        setisLoading(false)
        setUser(respData)
      }, 2000);
    }
  }

  const usernameUpdate = async () => {
    const body = {
      username: username
    }
    const options = {
      method: 'PUT',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(body)
    }

    const resp = await fetch(userupdate + localStorage.getItem('uid'), options);
    const respData = await resp.json();

    console.log(respData)
    getUser()
    setUsername("");
    window.location.reload()
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
          <div className='account'>
            <div className="account_top">
              <Header />
            </div>
            
             
                <div className="accountBody">
                  {
                    isLoading ? (<img src={process.env.PUBLIC_URL+'./loading.svg'} className='loadingImage'/>) : (<>
                      <div className="account_left">
                      <Sidebar />
                    </div>
                    <Fade >
                    <div className="account_right">
                      <div className="accRightTop">
                        <h2>Your Profile Information</h2>
                        <div className="accCard">
                          <h3><strong>Username</strong>: {user?.username}</h3>
                          <p><strong>Email:</strong> {user?.email}</p>
                          <p><strong>Device Description</strong>: {platform.description}</p>
                        </div>
                      </div>
                      <div className="accRightBottom">
                        <h2>Edit Profile Information</h2>
  
                        <div className="editCard">
                          <div className="inputOptions">
                            <label htmlFor="username">Username</label>
                            <input type="text" name="" id="username" placeholder={user?.username} value={username} onChange={(e) => setUsername(e.target.value)} />
                            {/* //{`chat_message ${message.name===user.displayName && 'chat_reciever'}`} */}
                            <Button className={`${username.length === 0 ? 'disabled' : 'accBtn'}`} variant='contained' onClick={usernameUpdate} disabled={!username}>Update</Button>
                          </div>
  
                        </div>
                      </div>
                    </div>
                    </Fade>
                      </>)
                  }
                </div>
              
            
            <div className="accountBottom">
              <Footer />
            </div>
          </div>
        ) : (
          <Desktop />
        )
      }
    </>
  )
}

export default Account
