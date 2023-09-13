import React from 'react';
import {  useSelector } from 'react-redux';
import PersonCard from './PersonCard';
import '../styles/PeopleList.css';

export default function PeopleList() {

  const people = useSelector(state => state.persistedReducer.data[1].people);

  return ( 
    <div className='people-list'>
      <PersonCard people={people}/>
    </div>
  )
};
