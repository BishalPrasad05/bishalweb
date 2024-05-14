import "./Home.css";
import Typewriter from "typewriter-effect";
// import ParticleBg from "./ParticleBg";

import Background1 from "./Background1";

import React from "react";

import { Link } from "react-scroll";

function Home() {
  return (
    <>
      <Background1 />
      <div className="home-container-img">
        <div className="left-side-links ">
          <a
            href="https://linkedin.com/in/bishalprasad05"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fa-brands fa-linkedin"></i>
          </a>

          <a
            href="https://github.com/bishalprasad05/"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fa-brands fa-github"></i>
          </a>

          <a
            href="https://www.hackerrank.com/bishalprasad05"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fa-brands fa-hackerrank"></i>
          </a>
        </div>

        <div className="main-container">
          <div className="profile">
            <div className="home_img">
              <img
                src="./images/bishal-prasad-portfolio.jpg"
                alt="Bishal Prasad portfolio"
              />
            </div>
            <p className="hello-text">Hello, World !</p>

            {/* <p className=" name">I'm Bishal Prasad.</p> */}
            <div className="welcome">
              <span className="name">I'm &nbsp;</span>
              <h1 className="name title">Bishal Prasad</h1>
              <span className="name">.</span>
            </div>
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
          </div>
          <div className="menu-links">
            <Link to="home" spy={true} smooth={true} offset={0} duration={1000}>
              Home
            </Link>
            <Link
              to="about"
              spy={true}
              smooth={true}
              offset={-50}
              duration={1000}
            >
              About
            </Link>
            <Link
              to="education"
              spy={true}
              smooth={true}
              offset={0}
              duration={1000}
            >
              Education
            </Link>
            <Link
              to="skills"
              spy={true}
              smooth={true}
              offset={0}
              duration={1000}
            >
              Skills
            </Link>
            <Link
              to="projects"
              spy={true}
              smooth={true}
              offset={0}
              duration={1000}
            >
              Projects
            </Link>
            <Link
              to="contact"
              spy={true}
              smooth={true}
              offset={0}
              duration={1000}
            >
              Contact
            </Link>
          </div>
        </div>

        <div className="right-side-links">
          <a
            href="https://instagram.com/bishalprasad05"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fa-brands fa-instagram"></i>
          </a>

          <a
            href="mailto:bishalprasad251122@gmail.com"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fa-solid fa-envelope"></i>
          </a>

          <a
            href="https://api.whatsapp.com/send?phone=7318843250"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fa-brands fa-whatsapp"></i>
          </a>
        </div>

        <div className="mobile-links">
          <i className="fa-brands fa-linkedin"></i>
          <a
            href="https://github.com/bishal-p/"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fa-brands fa-github"></i>
          </a>

          <a
            href="https://www.hackerrank.com/bishalprasad2511"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fa-brands fa-hackerrank"></i>
          </a>
          <a
            href="mailto:bishalprasad251122@gmail.com"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fa-solid fa-envelope"></i>
          </a>
        </div>
      </div>
    </>
  );
}

export default Home;
