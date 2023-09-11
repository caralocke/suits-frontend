import React from 'react';
import '../styles/PersonPage.css';
import { useParams } from 'react-router-dom';
import {  useSelector } from 'react-redux';
import telephone from '../icons/telephone.png';
import mail from '../icons/mail.png';

export default function PersonPage() {

  const { id } = useParams();

  const state = useSelector(state => state?.dataReducer);
  const person = state?.data[1]?.people[id];

  

  return ( state.isSuccess ? ( 
    <div className='person-page'>
      <div className='info-section'>
        <div className='img-container'>
          <img className='employee-photo' src={person.photo} alt={person.name}/>
        </div>
        <div className='contact-container'>
          <h3 className='contact-label'>Contact Information:</h3>
          <div>
            <span className='contact-source'><img className='telephone' src={telephone} alt="telephone"/>Phone:
              <a className='phone-link' href={`tel:${person.phone}`}>{person.phone}</a>
            </span>
          </div>
          <div>
          <span className='contact-source'>Fax:
            <span className='fax-box'>{person.fax}</span>
          </span>
          </div>
          <div>
            <span className='contact-source'><img className='mail' src={mail} alt="mail"/>Email:
              <a className='email-link' href={`email:${person.email}`}>{person.email}</a>
            </span>
          </div>          
        </div>
      </div>
      <div className='about-section'>
        <div className='display-name'>
          <h1>{person.name}</h1>
          <h3>{person.rank}</h3>
        </div>
        <div className='about'>
          <div> 
            {
              person.about?.map(section => (
                <p key={section.id}>{section.info}</p>
              ))
            }            
          </div>
        </div>
      </div>
    </div>
  ) : <div> Loading </div>
  )
};
