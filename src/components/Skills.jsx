import "./Skills.css";

import React, { useEffect } from "react";
// importing aos
import AOS from "aos";
import "aos/dist/aos.css";

function Skills() {
  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 600,
      easing: "ease-in-sine",
      delay: 100,
    });
  }, []);
  return (
    <>
      <div id="skills" className="skills-container">
        <div className="skills-heading" data-aos="fade-down">
          <h1>Skills</h1>

          <h6>--Showcasing the tools in my toolkit--</h6>
        </div>
        <div className="skills-section" data-aos="fade-down">
          <div className="skill">
            <div className="skill-name-image">
              <div className="skill-name">
                <h3>Python</h3>
              </div>
              <div className="skill-image">
                <img src="./skills/python.png" alt="python" />
              </div>
            </div>
            <div className="skill-level">
              <p>Intermediate</p>
            </div>
          </div>
          <div className="skill">
            <div className="skill-name-image">
              <div className="skill-name">
                <h3>Dart</h3>
              </div>
              <div className="skill-image">
                <img src="./skills/dart.png" alt="Dart" />
              </div>
            </div>
            <div className="skill-level">
              <p>Beginner</p>
            </div>
          </div>
          <div className="skill">
            <div className="skill-name-image">
              <div className="skill-name">
                <h3>Flutter</h3>
              </div>
              <div className="skill-image">
                <img src="./skills/flutter.png" alt="Flutter" />
              </div>
            </div>
            <div className="skill-level">
              <p>Intermediate</p>
            </div>
          </div>
          <div className="skill">
            <div className="skill-name-image">
              <div className="skill-name">
                <h3>Linux</h3>
              </div>
              <div className="skill-image">
                <img src="./skills/linux.png" alt="linux" />
              </div>
            </div>
            <div className="skill-level">
              <p>Intermediate</p>
            </div>
          </div>
          <div className="skill">
            <div className="skill-name-image">
              <div className="skill-name">
                <h3>HTML</h3>
              </div>
              <div className="skill-image">
                <img src="./skills/html.png" alt="Html" />
              </div>
            </div>
            <div className="skill-level">
              <p>Intermediate</p>
            </div>
          </div>
          <div className="skill">
            <div className="skill-name-image">
              <div className="skill-name">
                <h3>CSS</h3>
              </div>
              <div className="skill-image">
                <img src="./skills/css.png" alt="CSS" />
              </div>
            </div>
            <div className="skill-level">
              <p>Intermediate</p>
            </div>
          </div>
          <div className="skill">
            <div className="skill-name-image">
              <div className="skill-name">
                <h3>javascript</h3>
              </div>
              <div className="skill-image">
                <img src="./skills/js.png" alt="Javascript" />
              </div>
            </div>
            <div className="skill-level">
              <p>beginner</p>
            </div>
          </div>
          <div className="skill">
            <div className="skill-name-image">
              <div className="skill-name">
                <h3>C</h3>
              </div>
              <div className="skill-image">
                <img src="./skills/c.png" alt="C" />
              </div>
            </div>
            <div className="skill-level">
              <p>Intermediate</p>
            </div>
          </div>
          <div className="skill">
            <div className="skill-name-image">
              <div className="skill-name">
                <h3>CPP</h3>
              </div>
              <div className="skill-image">
                <img src="./skills/cpp.png" alt="CPP" />
              </div>
            </div>
            <div className="skill-level">
              <p>Intermediate</p>
            </div>
          </div>

          <div className="skill">
            <div className="skill-name-image">
              <div className="skill-name">
                <h3>Sqlite</h3>
              </div>
              <div className="skill-image">
                <img src="./skills/sql.png" alt="sqlite" />
              </div>
            </div>
            <div className="skill-level">
              <p>Intermediate</p>
            </div>
          </div>
          <div className="skill">
            <div className="skill-name-image">
              <div className="skill-name">
                <h3>MySql</h3>
              </div>
              <div className="skill-image">
                <img src="./skills/mysql-color.png" alt="mysql" />
              </div>
            </div>
            <div className="skill-level">
              <p>Intermediate</p>
            </div>
          </div>
          <div className="skill">
            <div className="skill-name-image">
              <div className="skill-name">
                <h3>Flask</h3>
              </div>
              <div className="skill-image">
                <img src="./skills/flask-black.png" alt="Flask" />
              </div>
            </div>
            <div className="skill-level">
              <p>beginner</p>
            </div>
          </div>
          <div className="skill">
            <div className="skill-name-image">
              <div className="skill-name">
                <h3>Netlify</h3>
              </div>
              <div className="skill-image">
                <img src="./skills/netlify.png" alt="netlify" />
              </div>
            </div>
            <div className="skill-level">
              <p>Beginner</p>
            </div>
          </div>
          <div className="skill">
            <div className="skill-name-image">
              <div className="skill-name">
                <h3>Java</h3>
              </div>
              <div className="skill-image">
                <img src="./skills/java.png" alt="java" />
              </div>
            </div>
            <div className="skill-level">
              <p>Intermediate</p>
            </div>
          </div>
          <div className="skill">
            <div className="skill-name-image">
              <div className="skill-name">
                <h3>Git</h3>
              </div>
              <div className="skill-image">
                <img src="./skills/git.png" alt="git" />
              </div>
            </div>
            <div className="skill-level">
              <p>Intermediate</p>
            </div>
          </div>
          <div className="skill">
            <div className="skill-name-image">
              <div className="skill-name">
                <h3>GitHub</h3>
              </div>
              <div className="skill-image">
                <img src="./skills/github.png" alt="github" />
              </div>
            </div>
            <div className="skill-level">
              <p>Intermediate</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Skills;
