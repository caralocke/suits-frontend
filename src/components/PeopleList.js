import React from 'react';
import {  useSelector } from 'react-redux';
import PersonCard from './PersonCard';

export default function PeopleList() {
  
  const peopleData = useSelector(state => state.suitsReducer.data[1]);
  let people = peopleData?.people;
  return ( 
    <div className='people-list'>
      <PersonCard people={people}/>
    </div>
  )
}
