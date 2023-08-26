import { useState } from "react";
import "./Projects.css";


function Projects() { 

    const [toggleState, setToggleState] = useState(1);
    const toggleTab = (index) => {
        console.log(index);
        setToggleState(index);
    }




    return (
        <>
            <div className="projects-container">
                <div className="projects-title">
                    <h1>Projects By Me</h1>
                </div>
                <div className="projects-description">
                <h6>--Each project is a chapter in my journey, illustrating the evolution of my skills and vision--</h6>
                </div>
                <div className="tab-view">
                    <div className={toggleState===1?"commonTab activeTab":"commonTab"}
                    onClick={()=>toggleTab(1)}
                    >
                        <span>Python</span>
                    </div>
                    <div className={toggleState===2?"commonTab activeTab":"commonTab"}
                    onClick={()=>toggleTab(2)}
                    >
                        <span>Android</span>
                    </div>
                    <div className={toggleState===3?"commonTab activeTab":"commonTab"}
                    onClick={()=>toggleTab(3)}
                    >
                        <span>Web</span>
                    </div>
                </div>
                <div className="projects">

                    <div className={toggleState===1?"projects":"hide-content"}>
                        <div className="melo projects-common">
                            <img src="./projects/melo.svg" alt="" />
                            <div className="music-div">
                            <h1>Melo (Music-Player)</h1>
                            <p>A fully functional music player build in python.</p>
                            <button>
                                <a
                                href="https://github.com/Bishal-prasad05/Melo"
                                className="xyz"
                                target="_blank" rel="noreferrer"
                                >More details </a
                                >
                            </button>
                            </div>
                        </div>

                         <div className="filefinder projects-common">
                            <img src="./projects/file-finder.svg" alt="" />
                            <div className="music-div">
                            <h1>File Finder</h1>
                            <p>
                                A python software used to find any file location in the computer.
                            </p>
                            <button>
                                <a
                                href="https://github.com/Bishal-prasad05/File-finder"
                                target="_blank"
                                className="xyz" rel="noreferrer"
                                >More details</a
                                >
                            </button>
                            </div>
                        </div>
                        <div className="youtubedownloader projects-common">
                            <img src="./projects/youtube.svg" alt="" />
                            <div className="music-div">
                            <h1>Youtube-downloader</h1>
                            <p>
                                A python sotware can be used to download youtube videos in
                                available resolutions.
                            </p>
                            <button>
                                <a
                                href="https://github.com/Bishal-prasad05/Youtube-video-downloader"
                                target="_blank"
                                className="xyz" rel="noreferrer"
                                >More details</a
                                >
                            </button>
                            </div>
                        </div>

                    </div>


{/* -------------------------------------android apps------------------------------------ */}





                    <div className={toggleState===2?"projects":"hide-content"}>


                    
                    <div className="Todo projects-common">
                            <img src="./projects/chatbot.svg" alt="" />
                            <div className="music-div">
                            <h1>Chatbot App</h1>
                            <p>A Flutter based android chatbot using ChatGPT api.</p>
                            <button>
                                <a
                                href="https://github.com/Bishal-prasad05/chatbot"
                                className="xyz"
                                target="_blank" rel="noreferrer"
                                >More details</a
                                >
                            </button>
                            </div>
                        </div>
                       
                        <div className="weatherapp projects-common">
                            <img src="./projects/contacts.svg" alt="" />
                            <div className="music-div">
                            <h1>Contact App</h1>
                            <p>A Flutter based android contacts app with dialer and search functionality.</p>
                            <button>
                                <a
                                href="https://github.com/Bishal-prasad05/weather-app"
                                target="_blank"
                                className="xyz" rel="noreferrer"
                                >More details</a
                                >
                            </button>
                            </div>
                        </div>
                        <div className="url projects-common">
                            <img src="./projects/music.svg" alt="" />
                            <div className="music-div">
                            <h1>Music Player</h1>
                            <p>A simple music player in flutter for android devices.</p>
                            <button>
                                <a
                                href="https://github.com/Bishal-prasad05/URL-Shortner"
                                target="_blank"
                                className="xyz" rel="noreferrer"
                                >More details</a>
                            </button>
                            </div>
                        </div>





                        
                    </div>


                    {/* ------------------------------------web apps------------------------------------ */}

                    





                    <div className={toggleState===3?"projects":"hide-content"}>


                    
                    <div className="Todo projects-common">
                            <img src="./projects/todo.svg" alt="" />
                            <div className="music-div">
                            <h1>To-Do App</h1>
                            <p>A todo app using html css and js with history storage.</p>
                            <button>
                                <a
                                href="https://github.com/Bishal-prasad05/Todo-App"
                                className="xyz"
                                target="_blank" rel="noreferrer"
                                >More details</a
                                >
                            </button>
                            </div>
                        </div>
                       
                        <div className="weatherapp projects-common">
                            <img src="./projects/weather.svg" alt="" />
                            <div className="music-div">
                            <h1>Weather App</h1>
                            <p>A html css and js based weather forcasting app.</p>
                            <button>
                                <a
                                href="https://github.com/Bishal-prasad05/weather-app"
                                target="_blank"
                                className="xyz" rel="noreferrer"
                                >More details</a
                                >
                            </button>
                            </div>
                        </div>
                        <div className="url projects-common">
                            <img src="./projects/url.svg" alt="" />
                            <div className="music-div">
                            <h1>Url Shortner</h1>
                            <p>A simple and easy to use url shortner with html,css and js.</p>
                            <button>
                                <a
                                href="https://github.com/Bishal-prasad05/URL-Shortner"
                                target="_blank"
                                className="xyz" rel="noreferrer"
                                >More details</a
                                >
                            </button>
                            </div>
                        </div>





                        
                    </div>

                    





                        </div>

                        <div className="SeeallButton">
                        <button>
                            <a
                            href="https://github.com/Bishal-prasad05?tab=repositories"
                            target="_blank" rel="noreferrer"
                            >See All </a>
                        </button>

                </div>



                </div>

        
        
        
        </>
    )


}


export default Projects;