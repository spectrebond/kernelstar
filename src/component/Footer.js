import { ArrowUpward, Facebook, Instagram, Mail, Twitter } from '@material-ui/icons'
import React from 'react'
import logo from './logo.png'
import './Footer.css'
import { Fade, Slide } from 'react-reveal'
import { useHistory } from 'react-router'
function Footer() {

  const history = useHistory()
  const videos = () =>{
    history.push('/courses')
  }
  const docs = () =>{
    history.push('/docs')
  }
  const faqs = () =>{
    history.push('/faq')
  }
  const squad = () =>{
    history.push('/teams')
  }
  
  const joinus = () =>{
    window.open('https://kernelstarcarrers.vercel.app/','_blank');
  }

  return (
    <div className='footer'>
      <div className="top">

        <div className="topLeft">
          <img src={logo} alt="" />
        </div>

        <div className="topCenter1">
          <h2>Quick Links</h2>
          <p onClick={videos}>Videos</p>
          <p onClick={docs}>Documents</p>
          <p onClick={squad}>Our Squad</p>
          <p onClick={faqs}>FAQ's</p>
        </div>
        <div className="topCenter2">
          <h2>KernelStar For Developers</h2>
          <p onClick={joinus}>Join Us</p>
        </div>
        
        <div className="topRight">
          <a href="mailto: spectrebond200@gmail.com"><Mail className='mailIcon'/>spectrebond200@gmail.com</a>
        </div>
      
      </div>
      <div className="bottom">
        <p>&copy; Copyright KernelStar {new Date().getFullYear()}</p>
      </div>
    </div>
  )
}

export default Footer
