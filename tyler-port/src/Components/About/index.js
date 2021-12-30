import React from 'react';
import moxiePhoto from '../../assets/Profile/Moxie_placeholder.jpg'

function About() {
    return(
        <div className='aboutMe'>
            <img src={moxiePhoto} alt='moxie' className='port-photo'/>
            <h1 id='about'>About Me</h1>
            <p>Hi There,  <b></b>
                My name is Tyler Mair. I am a special ed teacher turned web dev!
            Two very different disciplines which I have been able to make my own! From working
            face to face with kids to working on my own time, I have been able to explore two
            very big passions of mine. 
                <b></b>
            I am originally from Chicago, IL, but moved to Arizona in 2018 because I was looking
            for a different setting! I am living it up in the sun and avoiding the snow, and I couldn't
            be happier!
                <b></b>
            I am a universal worker if there has ever been one. I am able to cover a wide range of tasks, and
            hone my skills to whatever I put my mind to. 
            </p>

        </div>
    );
}

export default About;