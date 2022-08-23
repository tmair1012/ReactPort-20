import React, { useState } from "react";
import faceBookLogo from "../../assets//Profile//facebookLogo.jpg"
import instagramLogo from "../../assets//Profile//instagramLogo.jpg"

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
                <p>I love long walks on the , </p>
            </div>
            <div className='name-div'>
                <label className='contact-text' htmlFor='name'>Name:</label>
                <input className='name-box' type='text' name='name' defaultValue={name}  />
            </div>
            <div className='email-div'>
                <label className='contact-text' htmlFor='email'>Email:</label>
                <input className='email-box' type='email' name='email' defaultValue={email}  />
            </div>
            <div className='message-div'>
                <label className='contact-text' htmlFor="message">Say Something To Me:</label>
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
                711 N. Evergreen Road Mesa, AZ, 85201
                </p>
                <a href="https://www.facebook.com/tyler.mair.7"><img className='fb-logo' src={faceBookLogo}></img></a>
                <a href="https://www.instagram.com/tyler.mair.7/"><img className='ig-logo' src={instagramLogo}></img></a>
            </div>
        </section>
    );
}

export default ContactMe;