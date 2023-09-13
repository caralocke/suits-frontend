import React from 'react';
import '../styles/PersonCard.css';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

export default function PersonCard() {
  const state = useSelector(state => state.persistedReducer);
  const people = state.data[1].people;

  const navigate = useNavigate();
  const handleClick = (id) => {
    navigate(`/cast/${id}`)
  };

  return ( state.loading === true ? (
    <div>loading</div>
  ) : people?.map(person => {
    return (
      <div className='person-card-container' key={person.id}>
        <div className='person-card' onClick={() => handleClick(person.id)}>
          <img className='person-image' src={person.photo} alt={person.name}/>
          <h4>{person.name}</h4>
          <p>{person.rank}</p>
        </div>
      </div> 
    )
  }
  )
  )
};