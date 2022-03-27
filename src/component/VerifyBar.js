import React from 'react'
import './VerifyBar.css'
function VerifyBar({errMsg, err}) {
  return (
    <div className={`verifyBar ${err ? 'red' : 'green'}`}>
      <p>{errMsg}</p>
    </div>
  )
}

export default VerifyBar
