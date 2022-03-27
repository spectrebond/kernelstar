import React, { useEffect, useState } from 'react'
import { useStateValue } from './StateProvider';
import './Login.css'
import VerifyBar from './component/VerifyBar'
import { useHistory } from 'react-router';
function Login() {
  const LOGINURL = "https://kernelbackend.herokuapp.com/api/user/login";
  const FORGET = "https://kernelbackend.herokuapp.com/api/user/forget";

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setisLoading] = useState(false);

  const [errMsg, setErrMsg] = useState("")
  const [err, setErr] = useState(true)

  const [{ token }, dispatch] = useStateValue();

  const history = useHistory()


  const forget = async () => {
    if(email){
      const data = {
        email: email,
      };
      const options = {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(data),
      };
  
      const resp = await fetch(FORGET, options);
      const respData = await resp.json();
  
      if (resp.status === 500) {
        console.log(respData.error)
        history.push('/error')
      } else {
        history.push(`/reset/${respData.rid}`)
      }
    }
    else{
      setErrMsg("Please enter your email address")
      setErr(true)
    }
  };


  const login = async () => {
    setisLoading(true)
    setErrMsg("")
    const registerData = {
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

    const resp = await fetch(LOGINURL, options);
    const respData = await resp.json();
    console.log(respData)
    if (respData.message) {
      setTimeout(() => {
        setisLoading(false)
        localStorage.setItem("uid", respData.uid);
        localStorage.setItem("token", respData.token);
        history.push('/')
        dispatch({
          type: "SET_TOKEN",
          token: respData?.token,
        });

      }, 2000);
      setErrMsg(respData.message);
      setErr(false)
    } else {
      setisLoading(false)
      setErrMsg(respData.error)
      setErr(true)
      console.log(respData.error);
    }
  };

  const regPage = () => {
    history.push('/register')
  }
  const home = () => {
    history.push('/')
  }
  useEffect(() => {
    if (localStorage.token) {
      history.push('/')
    }
  }, [localStorage.token])

  return (
    <div className='login'>
      <div className="login_left">
        <img className='loginLogo' src={process.env.PUBLIC_URL + "./logo.png"} />
        <h1>Enroll Now</h1>
        <h2>And Learn exciting stuffs for free</h2>
        <img className='loginImage' src={process.env.PUBLIC_URL + "./modalimg.png"} />
      </div>
      <div className="login_right">
        <h3>User Login</h3>
        {
          errMsg && <VerifyBar errMsg={errMsg} err = {err}/>
        }
        {
          isLoading ? (<img src={process.env.PUBLIC_URL + './loadingblack.svg'} />) : (
            <div className="loginform">
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
              <p onClick={forget}>Forgot Password? Reset Now</p>
              <button
                className="loginbtn"
                onClick={login}
              >
                Login
              </button>
              <p onClick={regPage}>New User? SignUp</p>
                  <p onClick={home}>Go Back</p>
            </div>
          )
        }
      </div>
    </div>
  )
}

export default Login
