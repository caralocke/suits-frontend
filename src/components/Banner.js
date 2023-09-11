import React from 'react';
import '../styles/Banner.css';
import { useDispatch } from 'react-redux';
import { getSuitsData, getLNOData } from '../features/dataSlice';

export default function Banner() {
  const dispatch = useDispatch();

  const handleSuits = () => {
    dispatch(getSuitsData())
    localStorage.setItem('showChoice', 'suits')
  };

  const handleLNO = () => {
    dispatch(getLNOData())
    localStorage.setItem('showChoice', 'lawAndOrder')
  };

  return (
    <div className='banner-container'>
      <div className='banner-title-container'>
        <h3 className='banner-title'>Which version would you like to see?</h3>
      </div>
      <div className='banner-button-container'>
        <span className='banner-button' onClick={handleSuits}><img className='button-image' src='https://img.usanetwork.com/sites/nbcunbc/files/images/2019/7/16/Suits-S9-Logo-1920x1080.jpg?impolicy=nbc_com&imwidth=640&imdensity=1' alt='Suits'/></span>
        <span className='banner-button' onClick={handleLNO}><img className='button-image' src='https://variety.com/wp-content/uploads/2021/05/Law-and-Order-Logo.jpg?w=1000&h=563&crop=1' alt='Law & Order'/></span>
      </div>
    </div>
  )
};
