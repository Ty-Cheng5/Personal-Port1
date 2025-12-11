import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="Img-Overlay">
        <header className="Header-Whole">
          <div className="Header">
            <div className="Header-Outer">
            </div>
            <div className="Header-Inner">
                <h2>Ty Senopole</h2>
            </div>
            <div className="Header-Desc">
              <h3>Computer Engineering Student at the University of Michigan</h3>
            </div>
            <div className="Socials">
                <a href="https://www.linkedin.com/in/ty-senopole-cheng/"><img src="/Logo/LinkedIn.png" alt="LinkedIn Logo" height="50" width="50"></img></a>
                <a href="https://github.com/Ty-Cheng5"><img src="/Logo/Github.png" alt="GitHub Logo" height="50" width="50"></img></a>
                <a href="https://www.instagram.com/ty.senopole/"><img src="/Logo/Instagram.png" alt="Instagram Logo" height="50" width="50"></img></a>
              </div>
          </div>
        </header>
        <h1>Technical Skills</h1>
        <div className="Skills">
          <div class="Skill">
            <div className="React-Logo">
              <img src="/Logo/React.png" alt="React Logo" height="50" width="55"></img>
            </div>
            <div className="Skill-Description"> 
              <h3>React</h3>
              <p>Front-end Framework</p>
            </div>
          </div>
          <div class="Skill">
            <div className="Figma-Logo">
              <img src="/Logo/Figma.png" alt="Figma-Logo" height="50" width="35"></img>
            </div>
            <div className="Skill-Description"> 
              <h3>Figma</h3>
              <p>Design and Prototyping Tool</p>
            </div>
          </div>
          <div class="Skill">
            <div className="C++_Logo">
              <img src="/Logo/C++_Logo.png" alt="C++ Logo" height="50" width="100%"></img>
            </div>
            <div className="Skill-Description"> 
              <h3>C++</h3>
              <p>Programming Language</p>
            </div>
          </div>
          <div class="Skill">
            <div className="Python-Logo">
              <img src="/Logo/Python.png" alt="Python Logo" height="50" width="100%"></img>
            </div>
            <div className="Skill-Description"> 
              <h3>Python</h3>
              <p>Programming Language</p>
            </div>
          </div>
        </div>
      </div>
      <div className="Experience">
        <h1></h1>
        <div className="Experience-One">

        </div>
      </div>
      <div className="Projects">
        <h1>Projects</h1>
        <div className="Project">
          <div className="Project-One">
            <img src="/Logo/MBathroom.png" height="175" width="100%"></img>
            <div className="Project-Description">
              <h2>M-Bathroom</h2>
              <a href="https://devpost.com/software/mbathrooms"><img src="/Logo/Devpost.png" alt="React Logo" height="50" width="55"></img></a>
            </div>
          </div>
          <div className="Project-Two">
            <img src="/Logo/EcoLLM-Cover.png" height="175" width="100%"></img>  
            <div className="Project-Description">
              <h2>EcoLLM</h2>
              <a href="https://devpost.com/software/ecollm"><img src="/Logo/Devpost.png" alt="React Logo" height="50" width="55"></img></a>
            </div>
          </div>
        </div>
      </div>
      <div className="Edu">
        <h1>Education</h1>
        <div class="Education" className="Education-One">
          <img src="/Logo/U-M_Logo.png" height="75" width="75"></img>
          <div className="Education-Description">
            <h2>University of Michigan</h2>
            <p>B.S. in Computer Engineering</p>
            <p>Expected Graduation: May 2028</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
