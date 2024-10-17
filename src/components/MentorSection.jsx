import React from "react";
import "../styles/MentorSection.css";

import DevicesIcon from "@mui/icons-material/Devices";
import LanguageIcon from "@mui/icons-material/Language";
import WorkspacePremiumIcon from "@mui/icons-material/WorkspacePremium";
import WifiIcon from "@mui/icons-material/Wifi";



const MentorSection = ({
  mentorName,
  title,
  profileLink,
  description,
  tools,
  lastUpdated,
  language,
  access,
  certificate,
  availabilty,
  videoSrc,
  tag,
}) => {
  return (
    <div className="about-section-left">
      <button className="about-btn">About</button>

      <div className="mentor-section">
        <h3>Mentor</h3>
        <div className="mentor-info">
          <img
            src="https://t3.ftcdn.net/jpg/05/90/59/88/360_F_590598870_TOcGd4cUZzPoEMlxSc7XYwcupHOE0vLM.jpg"
            alt={mentorName}
            className="mentor-image"
          />

          <div className="mentor-text">
            <h4>{mentorName}</h4>
            <p>{title}</p>
            <a href={profileLink} className="view-profile">
              View Profile
            </a>
          </div>
        </div>

        <div className="about-courses">
          <h3>About Courses</h3>
          <p>{description}</p>
        </div>

        <div className="tools-section">
          <h3>Tools</h3>
        </div>
        <div className="tools">
          <img
            className="tools-img"
            alt="img"
            src="https://upload.wikimedia.org/wikipedia/commons/a/ad/Figma-1-logo.png"
          />
          <p>Figma</p>
        </div>
      </div>

      <div className="course-summary-right">
        <div className="video-container">
          <video className="course-video" controls>
            <source src={videoSrc} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="video-overlay">
            <span className="overlay-text">INTRODUCTION</span>
          </div>
        </div>

        <div className="about-course-details">
          <div className="tag">{tag}</div>
          <h4>Last updated {lastUpdated}</h4>
          <ul >
            <li>
            <LanguageIcon className="course-right-icons" />
            {language}
            </li>
            <li>
              <DevicesIcon className="course-right-icons"/>
              {availabilty}
            </li>

            <li>
            <WorkspacePremiumIcon className="course-right-icons"/>
            {certificate}
            </li>

            <li>
            <WifiIcon className="course-right-icons"/>
            {access}
            </li>
          </ul>
        </div>
        <button className="enroll-btn">Enroll Now</button>
      </div>
      <div className="ellipse"></div>
    </div>
  );
};

export default MentorSection;
