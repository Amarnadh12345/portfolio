import React, { Suspense } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./About.css";
import Resume from "./Images/AMARNADHJSTI_RESUMEUPDATED (2).pdf";
import img from "./Images/20MH1A0424.jpg";
import { useEffect } from "react";

const About = () => {
  const roles = ["MERN Stack Developer", "Programmer", "Designer"];
  useEffect(() => {
    function Animate() {
      const imgContainers = document.querySelectorAll(".skill-card");

      const observerOptions = {
        threshold: 0.1, // Adjust this threshold as needed
      };

      const observerCallback = (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.style.transform = "scale(1)";
            entry.target.style.opacity = "1";
          }
        });
      };

      const observer = new IntersectionObserver(
        observerCallback,
        observerOptions
      );

      imgContainers.forEach((container) => observer.observe(container));
    }

    Animate();
  }, []);

  return (
    <>
      <div className="about-container" id="about">
        <div className="about-row">
          <div className="profile-container">
            <Suspense fallback="Loading...">
              <div className="img-card">
                <div className="img-card-inner">
                  <img
                    id="profile-img"
                    src={img}
                    alt="Durga Prasad"
                    loading="lazy"
                  />
                </div>
                <div className="img-card-inner">
                  <h3>AMARNADH JASTI</h3>
                  <h6>MERN Stack Developer</h6>
                  <h6>
                    Helping with:
                    <br />
                    <br />
                    <span>React.Js</span>
                    <span>Node.Js</span>
                    <span>MongoDB</span>
                  </h6>

                  <a href="tel:+91-9502953302">
                    <button>Contact</button>
                  </a>
                  <a href={Resume} download="AmarnadhJasti.pdf">
                    <button>Download Resume</button>
                  </a>
                </div>
              </div>
            </Suspense>
          </div>
          <div className="bio-container">
            <p>
              Hi, I'm <span>Amarnadh jasti</span>, a{" "}
              <span className="role">{roles[0]}</span> and design enthusiast. I
              have been working as a web developer for the past year, mainly
              focused on <span>web technologies</span>.
              <br />
              <br />I feel comfortable working with technologies like Java,
              JavaScript, React, Node.js, MongoDB, MySql and many other
              technologies in the web ecosystem. I love <span>programming</span>
              , design, user interfaces, and open-source, and that's what I'm
              passionate about.
              <br />
              <a
                href="https://www.linkedin.com/in/amarnadh-jasti-4aaa92209/"
                target="new"
              >
                <button className="btn btn-primary btn-md me-2">
                  LinkedIn
                </button>
              </a>
              <a href="https://github.com/Amarnadh12345" target="new">
                <button className="btn btn-light">GitHub</button>
              </a>
            </p>
          </div>
        </div>

        <div className="container-fluid">
          <h2 className="section-title">Education</h2>
          <br />
          <div className="row">
            <div className="col-md-4">
              <div className="edu-card">
                <h4>B.Tech</h4>
                <h5>Electronics and Communication Engineering</h5>
                <h6>
                  2020 - 2024 <span>7.51 CGPA</span>
                </h6>
                <h6>Aditya College Of Engineering, Surampalem</h6>
              </div>
            </div>
            <div className="col-md-4">
              <div className="edu-card">
                <h4>Intermediate</h4>
                <h5>M.P.C</h5>
                <h6>
                  2018 - 2020 <span>9.86 CGPA</span>
                </h6>
                <h6>K.V.S.R.T Junior College, Chilumuru</h6>
              </div>
            </div>
            <div className="col-md-4">
              <div className="edu-card">
                <h4>Secondary School</h4>
                <h6>
                  2017 - 2018 <span>9.7 CGPA</span>
                </h6>
                <h6>Green Field High School, Kamepalli</h6>
              </div>
            </div>
          </div>
        </div>
        <br />
        <div className="container-fluid" id="skill">
          <h2 className="section-title">Skills</h2>
          <br />
          <div className="SkillCardItems">
            <div className="skill-card">
              <h4>Frontend Technologies</h4>
              <div className="skill-wrapper">
                <h5>HTML</h5>
                <h5>CSS</h5>
                <h5>Bootstrap</h5>
              </div>
            </div>

            <div className="skill-card">
              <h4>Databases</h4>
              <div className="skill-wrapper">
                <h5>MongoDB</h5>
                <h5>MySql</h5>
              </div>
            </div>

            <div className="skill-card">
              <h4>Frontend Frameworks</h4>
              <div className="skill-wrapper">
                <h5>ReactJs</h5>
              </div>
            </div>

            <div className="skill-card">
              <h4>Backend Frameworks</h4>
              <div className="skill-wrapper">
                <h5>ExpressJs</h5>
                <h5>NodeJs</h5>
              </div>
            </div>

            <div className="skill-card">
              <h4>Programming Languages</h4>
              <div className="skill-wrapper">
                <h5>JavaScript</h5>
                <h5>Java</h5>
                <h5>C++</h5>
              </div>
            </div>

            <div className="skill-card">
              <h4>Productivity Software</h4>
              <div className="skill-wrapper">
                <h5>Microsoft Office (Word,PowerPoint)</h5>
              </div>
            </div>
            <div className="skill-card">
              <h4>Tools & Utilities</h4>
              <div className="skill-wrapper">
                <h5>Git</h5>
                <h5>Postman</h5>
                <h5>Redux Toolkit</h5>
                {/* <h5>Embedded JavaScript Template (SSR)</h5>
                <h5>Docker</h5> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
