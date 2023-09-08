import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { getPerson } from '../features/peopleSlice';

export default function PersonPage() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const [ person, setPerson ] = useState([])
  console.log('person', person)

  useEffect(() => {
    dispatch(getPerson(id))
      .then((res) => {
        setPerson(res.payload)
      })
  },[]);

  const { name, about, photo, phone, fax, email } = person

  return (
    <div className='person-page'>
      <div className='info-section'>
        <div className='img-container'>
          <img src={photo} alt={name}/>
          <h5>Phone:</h5>
          <p><a href={`tel:${phone}`}>{phone}</a></p>
          <h5>Fax</h5>
          <p>{fax}</p>
          <h5>Email</h5>
          <p><a href={`email:${email}`}>{email}</a></p>
        </div>
      </div>
      <div className='about-section'>
        <div className='display-name'>
          <h1>{name}</h1>
          <h3>Role</h3>
        </div>
        <div className='about'>
          <p>{about}</p>
        </div>
      </div>
    </div>
  )
}
