import "./Contact.css";

import React, { useEffect } from "react";

import AOS from "aos";
import "aos/dist/aos.css";

function Contact() {
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
      <div id="contact" className="contact-container">
        <div className="contact-main">
          <div className="form-heading" data-aos="fade-down">
            <h1>Get In Touch</h1>
          </div>
          <div className="contact-subtitle" data-aos="fade-down">
            <h6>
              --I'm just an email away from turning ideas into reality
              together--
            </h6>
          </div>
          <div className="main-contact-body">
            <div className="contact-details">
              <div className="contact-image" data-aos="fade-right">
                <img src="./images/Mention.gif" alt="contact gif" />
              </div>
              <div className="contact-details2" data-aos="fade-down">
                <div className="phone-number">
                  <a href="tel:7318843250" target="_blank" rel="noreferrer">
                    <i className="fa-solid fa-phone"></i>
                  </a>
                  <a href="tel:7318843250" target="_blank" rel="noreferrer">
                    <h5>+91 7318843250</h5>
                  </a>
                </div>
                <div className="email">
                  <a
                    href="mailto:bishalprasad251122@gmail.com"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i className="fa-solid fa-envelope"></i>
                  </a>
                  <a
                    href="mailto:bishalprasad251122@gmail.com"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <h5>bishalprasad251122@gmail.com</h5>
                  </a>
                </div>
              </div>
            </div>

            <div className="contact-form">
              <form name="contact" netlify netlify-honeypot="bot-field" hidden>
                <div className="form-name" data-aos="fade-left">
                  <i className="fa-solid fa-user"></i>
                  <input
                    className="input-ne"
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Name"
                    required
                  ></input>
                </div>
                <div className="form-name" data-aos="fade-left">
                  <i className="fa-solid fa-envelope"></i>

                  <input
                    className="input-ne"
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Email"
                    required
                  ></input>
                </div>
                <div className="form-message" data-aos="fade-up">
                  <textarea
                    type="text"
                    id="subject"
                    className="scrolll"
                    name="message"
                    placeholder="Write something.."
                    required
                  ></textarea>
                </div>
                <button className="form-button" type="submit">
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>

        <div className="footer-div">
          <p>
            Designed with <i className="fa-solid fa-heart"></i> by{" "}
            <span>Bishal Prasad</span>
          </p>
        </div>
      </div>
    </>
  );
}

export default Contact;
