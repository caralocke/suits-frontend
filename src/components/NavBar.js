import React from 'react'

export default function NavBar() {
  return (
    <div className='nav-bar'>
      <div className='logo-container'>
        <a href='/'><img className='logo-img' src='https://upload.wikimedia.org/wikipedia/en/a/a1/Title_card_for_the_US_TV_show_Suits.png' alt='logo'/></a>
      </div>
      <div className='link-container'>
        <ul className='link-list'>
          <li className='list-item'>
            <a className='link' href='/about-us'>About Us</a>
          </li>
          <li className='list-item'>
            <a className='link' href='/attorneys'>Attorneys</a>
          </li>
          <li className='list-item'>
            <a className='link' href='/blog'>Blog</a>
          </li>
          <li className='list-item'>
            <a href='/contact'>Contact Us</a>
          </li>
        </ul>
      </div>
    </div>
  )
}
