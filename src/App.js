import './App.css';
import Home from './components/Home';
import About from './components/About';
import Education from './components/Education';
import Contact from './components/Contact';
import Skills from './components/Skills';
import Projects from './components/Projects';
import React, { useState, useEffect } from "react";
import lottie from "lottie-web";
import location from "./loading5.json";

function App() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true); // Initialize loading state to true
  const [completed, setCompleted] = useState(false);

  React.useEffect(() => {
    lottie.loadAnimation({
      container: document.querySelector("#load"),
      renderer: "svg",
      autoplay: true,
      animationData: location
    });
  }, []);

       useEffect(() => {
      setTimeout(() => {
        fetch("https://jsonplaceholder.typicode.com/posts")
          .then((response) => response.json())
          .then((json) => {
            console.log(json);
            setData(json);
            setLoading(true);
            setTimeout(() => {
              setCompleted(true);
            }, 0);
          });
      }, 0);
    }, []);

  return (
    <>
      {!completed ? ( // Render loading animation if loading is true
        <div style={{ width: "100%", height: "100vh", display: "flex", justifyContent: "center", alignItems: "center", backgroundColor: "black" }}>
          <div id='load' style={{ width: "60%", height: "60%" }}/>
        </div>
      ) : (
          // <h1>Loaded</h1>
        // Render components once loading is false
        <>
          <Home />
          <About />
          <Education />
          <Skills />
          <Projects />
          <Contact />
        </>
      )}
    </>
  );
}

export default App;
