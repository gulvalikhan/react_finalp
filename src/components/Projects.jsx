import React, { useState } from "react";
import styled from "styled-components";


// Styled components for better performance
const ProjectWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const ProjectItem = styled.div`
  width: calc(33.33% - 20px);
  margin: 10px;
`;

function Projects() {
  const [projects] = useState([
    {
      title: "Project 1",
      img: "/projects/1suret.jpeg",
      gLink: "https://github.com/gulvalikhan/gulya.git",
    },
    {
      title: "Project 2",
      img: "/projects/2suret.jpeg",
      gLink: "https://github.com/gulvalikhan/desktop-joom.git",
    },
    {
      title: "Project 3",
      img: "/projects/3suret.jpeg",
      gLink: "https://github.com/gulvalikhan/narxozfood.git",
    },
    {
      title: "Project 4",
      img: "/projects/4suret.jpeg",
      gLink: "https://github.com/gulvalikhan/task7.git",
    },
    {
      title: "Project 5",
      img: "/projects/5suret.jpeg",
      gLink: "https://github.com/gulvalikhan/LabkaDjango.git",
    },
  ]);

  return (
      <section className="projects" id="projects">
        <div className="container">
          <div className="title">
            <h3>Portfolio</h3>
            <a
                href="https://github.com/gulvalikhan"
                target="_blank"
                className="btn"
                rel="noreferrer"
            >
              View GIT
            </a>
          </div>
          {/* Optimized projects list */}
          <ProjectWrapper>
            {projects.map((project, i) => (
                <ProjectItem key={i}>
                  <div className="img-container">
                    <img src={project.img} alt={project.title} loading="lazy" />
                  </div>
                  <div className="description">
                    <h4>{project.title}</h4>
                    <div className="links">
                      <a href={project.gLink} target="_blank" rel="noreferrer">
                        <i className="fab fa-github"></i>
                      </a>
                    </div>
                  </div>
                </ProjectItem>
            ))}
          </ProjectWrapper>
        </div>
      </section>
  );
}

export default Projects;
