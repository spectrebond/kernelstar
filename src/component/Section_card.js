import React from 'react'
import './Section_card.css'
function Section_card({title, button, img}) {
    return (
        <div className="card_section">
            <div className="section">
                <div className="sectionImg">
                <img src={img} alt="" />
                </div>
               <div className="sectionInfo">
               <h3>{title}</h3>
                {
                    button && <button>{button}</button>
                }
               </div>
            </div>
        </div>
    )
}

export default Section_card
