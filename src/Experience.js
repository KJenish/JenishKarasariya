import React from "react";
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiReact,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiGit,
  SiGithub,
  SiSass,
  SiTypescript,
  SiVuedotjs,
  SiAngular,
  SiPython,
  SiDjango,
  SiFlask,
  SiPostgresql,
  SiDocker,
  SiAmazonaws,
  SiMicrosoftazure,
  SiFirebase,
} from "react-icons/si";
import { FaBriefcase, FaGraduationCap } from "react-icons/fa";
import "./Experience.css"; // Make sure you have this CSS file in your project

function Experience() {
  const skills = [
    { Icon: SiHtml5, name: "HTML5", color: "#E34F26" },
    { Icon: SiJavascript, name: "JavaScript", color: "#F7DF1E" },
    { Icon: SiCss3, name: "CSS3", color: "#1572B6" },
    { Icon: SiReact, name: "React", color: "#61DAFB" },
    { Icon: SiNodedotjs, name: "Node.js", color: "#339933" },
    { Icon: SiExpress, name: "Express", color: "#000000" },
    { Icon: SiMongodb, name: "MongoDB", color: "#47A248" },
    { Icon: SiGit, name: "Git", color: "#F05032" },
    { Icon: SiGithub, name: "GitHub", color: "#181717" },
    { Icon: SiSass, name: "Sass", color: "#CC6699" },
    { Icon: SiTypescript, name: "TypeScript", color: "#3178C6" },
    { Icon: SiVuedotjs, name: "Vue.js", color: "#4FC08D" },
    { Icon: SiAngular, name: "Angular", color: "#DD0031" },
    { Icon: SiPython, name: "Python", color: "#3776AB" },
    { Icon: SiDjango, name: "Django", color: "#092E20" },
    { Icon: SiFlask, name: "Flask", color: "#000000" },
    { Icon: SiPostgresql, name: "PostgreSQL", color: "#336791" },
    { Icon: SiDocker, name: "Docker", color: "#2496ED" },
    { Icon: SiAmazonaws, name: "AWS", color: "#FF9900" },
    { Icon: SiMicrosoftazure, name: "Azure", color: "#007FFF" },
    { Icon: SiFirebase, name: "Firebase", color: "#FFCA28" },
  ];

  const timelineItems = [
    {
      title: "Master of Science in Computer Science",
      institution: "University of Southern California",
      date: "Aug 2022 - May 2024",
      side: "left",
      type: "education",
    },
    {
      title: "Bachelor of Technology in Computer Engineering",
      institution: "Charotar University of Science and Technology",
      date: "Jul 2018 - Jun 2022",
      side: "right",
      type: "education",
    },
    {
      title: "Software Engineer",
      institution: "TRIUM AI SOLUTIONS INC, New York, USA",
      date: "May 2023 - Aug 2023",
      side: "left",
    },
    {
      title: "Software Engineer",
      institution: "Rentech Digital, New York, USA",
      date: "Aug 2020 - Aug 2022",
      side: "right",
    },
    {
      title: "App Development Intern",
      institution: "Zibma Infotech, Gujarat, India",
      date: "Jun 2020 - Aug 2020",
      side: "left",
    },
    {
      title: "Senior Lead AV/IT operations worker",
      institution: "USC Information Technology Services (ITS)",
      date: "Sep 2023 - May 2024",
      side: "right",
    },
    // Add additional items here
  ];
  return (
    <div id="experience-section">
      <div style={{paddingTop: "50px", marginBottom: "50px" }}>
        <div className="experience-container">
          <h2 className="experience-title">Skills</h2>
          <p className="experience-description">
            I've been crafting web solutions for several years, and I continue
            to hone my skills and keep up with industry trends.
          </p>
          <div className="skills-grid">
            {skills.map((skill, index) => {
              const { Icon } = skill; // Destructure Icon here
              return (
                <div
                  key={index}
                  className="skill-item"
                  style={{ color: skill.color }}
                >
                  <Icon size="3em" />
                  <h4>{skill.name}</h4>
                </div>
              );
            })}
          </div>
        </div>
        </div>
        <div className="experience-section1">
          <div className="experience-container">
            <h2 className="experience-title">My Work Experience</h2>
            <div className="timeline">
              <div className="timeline-line"></div>
              {timelineItems.map((item, index) => (
                <div key={index} className={`timeline-item ${item.side}`}>
                  <div className={`timeline-content ${item.side}`}>
                    <h3>{item.title}</h3>
                    <p>{item.institution}</p>
                    <time>{item.date}</time>
                  </div>
                  {item.side === "left" && (
                    <div className="timeline-icon-container">
                      {item.type === "education" ? (
                        <FaGraduationCap className="timeline-icon" />
                      ) : (
                        <FaBriefcase className="timeline-icon" />
                      )}
                    </div>
                  )}
                  {item.side === "right" && (
                    <div className="timeline-icon-container">
                      {item.type === "education" ? (
                        <FaGraduationCap className="timeline-icon" />
                      ) : (
                        <FaBriefcase className="timeline-icon" />
                      )}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
    </div>
  );
}

export default Experience;
