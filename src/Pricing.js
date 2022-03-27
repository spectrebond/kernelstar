import React from 'react'
import Header from './component/Header'
import "./Pricing.css"
import Footer from './component/Footer'
import { Button } from '@material-ui/core'
function Pricing() {
  return (
    <div className='pricing'>
      <div className="pricingTop">
        <Header />
      </div>
      <div className="pricingBody">
        <div className="priceCard">
          <div className="priceCard_info">
            <h1>₹0/month</h1>
            <h2>Basic</h2>
            <p>Get Free Videos</p>
          </div>
          <Button variant='contained' fullWidth className='getStarted'>Get Started</Button>
        </div>
        <div className="priceCard">
          <div className="priceCard_info">
            <h1>₹399/month</h1>
            <h2>👑 Premium</h2>
            <p>Get Free Videos</p>
            <p>Easy and Interactive Documents</p>
            <p>Get access to our classroom</p>
            <p>Kernel Whiteboard</p>
          </div>
          <Button variant='contained' fullWidth className='getStarted'>Get Started</Button>
        </div>
      </div>
      <div className="pricingBotttom">
        <Footer />
      </div>
    </div>
  )
}

export default Pricing
