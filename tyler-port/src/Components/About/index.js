import React, { useState } from "react";
import Modal from '../Modal';
import moxiePhoto from "../../assets/Profile/Moxie-professional.jpeg";
import socialPhoto from "../../assets/Profile/socialMePic.jpeg";
import jobPhoto from "../../assets/Profile/jobPic.jpeg";
import headPic from "../../assets/Profile/frontPagePic.jpg";

function About() {
  const videoGames = document.getElementsByClassName('.vidGames');
  const [moxPic, setMox] = useState(false)
  const [show, setShow] = useState(false, 0);


  
  

  let videoGameText = "Video Games"
  

  return (
    <div className="aboutMe">
      <div className="meTitle">
        <h1 className="about">
          {" "}
          <p className="aboutP">Hi, i'm</p>Tyler Mair.{" "}
        </h1>
        <p className="aboutP2">
          Graduate of The University of Arizona Full-Stack Web-Development Program. <br></br> I love building user-friendly applications and challenging myself to learn<br></br>
          new concepts.
          <br></br>
          <br></br>
          I earned a Bachelors of Arts and Sciences from Illinois State University in 
          <br></br>
          2018 and I am currently working as a Vice Principal for at a private day school. I have always loved what I do!
          <br></br>
          <br></br>
          Until I was punched in the face 14 times by a 12 year old.
          </p>
       
        {/* <img src={headPic} alt="moxie" className="mePhoto" /> */}
      </div>
      <div className="pictureMain">
        <img className ='bigMe' src={moxiePhoto}></img>
      </div>

      
      
        
        {/* <h2 className="skillsTitle">Skills</h2>
        <div>
        <button onClick={() => setShow(true) }> Show Modal</button>
        
        </div>
        {/* <div className="technologies"> */}
          {/* <ul className="tech-list">
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
        </div> */} 
      
    </div>
  );
}

export default About;
