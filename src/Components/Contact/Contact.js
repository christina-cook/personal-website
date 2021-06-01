import './Contact.css';
import github from '../../assets/github.png';
import email from '../../assets/email.png';
import linkedIn from '../../assets/linkedin.png';

const Contact = () => {
  return (
    <section className='contact'>
      <h2 className='contact-title'>Let's Connect</h2>
      <p className='contact-text'>
        Interested in working together? Send me an <a
          href='mailto:cmc.cook7@gmail.com'
          className='email'
        >email
        </a> or connect with me on <a
          href='https://www.linkedin.com/in/cookcmc/'
          target = "_blank"
          rel='noreferrer'
          className='linkedin'
        >LinkedIn
        </a>
        !
      </p>
      <div className='icon-container'>
        <a href='mailto:cmc.cook7@gmail.com'>
          <img src={email} alt ='email' className='icon'/>
        </a>
        <a href='https://www.linkedin.com/in/cookcmc/'
          target = "_blank"
          rel='noreferrer'
        >
          <img src={linkedIn} alt ='linkedin' className='icon'/>
        </a>
        <a href='https://github.com/christina-cook'
          target = "_blank"
          rel='noreferrer'
        >
          <img src={github} alt ='github' className='icon'/>
        </a>
      </div>
    </section>
  )
}

export default Contact;
