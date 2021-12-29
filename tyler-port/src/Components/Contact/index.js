import React, { useState } from "react";

function ContactMe() {

    // Create a state for user inputs and set them to blank
    const [contactState, setContactState] = useState({ name: '', email: '', message: ''})
    return(
        <section>
            <form id='contact-me-form'>
            <div>
                <label htmlFor='name'>Your Name:</label>
                <input type='text' name='name' defaultValue={name} onBlur={handleChange} />
            </div>
            <div>
                <label htmlFor='email'>Your Email:</label>
                <input type='email' name='email' defaultValue={email} onBlur={handleChange} />
            </div>
            <div>
                <label htmlFor="message">Say Something To Me</label>
                <textarea name='message' rows='5' defaultValue={message} onBlur={handleChange} />
            </div>
            <button name='button' type='submit'>Submit</button>
            </form>
        </section>
    );
}

export default ContactMe;