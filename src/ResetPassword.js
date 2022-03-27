import React, { useState } from 'react'
import { useParams, useHistory } from 'react-router-dom'
import './ResetPassword.css'
function ResetPassword() {

  const [password, setPassword] = useState("")
  const [cpassword, setCPassword] = useState("")

  const [isLoading, setisLoading] = useState(false)

  const { rid } = useParams()
  console.log(rid)

  const history = useHistory()

  const URL = 'https://kernelbackend.herokuapp.com/api/user/reset'

  const submit = async(e) =>{
    e.preventDefault()
    setisLoading(true)
    if(cpassword===password){
      const data = {
        token: rid,
        password: password
      }

      const options = {
        method: 'PUT',
        headers: {
          'content-type': 'application/json'
        },
        body: JSON.stringify(data)
      }

      const resp = await fetch(URL, options)
      const respData = await resp.json()

      if(resp.ok){
        setTimeout(() => {
          setisLoading(false)
          history.push('/login')
        }, 2000);
      }
      else{
        setisLoading(false)
      }
    }
  }

  return (
    <div className='resetPassword'>
      <h1>KernelStar Reset Password</h1>
      {
        isLoading ? (<img src={process.env.PUBLIC_URL+'/loadingblack.svg'}/>) : (
          <form className="reset_form">

        <div className="reset_inputBar">
          <p>Password</p>
          <input type="password" id='password' placeholder="password" value={password} onChange={(e)=>setPassword(e.target.value)}/>
        </div>

        <div className="reset_inputBar">
          <p>Confirm Password</p>
          <input type="password" id='cpassword' placeholder="confirm password" value={cpassword} onChange={(e)=>setCPassword(e.target.value)}/>
        </div>

        <button className="reset_btn" type='submit' onClick={submit}>Submit</button>
      </form>
        )
      }
    </div>
  )
}

export default ResetPassword
