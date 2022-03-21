import React from "react";
import moxiePhoto from "../../assets/Profile/Moxie-professional.jpeg";

function About() {
  return (
    <div className="aboutMe">
      <div className="meTitle">
        <h1 id="about">
          Hi Stranger, you definitely don't know me but here's all my personal
          info, have at it.
        </h1>
        <img src={moxiePhoto} alt="moxie" id="mePhoto" />
        <div className="arrow"></div>
      </div>
      <div className="education">
        <img src={moxiePhoto} alt="moxie" className="port-photo" />

        <p>
          My name is Tyler Mair, I am a recent graduate of the Full Stack Web
          Development Bootcamp from the University of Arizona. This program was
          an intense 6 month course where I learned and mastered a number of
          different languages, and technologies in the Web Development world. I
          also have a Bachelors of Arts and Sciences in Sociology from Illinois
          State University which I earned back in 2018. I am a keen thinker and
          problem solver, I also pride myself in being capable of leading and
          collaborating with teams for the best possible results.
        </p>
      </div>
      <div className="workExp">
        
        <p>
          The past three years of my life has been dedicated not only to my web
          development interests, but also to the younger audience. I have been
          extremely humbled by my work as a Special Education Teacher. Working
          with kids has been another passion of mine, and I am incredibly
          fortunate to call myself a teacher.
          <b></b> I quickly was promoted to a teacher leader (vice prinicple in
          other words), and was asked if I would like to become a principal of
          my own campus. While this was a great honor, I was mainly consumed in
          exploring my biggest passion in life: Web Development. Becoming a
          principle would have been my last station following that career path,
          and I felt I was not finished yet and that I wanted to continue
          growing.
        </p>
        <img src={moxiePhoto} alt="moxie" className="exp-photo" />
      </div>

      <div className="personal">
        <img src={moxiePhoto} alt="moxie" className="personal-photo" />
        <p>
          I am 28 years old living in Mesa, Arizona with my amazing girlfriend
          and my wonderful rescue dog, Moxie.
          <b></b>I have major interest in videogames, working out (I say that
          but nobody would be able to tell), music; especially alternative,
          rock, indie, hiphop, my favorite band is Queens of the Stone Age.
          <b></b>
          If you have not already noticed my Instagram and Linkdn profiles can
          be found below. Please check me out and critique me!
        </p>
      </div>
      <div className="skills">
        <h2 className='skillsTitle'>Skills</h2>
        <div className="technologies">
          <ul className="tech-list">
            {" "}
            <h3>Technologies</h3>
            <li>HTML5</li>
            <li>Css</li>
            <li>JavaScript</li>
          </ul>
          <ul className="tools-list">
            <h3>Tools</h3>
            <li>Mongoose</li>
            <li>MySql</li>
            <li>MVC File Structure</li>
            <li>Node</li>
            <li>MongoAtlas</li>
            <li>ORM</li>
            <li>Regular Expressions</li>
            <li>React</li>
            <li>Progressive Web Applications</li>
          </ul>
        </div>
        </div>
      
    </div>
  );
}

export default About;
