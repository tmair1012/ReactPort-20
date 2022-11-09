import React from "react";
import DownloadLink from "react-download-link";
import myResume from "../../assets/Profile/Tyler Mair Resume Official.pdf";
import resumePic from "../../assets/Profile/Tyler_Mair_Official_Resume_pic.jpg"



function Resume() {
  return (
    <div className="resumeDiv">
      <div className='resume-picture-div'>
    <img src={resumePic} className='resume-picture'></img>
    </div>
    
    
      
      <a className="resumeDownload" href={myResume} download>
        {" "}
        Download My Resume
      </a>

    </div>
  );
}

export default Resume;
