import React, { useState } from 'react'
import { useHistory } from 'react-router';
import './Register.css'

function Register() {

  const history = useHistory()

  const [isLoading, setisLoading] = useState(false);

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const REGURL = "https://kernelbackend.herokuapp.com/api/user/register";

  const register = async () => {
    setisLoading(true)
    const registerData = {
      username: username,
      email: email,
      password: password,
    };

    const options = {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(registerData),
    };

    const resp = await fetch(REGURL, options);
    const respData = await resp.json();
    if (respData.message) {
      setTimeout(() => {
        setisLoading(false)
      alert(respData.message);
      history.push('/login')
      }, 2000);
    } else {
      setisLoading(false)
      history.push('/error')
    }
  };

  const logPage = () =>{
    history.push('/login')
  }

  const handleChange = () =>{

  }

  return (
    <div className='register'>
      <div className="register_left">
      <img className='regLogo' src={process.env.PUBLIC_URL + "./logo.png"} />
        <h1>Enroll Now</h1>
        <h2>And Learn exciting stuffs for free</h2>
        <img className='regImage' src={process.env.PUBLIC_URL + "./modalimg.png"} />
      </div>
      <div className="register_right">
      <h3>Sign Up</h3>
              {
                isLoading ? (<img src={process.env.PUBLIC_URL+'./loadingblack.svg'}/>):(
              <div className="regform">
                <input
                  type="text"
                  placeholder="username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
                <input
                  type="email"
                  placeholder="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <input
                  type="password"
                  placeholder="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                  
                  <button
                    className="regBtn"
                    onClick={register}
                  >
                    Register
                  </button>
                  <p onClick={logPage}>Already an user? Login</p>
              </div>
                )
              }
      </div>
    </div>
  )
}

export default Register
