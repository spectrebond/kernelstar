import { Send } from "@mui/icons-material";
import React, { useState } from "react";
import { Fade } from "react-reveal";
import Footer from "./component/Footer";
import Header from "./component/Header";
import reachus from './assets/undraw_contact_us_-15-o2.svg'
import "./ReachUs.css";
function ReachUs() {
  const [errMsg, setErrMsg] = useState("");
  const [isLoading, setisLoading] = useState(false);

  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const API_URL = "https://kernelbackend.herokuapp.com/api/contact";

  const send = async (e) => {
    setisLoading(true);
    e.preventDefault();
    if (localStorage.token) {
      const data = {
        email: email,
        message: message,
      };

      const options = {
        method: "POST",
        headers: {
          "content-type": "application/json",
          "auth-token": localStorage.token,
        },
        body: JSON.stringify(data),
      };

      const resp = await fetch(API_URL, options);
      const respData = await resp.json();

      console.log(respData);
      setTimeout(() => {
        setErrMsg(`Your file number is: ${respData.id}`);
        setEmail("");
        setMessage("");
        setisLoading(false);
      }, 2000);
    } else {
      setTimeout(() => {
        setErrMsg("Try Logging in to your account");
        setisLoading(false);
      }, 2000);
    }
  };

  return (
    <div className="reachUs">
      <div className="reachUs_top">
        <Header />
      </div>
      <div className="reachUs_body">
        <div className="reachUs_left">
            <img src={reachus}/>
        </div>
        <div className="reachUs_right">
          <h1>Reach Us</h1>
          <p>For Enquiries please fill up the form below.</p>
          {isLoading ? (
            <img src={process.env.PUBLIC_URL + "./loadingblack.svg"} />
          ) : (
            <>
              {errMsg && <h3 className="err">{errMsg}</h3>}
              <Fade>
                <form className="reachUs_form">
                  <div className="reachInputBar">
                    <p>Email</p>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>

                  <div
                    className="reachInputBar"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                  >
                    <p>Your Message</p>
                    <textarea rows="5" />
                  </div>

                  <button
                    disabled={!email && !message}
                    className="reachUsbtn"
                    onClick={send}
                  >
                    <Send className="sendIcon" />
                    Send
                  </button>
                </form>
              </Fade>
            </>
          )}
        </div>
      </div>
      <div className="reachUs_bottom">
        <Footer />
      </div>
    </div>
  );
}

export default ReachUs;
