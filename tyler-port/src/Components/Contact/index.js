import React from "react";

function ContactMe() {
    return(
        <section>
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
        </section>
    )
}