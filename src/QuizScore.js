import React from 'react'
import { useState } from 'react'
import Header from './component/Header'
import Sidebar from './component/Sidebar'
import './QuizScore.css'
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { Button } from '@material-ui/core'
import { useStateValue } from './StateProvider'

function QuizScore() {
  const [{token}] = useStateValue();
  const percentage = 60;
  return (
    <div className='quizScore'>
      <div className="quizeScore_top">
        <Header />
        {
          token && (<Header2/>)
        }
      </div>
      <div className="quizScoreBody">
        <div className="quizScoreBody_left">
          <Sidebar />
        </div>
        <div className="quizScoreBody_right">
          <div className="quizScore_info">
          <h1>Your Quiz Score</h1>
          <div style={{ height: '150px', width: '150px' }}>
            <CircularProgressbar strokeWidth={5} value={percentage} text={`${percentage}%`} styles={buildStyles({
              textColor: "orange",
              pathColor: "orange",
              trailColor: "#d3d3d3",
            })} />
          </div>
          <h2>Your Score: {percentage}%</h2>
          <p>Last Played: 2 days ago</p>
          <Button variant='contained'>Try Again</Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default QuizScore
