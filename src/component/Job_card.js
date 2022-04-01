import React from 'react'
import './Job_card.css'
function Job_card({title, imgUrl, jobUrl}) {
  const gotoJob = () =>{
    window.open(jobUrl, '_blank')
  }
  return (
    <div>
      <div class="inside_box">
        <div class="box_logo">
          <img src={imgUrl} alt=""/>
        </div>
        <div class="box_des">
          <h3 class="tit">{title}</h3>
          <button class="butt" onClick={gotoJob}>Apply</button>
        </div>
      </div>
    </div>
  )
}

export default Job_card;