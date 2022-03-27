import React, { useEffect, useState } from 'react'
import Footer from './component/Footer'
import './About.css'
import { Fade, Zoom } from 'react-reveal'
import Header from './component/Header'
import Desktop from './component/Desktop'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import 'react-lazy-load-image-component/src/effects/blur.css';

function About() {
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
      <div className='about'>
      <div className="aboutTop">
        <Header/>
      </div>
      <div className="aboutBody">
        <Fade>
        <div className="aboutBody_left">
            <h1>About KernelStar</h1>
            <p> <span>“Some well-organized facts are much more consumable than some random haphazard facts” </span> - The main moto for us to start Kernel Star. We believe that the IT industry is not only humongous but also it is increasing its branches exponentially every day and in this booming scenario of I.T industry one must be well aware and grasp the very basic concepts to sustain in the field, and we provide the same thing with our well-organized videos and documents and a student-friendly UI because we believe <span className='last'>“Preparation is the key to win any battle”</span></p>
        </div>
        </Fade>
        <Fade bottom>
        <div className="aboutBody_right">
          <LazyLoadImage src={process.env.PUBLIC_URL+'./modalimg.png'} alt="" />
        </div>
        </Fade>
      </div>
      <div className="aboutFooter">
        <Footer/>
      </div>
    </div>
    ):(
      <Desktop/>
    )
  }
  </>
  )
}

export default About
