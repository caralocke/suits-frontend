import React from 'react'
import { useParams } from 'react-router-dom';
import {  useSelector } from 'react-redux';
import telephone from '../icons/telephone.png'
import mail from '../icons/mail.png';

export default function PersonPage() {

  const { id } = useParams();

  const person = useSelector(state => state.suitsReducer.data[1].people[id])

  const { name, about, photo, phone, fax, email } = person

  return (
    <div className='person-page'>
      <div className='info-section'>
        <div className='img-container'>
          <img className='employee-photo' src={photo} alt={name}/>
        </div>
        <div className='contact-container'>
          <h3 className='contact-label'>Contact Information:</h3>
          <div>
            <span className='contact-source'><img className='telephone' src={telephone} alt="telephone"/>Phone:
              <a className='phone-link' href={`tel:${phone}`}>{phone}</a>
            </span>
          </div>
          <div>
          <span className='contact-source'>Fax:
            <span className='fax-box'>{fax}</span>
          </span>
          </div>
          <div>
            <span className='contact-source'><img className='mail' src={mail} alt="mail"/>Email:
              <a className='email-link' href={`email:${email}`}>{email}</a>
            </span>
          </div>          
        </div>
      </div>
      <div className='about-section'>
        <div className='display-name'>
          <h1>{name}</h1>
          <h3>Role</h3>
        </div>
        <div className='about'>
          <div> 
            {
              about?.map(section => (
                <p key={section.id}>{section.info}</p>
              ))
            }            
          </div>
        </div>
      </div>
    </div>
  )
}
