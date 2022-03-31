import { LinkedIn, Mail } from '@mui/icons-material'
import React, { useEffect, useState } from 'react'
import Footer from './component/Footer'
import Header from './component/Header'
import { useStateValue } from './StateProvider'
import Desktop from './component/Desktop'
import './Teams.css'
import { Zoom } from 'react-reveal'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import 'react-lazy-load-image-component/src/effects/blur.css';


function Teams() {

  const [{ blackShow }, dispatch] = useStateValue()

  const ayanlink = () => {
    window.open('https://www.linkedin.com/in/ayan-dutta-115850190/', '_blank');
  }

  const neellink = () => {
    window.open('https://www.linkedin.com/in/neeldhruba-dasgupta-4a92521ba/', '_blank');
  }

  const sounaklink = () => {
    window.open('http://linkedin.com/in/sounak-ghosh-a0b3b8195', '_blank');
  }

  const sahelimail = () => {
    const mail = 'mailto:computer100engineering@gmail.com';
    const a = document.createElement('a');
    a.href = mail;
    a.click();
  }

  const samLink = () => {
    window.open('http://linkedin.com/in/sammitpal2000', '_blank');
  }
  const viveklink = () => {
    window.open('https://www.linkedin.com/in/vivek-kumar-741725173', '_blank');
  }

  useEffect(() => {
    dispatch({
      type: 'SET_BLACK',
      blackShow: true
    })
  }, [])

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
        pw ? (<div className='teams'>
          <div className="teams_top">
            <Header />
          </div>
          <div className="teamsBody">
            <div className="teamsRow">
              <Zoom>
                <div className="teamcardayan">
                  <div className="info">
                  <h3>Ayan Dutta</h3>
                  <p>Team Leader</p>
                  </div>
                  <div className='linkedinCard'>
                  <LinkedIn className='linkedin' onClick={ayanlink} />
                  </div>
                </div>
              </Zoom>
              <Zoom>
                <div className="teamcardsammit">
                  <div className="info">
                  <h3>Sammit Pal</h3>
                  <p>Team Member</p>
                  </div>
                  <div className='linkedinCard'>
                  <LinkedIn className='linkedin' onClick={samLink} />
                  </div>
                </div>
              </Zoom>
              <Zoom>
                <div className="teamcardneelu">
                 <div className="info">
                 <h3>Neeldhruba Dasgupta</h3>
                  <p>Team Member</p>
                 </div>
                 <div className='linkedinCard'>
                  <LinkedIn className='linkedin' onClick={neellink} />
                  </div>
                </div>
              </Zoom>
              <Zoom>
                <div className="teamcardvivek">
                  <div className="info">
                  <h3>Vivek Kumar</h3>
                  <p>Team Member</p>
                  </div>
                  <div className='linkedinCard'>
                  <LinkedIn className='linkedin' onClick={viveklink} />
                  </div>
                </div>
              </Zoom>
              <Zoom>
                <div className="teamcardsaheli">
                  <div className="info">
                  <h3>Saheli Roy</h3>
                  <p>Team Member</p>
                  </div>
                  <div className='linkedinCard'>
                  <Mail className='linkedin' onClick={sahelimail} />
                  </div>
                </div>
              </Zoom>
              <Zoom>
                <div className="teamcardsounak">
                  <div className="info">
                  <h3>Sounak Ghosh</h3>
                  <p>Team Member</p>
                  </div>
                  <div className='linkedinCard'>
                    <LinkedIn className='linkedin' onClick={sounaklink} />
                  </div>
                </div>
              </Zoom>
            </div>
          </div>
          <div className="teamsFooter">
            <Footer />
          </div>
        </div>) : (
          <Desktop />
        )
      }
    </>
  )
}

export default Teams
