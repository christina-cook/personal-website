import './Home.css';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <section className='home-section'>
      <div className='welcome'>
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
