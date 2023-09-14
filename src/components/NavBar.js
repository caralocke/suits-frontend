import React, { useEffect } from 'react';
import '../styles/NavBar.css';
import { useSelector } from 'react-redux';
import { useNavigate, useLocation } from 'react-router-dom';

export default function NavBar() {
  const state = useSelector(state => state?.persistedReducer);
  const navImg = useSelector(state => state?.persistedReducer?.data[3]?.navbar[0]?.url);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    let buttons = document.querySelectorAll('.list-item')
      buttons.forEach(button => {
        let value = button.getAttribute('value')
        if (value === location.pathname ) {
          button.classList.add('list-item-selected')
        } else {
          button.classList.remove('list-item-selected')
        }
      })   
  },[location.pathname])  

  return ( state.isSuccess? (
    <div className='nav-bar'>
      <div className='logo-container'>
        <a href='/'><img className='logo-img' src={navImg} alt='logo'/></a>
      </div>
      <div className='link-container'>
        <ul className='link-list' >
        <li className='list-item' href='/' id='list-item' value={'/'} onClick={() => navigate('/')}>
            <a className='link' href='/'>Home</a>
          </li>
          <li className='list-item' id='list-item' value={'/about-us'} onClick={() => navigate('/about-us')}>
            <a className='link' href='/about-us'>About Us</a>
          </li>
          <li className='list-item' id='list-item' value={'/cast'} onClick={() => navigate('/cast')}>
            <a className='link' href='/cast'>Cast</a>
          </li>
          <li className='list-item' id='list-item' value={'/contact'} onClick={() => navigate('/contact')}>
            <a href='/contact'>Contact Us</a>
          </li>
        </ul>
      </div>
    </div>
  ) :
    <div>Loading</div>
  )
};
