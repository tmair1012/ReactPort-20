import React from "react";
import DownloadLink from "react-download-link";
import myResume from "../../assets/Profile/Tyler_Mair_Resume_Fixed.pdf";
import resumeOne from "../../assets/Profile/Resume_3.png"
import resumeTwo from "../../assets/Profile/Resume_5.png"

function Resume() {
  return (
    <div className="resumeDiv">
      <div className='resume-picture-div'>
    <img src={resumeOne} className='resume-picture'></img>
    <img src={resumeTwo} className='resume-picture'></img>
    </div>
    
    
      
      <a className="resumeDownload" href={myResume} download>
        {" "}
        Download My Resume
      </a>

    </div>
  );
}

export default Resume;
