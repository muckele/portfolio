import React from "react"
import projectsData from "../data/projectsData"

const ProjectCard = ({ project }) => {
  const { title, image, alt} = project

  return (
    <div className="project-card">
      <img src={image} alt={alt} />
      <h2>{title}</h2>

    </div>
  )
}

const ProjectList = () => {
  return (
    <div className="project-list">
      {projectsData.map((project, index) => (
        <ProjectCard key={index} project={project} />
      ))}
    </div>
  );
};

export default ProjectList;