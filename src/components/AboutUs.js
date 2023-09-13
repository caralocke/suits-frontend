import React from 'react';
import { useSelector } from 'react-redux';
import '../styles/AboutUs.css';

export default function AboutUs() {
  const about = useSelector(state => state?.dataReducer?.data[0]?.about);

  return (
    <div className='about-us'>
      <div className='about-info-container'>
        <h1>About Us</h1>
        <div className='about-us-text'>
          {
            about?.map(data => {
              return (
                <div className='about-us-info' key={data.id}>{data.info}</div>
              )
            })
          }
        </div>
      </div>
      <div className='contact-us-form-container'>
        <form className='contact-us-form' method="post" action="https://formsubmit.co/847816be8e953105ed3f5481619f2da5">
        <h2>Contact Us Now</h2>
          <div className='inputs-container'>

            <div className='label-container'>
              <label><span className='asterisk'>*</span>First Name</label>
            </div>

            <div className='input-container'>
              <input type="text" name="first-name" id="first-name"/>
            </div>

            <div className='label-container'>
              <label><span className='asterisk'>*</span>Last Name</label>
            </div>

            <div className='input-container'>
              <input type="text" name="last-name" id="last-name"/>
            </div>

            <div className='label-container'>
              <label><span className='asterisk'>*</span>Email</label>
            </div>

            <div className='input-container'>
              <input type="text" name="email" id="email"/>
            </div>
            <div className='label-container'>
              <label>What can we do to help you?</label>
            </div>

            <div className='input-container'>
              <textarea name="message" id="message"></textarea>
            </div>
            <div className='button-container'>
              <button className='submit-button'>Submit</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
};