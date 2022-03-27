import React from 'react'
import quizData from './quizData.json';
import Header from './component/Header'
import { useState } from 'react';
import { Button } from '@material-ui/core';
import { useEffect } from 'react';
import './Quiz.css'
import { useStateValue } from './StateProvider';
function Quiz() {
  const [queState, setqueState] = useState(0);
  const [{token}] = useStateValue();

  console.log(quizData.length)

  const nextQues = () => {
    const nextQuestion = queState + 1;
    if (quizData.length == nextQuestion) {
      alert("end of quiz");
    }
    else {
      setqueState(nextQuestion)
    }
  }

  
  return (
    <div className='quiz'>
      <div className="quizTop">
        <Header />
        {
          token && (<Header2/>)
        }
      </div>
      <div className="quizBody">
        {
            <div className="quizCard">
              <h3>{quizData[queState]?.question}</h3>
              {
                quizData[queState]?.ansOptions.map(option => (
                  <p onClick={nextQues}>{option.ans}</p>
                ))
              }
            </div>
        }
      </div>
    </div>
  )
}

export default Quiz
