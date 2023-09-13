import React from 'react';
import '../styles/NavBar.css';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

export default function NavBar() {
  const state = useSelector(state => state?.dataReducer);
  const navImg = useSelector(state => state?.dataReducer?.data[3]?.navbar[0]?.url);
  const navigate = useNavigate();

  return ( state.isSuccess? (
    <div className='nav-bar'>
      <div className='logo-container'>
        <a href='/'><img className='logo-img' src={navImg} alt='logo'/></a>
      </div>
      <div className='link-container'>
        <ul className='link-list' >
        <li className='list-item' value={'/'} onClick={() => navigate('/')}>
            <a className='link' href='/'>Home</a>
          </li>
          <li className='list-item' value={'/about-us'} onClick={() => navigate('/about-us')}>
            <a className='link' href='/about-us'>About Us</a>
          </li>
          <li className='list-item' value={'/cast'} onClick={() => navigate('/cast')}>
            <a className='link' href='/cast'>Cast</a>
          </li>
          <li className='list-item' value={'/contact'} onClick={() => navigate('/contact')}>
            <a href='/contact'>Contact Us</a>
          </li>
        </ul>
      </div>
    </div>
  ) :
    <div>Loading</div>
  )
};
