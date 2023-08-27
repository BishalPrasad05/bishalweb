// import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import About from './components/About';
import Education from './components/Education';
import Contact from './components/Contact';
import Skills from './components/Skills';
import Projects from './components/Projects';
// import { Route,Routes } from 'react-router-dom';
import {React, useState,useEffect } from "react";
import { HashLoader } from 'react-spinners';

function App() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    setShow(true)
    setTimeout(() => {
      setShow(false)
    }, 3500)
  },[])
  return (
    <>
      
        {
        show ?
          <div className="loader">
            <HashLoader color="#00ffcc" loading={show} size={200} />
          </div>
            :
            <>
            <Home></Home>
            <About></About>
            <Education></Education>
            <Skills></Skills>
            <Projects></Projects>
            <Contact></Contact>
            </>
        }
  
{/* 
      <Routes>
        <Route path='/' element={<Home />} />
        
        <Route path='/contact' element={<Contact/>} />

      </Routes> */}
    </>
  );
}

export default App;
