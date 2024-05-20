// import "./Contact.css";

// import React, { useEffect, useRef } from "react";
// // import React, { useRef } from "react";
// import emailjs from "@emailjs/browser";

// import AOS from "aos";
// import "aos/dist/aos.css";

// function Contact() {
//   const form = useRef();

//   const sendEmail = (e) => {
//     e.preventDefault();

//     emailjs
//       .sendForm("service_tv6d98o", "template_3jfwo9g", form.current, {
//         publicKey: "QeTIXKg2zJ_yCie-z",
//       })
//       .then(
//         () => {
//           console.log("SUCCESS!");
//         },
//         (error) => {
//           console.log("FAILED...", error.text);
//         }
//       );
//   };
//   useEffect(() => {
//     AOS.init({
//       offset: 200,
//       duration: 400,
//       easing: "ease-in-sine",
//       delay: 100,
//     });
//   }, []);

//   return (
//     <>
//       <div id="contact" className="contact-container">
//         <div className="contact-main">
//           <div className="form-heading" data-aos="fade-down">
//             <h1>Get In Touch</h1>
//           </div>
//           <div className="contact-subtitle" data-aos="fade-down">
//             <h6>
//               --I'm just an email away from turning ideas into reality
//               together--
//             </h6>
//           </div>
//           <div className="main-contact-body">
//             <div className="contact-details">
//               <div className="contact-image" data-aos="fade-right">
//                 <img src="./images/Mention.gif" alt="contact gif" />
//               </div>
//               <div className="contact-details2" data-aos="fade-down">
//                 <div className="phone-number">
//                   <a href="tel:7318843250" target="_blank" rel="noreferrer">
//                     <i className="fa-solid fa-phone"></i>
//                   </a>
//                   <a href="tel:7318843250" target="_blank" rel="noreferrer">
//                     <h5>+91 7318843250</h5>
//                   </a>
//                 </div>
//                 <div className="email">
//                   <a
//                     href="mailto:bishalprasad251122@gmail.com"
//                     target="_blank"
//                     rel="noreferrer"
//                   >
//                     <i className="fa-solid fa-envelope"></i>
//                   </a>
//                   <a
//                     href="mailto:bishalprasad251122@gmail.com"
//                     target="_blank"
//                     rel="noreferrer"
//                   >
//                     <h5>bishalprasad251122@gmail.com</h5>
//                   </a>
//                 </div>
//               </div>
//             </div>

//             <div className="contact-form">
//               <form name="contact" ef={form} onSubmit={sendEmail}>
//                 <div className="form-name" data-aos="fade-left">
//                   <i className="fa-solid fa-user"></i>
//                   <input
//                     className="input-ne"
//                     type="text"
//                     id="name"
//                     name="name"
//                     placeholder="Name"
//                     required
//                   ></input>
//                 </div>
//                 <div className="form-name" data-aos="fade-left">
//                   <i className="fa-solid fa-envelope"></i>

//                   <input
//                     className="input-ne"
//                     type="email"
//                     id="email"
//                     name="email"
//                     placeholder="Email"
//                     required
//                   ></input>
//                 </div>
//                 <div className="form-message" data-aos="fade-up">
//                   <textarea
//                     type="text"
//                     id="subject"
//                     className="scrolll"
//                     name="message"
//                     placeholder="Write something.."
//                     required
//                   ></textarea>
//                 </div>
//                 <button className="form-button" type="submit">
//                   Submit
//                 </button>
//               </form>
//             </div>
//           </div>
//         </div>

//         <div className="footer-div">
//           <p>
//             Designed with <i className="fa-solid fa-heart"></i> by{" "}
//             <span>Bishal Prasad</span>
//           </p>
//         </div>
//       </div>
//     </>
//   );
// }

// export default Contact;



import "./Contact.css";
import React, { useEffect, useRef, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const inputRef = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    const formEle = document.getElementById("form1");
    const formDatab = new FormData(formEle);

    console.log("Form data:", Object.fromEntries(formDatab));

    fetch(
      "https://script.google.com/macros/s/AKfycbwoWObsowAvs6ZnXBrgwYGm8Lw8Q49bKFjodnZf8rzqCEJi-Nz0ws9wgGD9Df2TFAeMAw/exec",
      {
        method: "POST",
        body: formDatab,
      }
    )
      .then((res) => res.json())
      .then((data) => {
        console.log("Google Script response:", data);
      })
      .catch((error) => {
        console.error("Error sending data to Google Script:", error);
      });

    fetch("https://api.quotable.io/random?tags=technology")
      .then((response) => response.json())
      .then((data) => {
        console.log("Quote API response:", data);

        alert(
          "Thank You, " +
            formData.name +
            "!\n" +
            "Your visit to my portfolio means a lot to me.\n\n" +
            data.content +
            "   - " +
            data.author
        );

        // Reset the form input fields
        setFormData({
          name: "",
          email: "",
          message: "",
        });
      })
      .catch((error) => {
        console.error("Error fetching quote:", error);
      });
  };

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
              <form name="contact" onSubmit={sendEmail} id="form1">
                <div className="form-name" data-aos="fade-left">
                  <i className="fa-solid fa-user"></i>
                  <input
                    className="input-ne"
                    type="text"
                    id="name"
                    name="Name"
                    ref={inputRef}
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    placeholder="Name"
                    required
                  />
                </div>
                <div className="form-name" data-aos="fade-left">
                  <i className="fa-solid fa-envelope"></i>
                  <input
                    className="input-ne"
                    type="email"
                    id="email"
                    name="Email"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    placeholder="Email"
                    required
                  />
                </div>
                <div className="form-message" data-aos="fade-up">
                  <textarea
                    type="text"
                    id="subject"
                    className="scrolll"
                    name="Message"
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    placeholder="Write something.."
                    required
                  />
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
