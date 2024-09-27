import React from 'react';
import gameProjectImage from '../assets/GameProject.png';
import travelMateImage from '../assets/TravelMateApp.png';

function Projects() {
  return (
    <div className="page-container">
      <h1>My Projects</h1>
      
      <div className="project">
        <h2>Interactive Web Game</h2>
        <img src={gameProjectImage} alt="Interactive Web Game" className="project-image" />
        <p>
          As part of an exciting college assignment, I developed an engaging web-based game that showcases the power of modern web technologies. This project challenged me to bring together my skills in JavaScript, HTML, and CSS to create an interactive and visually appealing gaming experience. The game features dynamic gameplay, responsive design, and intuitive user controls, demonstrating my ability to transform academic requirements into a fun, practical application.
        </p>
        <h3>Technologies Used:</h3>
        <ul>
          <li>JavaScript</li>
          <li>HTML</li>
          <li>CSS</li>
          <li>Canvas API</li>
        </ul>
      </div>

      <div className="project">
        <h2>Travel Planner App</h2>
        <img src={travelMateImage} alt="Travel Mate App" className="project-image" />
        <p>
          I was part of a group project for the Software Requirements Engineering course where we developed Travel Mate,
           a comprehensive travel planner application. This project showcased my skills in software design, documentation, 
           and web development.
        </p>
        
        <h3>Skills Demonstrated:</h3>
        <ul>
          <li>Requirements Analysis</li>
          <li>UML Diagramming</li>
          <li>Web Design</li>
          <li>Database Design</li>
          <li>Technical Documentation</li>
          <li>Team Collaboration</li>
        </ul>
      </div>

      <div className="project">
        <ul>
        <h2>Ubuntu VM Samba File Sharing System</h2>
        <p>In this project, I implemented a robust file sharing system using Ubuntu Virtual Machine and Samba, 
          showcasing my skills in Linux system administration, networking, and cross-platform file sharing. </p>
          <h3>Key Achievements:</h3>
          <li>Successfully installed and configured the Samba package on Ubuntu VM</li>
          <li>Established bi-directional file transfer capabilities between the VM and local machine</li>
          <li>File system permissions and access control</li>
          <li>Troubleshooting and problem-solving in networked environments</li>
          </ul>
      </div>
    </div>
  );
}

export default Projects;