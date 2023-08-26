import "./Contact.css";

function Contact() {

    return (
        
        <>
            <div className="contact-container">
                <div className="contact-main">
                    <div className="form-heading">
                            <h1>Get In Touch</h1>
                    </div>
                    <div className="contact-subtitle">
                        <h6>--I'm just an email away from turning ideas into reality together--</h6>
                    </div>
                    <div className="main-contact-body"> 
                        <div className="contact-details">
                        {/* <h6>I'm open for any suggestion or just to have a chat</h6> */}
                        <div className="contact-image">
                         <img src="./images/Mention.gif" alt="contact gif" />   
                        </div>
                        <div className="contact-details">
                            <div className="phone-number">
                                <i class="fa-solid fa-phone"></i>
                                 <h5>+91 7318843250</h5>
                            </div>
                            <div className="email">
                                <i class="fa-solid fa-envelope"></i>
                                <h5>bishalprasad251122@gmail.com</h5>
                            </div>
                        </div>
                    </div>

                    <div className="contact-form">
                        
                        <form>
                            <div className="form-name">
                                <i class="fa-solid fa-user"></i>
                                <input className="input-ne" type="text" id="name" name="name" placeholder="Name"></input>
                            </div>
                            
                            <div className="form-name">
                                <i class="fa-solid fa-envelope"></i>

                                <input className="input-ne" type="text" id="email" name="email" placeholder="Email"></input>
                            

                            </div>
                            
                            <div className="form-message">
                            <textarea id="subject" className="scrolll" name="subject" placeholder="Write something.."></textarea>
                            
                            </div>
                            
                            <input className="form-button" type="submit" value="Submit"></input>
                    </form>
                    </div>
                    </div>
                    






                </div>

                <div className="footer-div">
                    <p>Designed with <i class="fa-solid fa-heart"></i> by <span>Bishal Prasad</span></p>
                </div>

            </div>
            

        </>

    )



}


export default Contact;
