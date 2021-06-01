import './ProjectCard.css';

const ProjectCard = ({ id, title, image, stack, description, app, repo }) => {
  return (
    <section className='card'>
      <h3 className='project-title'><span className='underline'>{title}</span></h3>
      <img src={image} alt='screenshot of app' className='project-image'/>
      <p className='project-description'>{description}</p>
      <h4><span className='tech'>TECH STACK</span></h4>
      <p className='stack'>{stack}</p>
      <div className='project-buttons'>
        <a href={app} target = "_blank" rel='noreferrer'>
          <button className='card-button'>
            Launch App
          </button>
        </a>
        <a href={repo} target = "_blank" rel='noreferrer'>
          <button className='card-button'>
            View Code
          </button>
        </a>
      </div>
    </section>
  )
}

export default ProjectCard;
