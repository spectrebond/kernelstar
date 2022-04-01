import React from 'react'
import Job_card from './component/Job_card'
import './Jobs.css'
import Header from "./component/Header.js"
import Footer from "./component/Footer.js"
import jobs from './Jobs.json'
function Jobs() {
  console.log(jobs);
  return (
    
    <div className='jobs'>
      <div className="jobsHeader">
        <Header />
      </div>
        <div className="jobCards_section">
          {
            jobs.map((job)=>(
              <Job_card title={job.title} imgUrl={job.imgUrl} jobUrl={job.jobUrl}/>
            ))
          }
        </div>
         <div className="jobsFooter">
        <Footer />
      </div>
     </div>   
  )
}

export default Jobs