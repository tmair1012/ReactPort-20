import React from "react";
import DownloadLink from "react-download-link";
import myResume from "../../assets/Profile/Tyler Mair Resume.pdf";
import resumeOne from "../../assets/Profile/Resume_3.png"
import resumeTwo from "../../assets/Profile/Resume_4.png"

function Resume() {
  return (
    <div className="resumeDiv">
      <div className='resume-picture-div'>
    <img src={resumeOne} className='resume-picture'></img>
    <img src={resumeTwo} className='resume-picture'></img>
    </div>
    
    
      
      <a className="resumeDownload" href={myResume} download>
        {" "}
        My Resume
      </a>

    </div>
  );
}

export default Resume;
