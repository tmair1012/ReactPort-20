import React from "react";
import DownloadLink from "react-download-link";
import myResume from "../../assets/Profile/Tyler Mair Resume.pdf";

function Resume() {
  return (
    <div className="resumeDiv">
      <h2 className="resume-title">Why Me?</h2>
      <p className="whyMe">
        I’m a leader with an emphasis on compatibility and teachable moments to
        effectively collaborate with groups while assisting with the team needs
        to better help ourselves grow. I find pride in my ability to problem
        solve. I have motivation for being the one people can come to for
        assistance. With my new-found skill set and love for Web-Development I
        am able to pursue a career where my unique ability can flourish. It is
        my initiative to take charge combined with my collaborative skills which
        makes me a great candidate for any team. Along with my passion and skill
        set for problem solving, I add up to be a powerhouse for any career in
        Web-Development.
      </p>
      <a className="resumeDownload" href={myResume} download>
        {" "}
        My Resume
      </a>
    </div>
  );
}

export default Resume;
