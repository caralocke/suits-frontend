import React from 'react'

export default function NavBar() {
  return (
    <div className='nav-bar'>
      <div className='logo-container'>
        <a href='/'><img className='logo-img' src='https://img.usanetwork.com/sites/nbcunbc/files/images/2019/7/16/Suits-S9-Logo-1920x1080.jpg?impolicy=nbc_com&imwidth=640&imdensity=1' alt='logo'/></a>
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
