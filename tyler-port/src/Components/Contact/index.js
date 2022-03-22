import React, { useState } from "react";

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
        </section>
    );
}

export default ContactMe;