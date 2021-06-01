import './Header.css';
import logo from '../../assets/logo.png';

import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <img src={logo} alt='coded-by-christina' className='logo'/>
      <nav className='navbar'>
        <ul className='nav-list'>
          <li className='list-item'>
            <NavLink
              exact to='/'
              className='navlink'
              activeStyle={{
                color: '#ACCBC5',
                borderBottom: '2px solid #ACCBC5'
              }}
            >
              Home
            </NavLink>
          </li>
          <li className='list-item'>
            <NavLink
              to='/portfolio'
              className='navlink'
              activeStyle={{
                color: '#ACCBC5',
                borderBottom: '2px solid #ACCBC5'
              }}
            >
              Portfolio
            </NavLink>
          </li>
          <li className='list-item'>
            <NavLink
              to='/contact'
              className='navlink'
              activeStyle={{
                color: '#ACCBC5',
                borderBottom: '2px solid #ACCBC5'
              }}
            >
              Contact
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  )
}
export default Header;
