const ProjectCard = ({ project }) => {
  return (
    <div className="project-card">
      <img src={project.image} alt={project.title} />
      <div className="project-details">
        <h2>{project.title}</h2>
        <p>{project.description}</p>
        <div className="project-links">
          <a href={project.repositoryLink}>Repository</a>
          <a href={project.deploymentLink}>Deployment</a>
        </div>
        <div className="technologies-used">
          {project.technologiesUsed.map((tech, index) => (
            <span key={index}>{tech}</span>
          ))}
        </div>
      </div>
    </div>
  )
}

export default ProjectCard
