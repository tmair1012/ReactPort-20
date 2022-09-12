import React, { useState } from "react";
import faceBookLogo from "../../assets//Profile//facebookLogo.jpg"
import instagramLogo from "../../assets//Profile//instagramLogo.jpg"
import linkedIn from "../../assets/Profile/linkedIn.jpg"
import gitHubLogo from "../../assets/Profile/gitHubLogo.jpg"

function ContactMe() {

    // Create a state for user inputs and set them to blank
    const [contactState, setContactState] = useState({ name: '', email: '', message: ''})
    // destructure state
    const { name, email, message } = contactState;

    //create error message state and set to blank string
    const [errorMessage, setErrorMessage ] = useState('');

    const submitCheck = (e) => {
        e.preventDefault();
        if (!errorMessage) {
            console.log('Submit', contactState);
        }
    };
    
    //markdown to show
    return(
        <section className='contact'>
            <form className='contact-me-form' action="https://formsubmit.co/tyleramair@gmail.com" method="POST">
            <div className='contact-label'>
                <h1>Contact Me</h1>
                <p className='contact-description'>We here at Tyler's Portfolio are available to answer any questions you may have.
                If I do not get back to you instantly through email, you can also try phone / text.
                I look forward to connecting! (Please connect)
                </p>
            </div>
            <div className='name-div'>
                <label className='name-contact-text' htmlFor='name'>Name</label>
                <input className='name-box' type='text' name='name' defaultValue={name}  />
            </div>
            <div className='email-div'>
                <label className='email-contact-text' htmlFor='email'>Email</label>
                <input className='email-box' type='email' name='email' defaultValue={email}  />
            </div>
            <div className='message-div'>
                <label className='contact-text' htmlFor="message">Say Something To Me</label>
                <textarea className='message-box' name='message' rows='5' defaultValue={message}  />
            </div>
            <button className='contact-button' name='button' type='submit'>Submit</button>
            </form>
            <div className='contact-info'>
                <p className='contact-info-title'>Email
                </p>

                <p className='contact-info-real'>
                tyleramair@gmail.com
                </p>

                <p className='contact-info-title'>
                Phone
                </p>

                <p  className='contact-info-real'>
                630-740-9575
                </p>

                <p className='contact-info-title'>Address</p>

                <p className='contact-info-real'>
                711 N. Evergreen Road,<br></br> Mesa, Arizona<br></br> 85201
                </p>
                <a href="https://github.com/tmair1012"><img className='gh-logo' src={gitHubLogo} alt='Github'></img></a>
                <a href="https://www.facebook.com/tyler.mair.7"><img className='fb-logo' src={faceBookLogo} alt='Facebook'></img></a>
                <a href="https://www.instagram.com/tyler.mair.7/"><img className='ig-logo' src={instagramLogo} alt='Instagram'></img></a>
                <a href="https://www.linkedin.com/in/tyler-mair-986746165/"><img className='in-logo' src={linkedIn} alt='Linkedin'></img></a>
            </div>
        </section>
    );
}

export default ContactMe;