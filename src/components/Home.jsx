/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable jsx-a11y/anchor-is-valid */
import "./Home.css";
// import ParticleBg from "./ParticleBg"

// import Typical from "react-typical";
import Typewriter from "typewriter-effect";
import ParticleBg from "./ParticleBg";

import { Link } from "react-scroll";




function Home() {

  
  return (
    <>
      <div className="parc">
        <ParticleBg />
      </div>
      <div className="home-container-img">
        {/* <img src="./images/intro-bg.jpg" alt="background-image" /> */}

        <div className="left-side-links ">
          <i className="fa-brands fa-linkedin"></i>
          <i className="fa-brands fa-github"></i>
          <i className="fa-brands fa-hackerrank"></i>
        </div>

        <div className="main-container">
          <div className="profile">
            <div className="home_img">
              <img src="./images/profile1.jpg" alt="Bishal Prasad" />
            </div>
            <p className="hello-text">Hello, World !</p>

            <p className=" name">I'm Bishal Prasad.</p>
            <p className="typing">
              {" "}
              <Typewriter
                options={{
                  strings: [
                    "I'm a Programmer",
                    "I'm Into Web Development",
                    "I'm Into App Development",
                  ],
                  autoStart: true,
                  loop: true,
                }}
              />
            </p>

            {/* <div className="links">
                            
                            
                            
                        </div> */}
          </div>
          <div className="menu-links">
            <Link to="home" spy={true} smooth={true} offset={0} duration={500}>
              Home
            </Link>
            <Link
              to="about"
              spy={true}
              smooth={true}
              offset={-50}
              duration={500}
            >
              About
            </Link>
            <Link
              to="education"
              spy={true}
              smooth={true}
              offset={0}
              duration={500}
            >
              Education
            </Link>
            <Link
              to="skills"
              spy={true}
              smooth={true}
              offset={0}
              duration={500}
            >
              Skills
            </Link>
            <Link
              to="projects"
              spy={true}
              smooth={true}
              offset={0}
              duration={500}
            >
              Projects
            </Link>
            <Link
              to="contact"
              spy={true}
              smooth={true}
              offset={0}
              duration={500}
            >
              Contact
            </Link>

            {/* <a href="#home">Home</a>
                      <a href="#about">About</a>
                      <a href="#home">Education</a>
                        <a href="#skills">Skills</a>
                        <a href="#projects">Projects</a>
                        <a href="#contact">Contact</a> */}
          </div>
        </div>

        <div className="right-side-links">
          <i className="fa-brands fa-instagram"></i>
          <i className="fa-solid fa-envelope"></i>
          <i className="fa-brands fa-whatsapp"></i>
        </div>
        <div className="mobile-links">
          <i className="fa-brands fa-linkedin"></i>
          <i className="fa-brands fa-github"></i>
          <i className="fa-brands fa-hackerrank"></i>
          <i className="fa-solid fa-envelope"></i>
        </div>
      </div>
    </>
  );
}

export default Home;
