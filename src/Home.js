import React from "react";
import Header from "./component/Header";
import Banner from "./component/Banner";
import "./Home.css";
import { useHistory } from "react-router-dom";
import Footer from "./component/Footer";
import { useState } from "react";
import { useEffect } from "react";
import Carousel from "react-elastic-carousel";
import VerifyBar from "./component/VerifyBar";
import Desktop from "./component/Desktop";
import { Search } from "@mui/icons-material";
import Fade from 'react-reveal/Fade'
import { Button, IconButton } from "@material-ui/core";


function Home() {
  const [errMsg, setErrMsg] = useState("")

  const [pw, setPw] = useState();
  const [verification, setVerification] = useState(false);

  const URL = "https://kernelbackend.herokuapp.com/api/user/account/";

  useEffect(async () => {

    if (localStorage.getItem('token')) {
      const options = {
        headers: {
          'auth-token': localStorage.getItem('token')
        }
      }

      if (localStorage.getItem("uid")) {
        const resp = await fetch(URL + localStorage.getItem("uid"), options);
        const respData = await resp.json();

        if (resp.ok) {
          if (respData.verified) {
            setVerification(true);
          }
        }

      }
    }

  }, [localStorage.getItem("uid")]);


  const history = useHistory();
  const course = () => {
    history.push("/courses");
  };
  const docs = () => {
    if (localStorage.getItem("uid")) {
      history.push("/docs");
    } else {
      alert("Try Logging in to your account");
    }
  };

  const visions = [
    {
      statement:
        "Kernelstar is the one and only ultimate platform for techy geeks.",
      author: "Sammit Pal",
      imgUrl: "sammit.jpg",
    },
    {
      statement:
        "Kernelstar is a complete and effective portal for nourishing your skills to sustain in the IT world",
      author: "Ayan Dutta",
      imgUrl: "ayan.jpg",
    },
    {
      statement:
        "We worked together to help the budding techies with everything to boost their engineering journey with love and passion",
      author: "Neeldhruba Dasgupta",
      imgUrl: "neelu.jpg",
    },
    {
      statement:
        "Kernelstar a place which caters all your needs. Together we shall excel.",
      author: "Vivek Kumar",
      imgUrl: "vivek.jpg",
    },
    {
      statement:
        "One stop solution for all basics of computer science and placement preparations",
      author: "Saheli Roy",
      imgUrl: "saheli.jpeg",
    },
    {
      statement: "Learn the latest, be the greatest",
      author: "Sounak Ghosh",
      imgUrl: "sounak.jpg",
    },
  ];

  useEffect(() => {
    if (window.outerWidth < 800) {
      setPw(false);
    } else {
      setPw(true);
    }
  }, [document.clientWidth]);

  const ACC = "https://kernelbackend.herokuapp.com/api/user/account";

  useEffect(async () => {
    if (localStorage.getItem("uid")) {

      const options = {
        headers: {
          'auth-token': localStorage.getItem('token')
        }
      }

      const resp = await fetch(ACC + "/" + localStorage.getItem("uid"), options);
      const respData = await resp.json();
      if (!resp.ok) {
        setErrMsg(respData.error)
        localStorage.clear();
      }
    }
  }, [localStorage.getItem("uid")]);

  const arrow = ({ type, onClick, isEdge }) => {
    const pointer = type === 'PREV' ? 'https://img.icons8.com/material/64/ffffff/back--v1.png' : 'https://img.icons8.com/material/64/ffffff/forward--v1.png'
    return (
      <Button onClick={onClick} disabled={isEdge}>
        <img src={pointer} alt="" />
      </Button>
    )
  }

  return (
    <>
      {pw ? (
        <div className="home">
          <div className="home_banner">
            <Banner />
            {errMsg && <VerifyBar errMsg={errMsg} err={true} />}
          </div>
          <div className="home_top" id="scroll">
            <Header />
          </div>
          <div className="home_section">
            <h1>Click Explore Learn More</h1>
            <div className="home_sectionBody">
              <Fade left>
                <div className="homeCard">
                  <div className="cardInfo">
                    <img src="https://img.icons8.com/dotty/60/ffffff/video-playlist.png" />
                    <h1>Videos</h1>
                    <p>"Every master was once a beginner"</p>

                  </div>
                  <div className="explore" onClick={course}>
                    <Search />
                    <h3>Explore</h3>
                  </div>
                </div>
              </Fade>
              <Fade right>
                <div className="homeCard">
                  <div className="cardInfo">
                    <img src="https://img.icons8.com/ios/60/ffffff/book-reading.png" />
                    <h1>Documents</h1>
                    <p>"You deserve all of this!"</p>

                  </div>
                  <div className="explore" onClick={docs}>
                    <Search />
                    <h3>Explore</h3>
                  </div>
                </div>
              </Fade>
            </div>
          </div>
          <div className="home_testimonials" id="vision">
            <h1>Our Vision</h1>
            <div className="testimonialsBody">
              <Carousel
                pagination={false}
                transitionMs={1000} itemsToShow={1} renderArrow={arrow}>

                {visions.map((vision) => (
                  <div className="testimonial">
                    <img
                      src={process.env.PUBLIC_URL + "./" + vision.imgUrl}
                      alt=""
                    />
                    <div className="testimonialInfo">
                      <p>{vision.statement}</p>
                      <strong>__{vision.author}</strong>
                    </div>
                  </div>
                ))}
              </Carousel>

            </div>
          </div>

          <div className="wkernel">
            <h1>Why KernelStar?</h1>
            <div className="wkernelBody">
              <Fade bottom duration={2000}>
                <div className="wkernelCard">
                  <img src="https://img.icons8.com/ios/40/ffffff/task-completed.png" />
                  <h2>Complete</h2>
                  <p>
                    "From A-Z to 0-9 in Computer Science"
                  </p>
                </div>
              </Fade>
              <Fade bottom duration={2500}>
                <div className="wkernelCard">
                  <img src="https://img.icons8.com/wired/40/ffffff/easy.png" />
                  <h2>Comprehensible</h2>
                  <p>Crystal-Clear videos with user-friendly documents
                  </p>
                </div>
              </Fade>
              <Fade bottom duration={3000}>
                <div className="wkernelCard">
                  <img src="https://img.icons8.com/ios/40/ffffff/instagram-check-mark.png" />
                  <h2>Compact</h2>
                  <p>
                    Starting from languages to aptitude...pressed in all in one together
                  </p>
                </div>
              </Fade>
              <Fade bottom duration={3500}>
                <div className="wkernelCard">
                  <img src="https://img.icons8.com/external-vitaliy-gorbachev-lineal-vitaly-gorbachev/40/ffffff/external-free-sales-vitaliy-gorbachev-lineal-vitaly-gorbachev.png" />
                  <h2>Chargeless</h2>
                  <p>
                    The best part of any learning platform-It's being FREE
                  </p>
                </div>
              </Fade>
            </div>
          </div>
          <div className="home_bottom">
            <Footer />
          </div>
        </div>
      ) : (
        <Desktop />
      )}
    </>
  );
}

export default Home;
