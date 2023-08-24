
import "./About.css";

function About() {

    return (
        <>
            <div className="about-container">
                <div className="about">
                    <div className="about-img">
                        <img src="./images/about2.png" alt="about-img" />
                    </div>
                    <div className="about-contents">
                        <h4>Who Am I ?</h4>
                        <h1>About Me</h1>
                        <p>
                         I am a student of Computer Science and Engineering at B.P. Poddar Institute of Management & Technology. I am a passionate programmer, an App developer & web developer. I am also interested in AI. I am a quick learner and I am always ready to learn new things. I am a team player and I can also work individually. I am a hardworking person and I am always ready to work hard to achieve my goals.
                           
                        </p>
                        {/* <button class="btn btn-color-2" onclick="window.open('./assets/resume-example.pdf')">
            Download CV
          </button> */}

                        <button className="resume-button" onClick={window.open('./resume/Bishal_Prasad_resume-1.pdf')}>Download CV</button>
                       {/* <img src="./images/about.jpg" alt="about-img" /> */}
                    </div>
                </div>
            </div>
        </>
)

}

export default About;