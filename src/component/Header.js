import { Avatar, IconButton } from "@material-ui/core";
import {
  Close,
  GroupRounded,
  HomeRounded,
  InfoOutlined,
  LiveHelpRounded,
  Menu,
  Help,
  Call,
  HomeOutlined,
  Home,
  GroupOutlined,
  LiveHelpOutlined,
  CallOutlined
} from "@mui/icons-material/solid";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import logo from "./logo.png";
import "./Header.css";
import { useStateValue } from "../StateProvider";
import { Fade } from "react-reveal";
import 'react-lazy-load-image-component/src/effects/blur.css';

function Header() {
  const history = useHistory();

  const [user, setUser] = useState(null);


  const [{ token }, dispatch] = useStateValue();

  const ACC = "https://kernelbackend.herokuapp.com/api/user/account";
  

  const about = () => {
    history.push("/about");
  };

  const teams = () => {
    history.push("/teams");
  };
  const reachus = () => {
    history.push("/reachus");
  };


  useEffect(async () => {
    if (localStorage.getItem("uid")) {

      const options = {
        headers: {
          'auth-token': localStorage.getItem('token')
        }
      }

      const resp = await fetch(ACC + "/" + localStorage.getItem("uid"),options);
      const respData = await resp.json();
      if(resp.ok){
        setUser(respData);
      }
    }
  }, [user?.profileUrl || localStorage.getItem("uid")]);

  const home = () => {
    history.push("/");
  };

  const account = () => {
    if (localStorage.getItem("uid")) {
      history.push("/account");
    } else {
      history.push("/");
    }
  };

  const faqs = () => {
    history.push("/faq");
  };

  useEffect(() => {
    if (localStorage.getItem("token")) {
      dispatch({
        type: "SET_TOKEN",
        token: localStorage.getItem("token"),
      });
    }
  }, []);
  const toggle = () => {
    document.getElementById("header").classList.toggle("display");
    document.getElementById("mheader").classList.toggle("v-height");
  };


  
  return (
    <div className='header' id="mheader">
       <Menu className="burger" onClick={toggle} />
     
      <Fade top>
        <div className="header_left" id="header">
          <img src={logo} />
          <h3 onClick={home}>
            <Home className="optionIcon" />
            Home
          </h3>
          <h3 onClick={teams}>
            {" "}
            <GroupOutlined className="optionIcon" /> 
            Our Squad
          </h3>
          <h3>
            <Recommend className="optionIcon" /> 
            Credits
          </h3>
          <h3 onClick={faqs}>
            <LiveHelpOutlined className="optionIcon" />
             FAQ's
          </h3>
          <h3 onClick={about}>
            <InfoOutlined className="optionIcon" />
            About Kernelstar
          </h3>
          <h3 onClick={reachus}>
            <CallOutlined className="optionIcon"/>
            Contact Us
          </h3>
        </div>
        <div className="header_right">
          {user?.username ? (
            <Avatar
              onClick={account}
              src={user?.profileUrl || "broken"}
              className="headerAvatar"
              alt={user.username.toUpperCase()}
            />
          ) : (
            <></>
          )}
          {
            user && <h3>{user.username}</h3>
          }
        </div>
      </Fade>

    </div>
  );
}

export default Header;
