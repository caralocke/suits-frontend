import React from 'react';
import { useSelector } from 'react-redux';
import PersonCard from './PersonCard';

export default function PeopleList() {
  
  const people = useSelector(state => state.people);
  
  console.log('people', people)

  return ( 
    <div className='people-list'>
      <PersonCard people={people}/>
    </div>
  )
}
