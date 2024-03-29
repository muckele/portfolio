import React from 'react';
import ProjectCard from './ProjectCard'
import projectsData from '../data/projectsData'

const ProjectsCardList = () => {
  return (
    <div className="projects-card-list">
      {projectsData.map((project, index) => (
        <ProjectCard key={index} project={project} />
      ))}
    </div>
  )
}

export default ProjectsCardList
