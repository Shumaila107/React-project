import React from 'react';
import profilePic from '../assets/ProfilePic.jpg';

function About() {
  return (
    <div className="page-container about-page">
      <h1>About Me</h1>
      <div className="about-content">
        <div className="about-image">
          <img src={profilePic} alt="Profile Picture" className="profile-pic" />
        </div>
        <div className="about-text">
          <p>I’m a dedicated web developer with a knack for crafting dynamic, 
            responsive web applications using modern technologies like React, 
            JavaScript, and CSS. I focus on delivering high-quality, visually appealing user experiences.</p>
          <h2>Skills</h2>
          <ul>
            <li>React</li>
            <li>JavaScript</li>
            <li>HTML/CSS</li>
            <li>Node.js</li>
            <li>C#</li>
            <li>Python</li>
          </ul>
          <h2>Education</h2>
          <p>Software Engineering Technology AI from Centennial College</p>
          
          <h2>Resume</h2>
          <p>
            <a href="/Documents/Resume.pdf" download className="resume-download-link">
              Download My Resume (PDF)
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;