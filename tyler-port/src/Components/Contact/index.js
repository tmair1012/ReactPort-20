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
        <section>
            <form id='contact-me-form'>
            <div>
                <label htmlFor='name'>Your Name:</label>
                <input type='text' name='name' defaultValue={name}  />
            </div>
            <div>
                <label htmlFor='email'>Your Email:</label>
                <input type='email' name='email' defaultValue={email}  />
            </div>
            <div>
                <label htmlFor="message">Say Something To Me</label>
                <textarea name='message' rows='5' defaultValue={message}  />
            </div>
            <button name='button' type='submit'>Submit</button>
            </form>
        </section>
    );
}

export default ContactMe;