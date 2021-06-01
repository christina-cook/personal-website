import { useState, useEffect } from 'react';
import './Portfolio.css';
import ProjectCard from '../ProjectCard/ProjectCard';
import projectsData from '../../data/projects';

const Portfolio = () => {
  const [projects, setProjects] = useState([])

  useEffect(() => {
    setProjects(projectsData)
  }, [])

  const projectsToDisplay = () => {
    return projects.map(project => {
      return (
        <ProjectCard
          key={project.id}
          title={project.title}
          image={project.image}
          stack={project.stack.join(', ')}
          description={project.description}
          app={project.app}
          repo={project.repo}
        />
      )
    })
  }

  return (
    <section className='portfolio'>
      <h2 className='portfolio-title'>My Projects</h2>
      <div className='project-grid'>
        {projectsToDisplay()}
      </div>
    </section>
  )
}

export default Portfolio;
