import { Button } from "@material-ui/core";
import React from "react";
import { useHistory } from "react-router-dom";
import "./Error.css";

function Error() {
  const history = useHistory();
  const back = () => {
    history.push("/");
  };
  
  return (
    <div className="error">
      <img src="https://img.icons8.com/ios/100/ffffff/database.png"/>
      <h1> 500 </h1> 
      <p> Internal Server Error </p>
      <Button variant='contained' onClick={back}>Go Back</Button>
    </div>
  );
}

export default Error;
