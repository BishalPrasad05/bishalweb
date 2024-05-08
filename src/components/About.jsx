import "./About.css";
import React, { useEffect } from "react";
// importing aos
import AOS from "aos";
import "aos/dist/aos.css";

function About() {
  useEffect(() => {
    AOS.init({
      offset: 200,
      duration: 400,
      easing: "ease-in-sine",
      delay: 100,
    });
  }, []);

  return (
    <>
      <div id="about" className="about-container">
        <div className="about" data-aos="fade-right">
          <div className="about-img">
            <img src="./images/about2.png" alt="about-img" />
          </div>
          <div className="about-contents" data-aos="fade-down">
            <h4>Who Am I ?</h4>
            <h1>About Me</h1>
            <p name="about" className="about-para">
              I am a student of Computer Science and Engineering at B.P. Poddar
              Institute of Management & Technology. I am a passionate
              programmer, an App developer & web developer. I am also interested
              in AI. I am a quick learner and I am always ready to learn new
              things. I am a team player and I can also work individually. I am
              a hardworking person and I am always ready to work hard to achieve
              my goals.
            </p>

            <a href={"./resume/BishalPrasad05.pdf"} download="BishalPrasad05">
              <button className="resume-button">Download CV</button>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
