import './Home.css';
import arc from '../../assets/arc.png';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <section className='home-section'>
      <div className='welcome'>
        <img src={arc} alt='software enginer' className='arc'/>
        <h1 className='home-title'>Hi! I'm <span className='first-name'>Christina</span></h1>
      </div>
      <p className='intro'>A software engineer based in Denver, Colorado.</p>
      <Link
        to='/portfolio'
      >
        <button className='work-button'>
          MY WORK
        </button>
      </Link>
    </section>
  )
}

export default Home;
