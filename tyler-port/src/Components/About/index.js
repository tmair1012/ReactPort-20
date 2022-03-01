import React from 'react';
import moxiePhoto from '../../assets/Profile/Moxie_placeholder.jpg'

function About() {
    return(
        <div className='aboutMe'>
            <div className='meTitle'>
            <h1 id='about'>Hi Stranger, you definitely don't know me but here's all my personal info, have at it.</h1>
            <img src={moxiePhoto} alt='moxie' id='mePhoto'/>
            <div className="arrow"></div>
            </div>

           
            <img src={moxiePhoto} alt='moxie' className='port-photo'/>
            
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
            <div className='workExp'>
            <img alt='school' className='port-photo' />
            <p>The past three years of my life has been dedicated not only to my web development interests, but also to the younger audience. I have been extremely humbled
                by my work as a Special Education Teacher. Working with kids has been another passion of mine, and I am incredibly
                fortunate to call myself a teacher. 
                <b></b>
                I quickly was promoted to a teacher leader (vice prinicple in other words), and was asked if I would like to become a principal of
                my own campus. While this was a great honor, I was mainly consumed in exploring my biggest passion in life: Web Development. Becoming a prinicple
                would have been my last station in that career, and I felt I was not finished yet and that I wanted to continue growing.
            </p>
            </div> 

            <div className='personal'>
                <img alt='moxieReal' className='port-photo' />
                <p>
                    I am 28 years old living in Mesa, Arizona with my amazing girlfriend and my wonderful rescue dog, Moxie.
                    <b></b>
                    I have major interest in videogames, working out (I say that but nobody would be able to tell), music; especially alternative, rock, indie, hiphop, my favorite band is Queens of the Stone Age.
                    <b></b>
                    If you have not already noticed my Instagram and Linkdn profiles can be found below. Please check me out and critique me!
                </p>
            </div>
        </div>
        
    );
}

export default About;