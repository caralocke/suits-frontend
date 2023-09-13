import React from 'react';
import '../styles/ContactUs.css';
import { useSelector } from 'react-redux';

export default function ContactUs() {

  const show = useSelector(state => state?.dataReducer?.data[4]?.show[0]?.name);

  return (
    <div className='contact-us-page'>
      <div className='contact-us-section'>
        <h2>Contact Us</h2>
        <p className='contact-us-info'>This application can be completely customized to suit the needs of many different businesses. </p>
        <p className='contact-us-info'>If this site for the show {show} interests you, please feel free to use the form to reach out to me.</p>
      </div>
      <div className='contact-us-form-container'>
        <form className='contact-us-form' method="post" action="https://formsubmit.co/847816be8e953105ed3f5481619f2da5">
        <h2 className='form-title'>Contact Us Now</h2>
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
