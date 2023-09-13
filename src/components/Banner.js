import React, { useEffect, useState } from 'react';
import '../styles/Banner.css';
import '../styles/SuitsStyles.css'
import '../styles/LawAndOrderStyles.css'
import '../styles/HouseStyles.css'
import { useDispatch } from 'react-redux';
import { getData } from '../features/dataSlice';

export default function Banner() {
  const dispatch = useDispatch();
  let themeData = localStorage.getItem('theme');
  let showData = localStorage.getItem('showChoice');
  const suits = 'suits';
  const lawOrder = 'lawandorder';
  const house = 'house';
  const [ theme, setTheme ] = useState(themeData);
  const [ , setShow ] = useState(showData);

  useEffect(() => {
    document.body.className = theme
  }, [theme])

  const changeData = (data) => {
    setTheme(data)
    setShow(data)
    dispatch(getData(data))
    localStorage.setItem('theme', data)
    localStorage.setItem('showChoice', data)
    document.body.className = data
  }

  const handleSuits = () => {
    changeData(suits)
  };

  const handleLNO = () => {
    changeData(lawOrder)
  };

  const handleHouse = () => {
    changeData(house)
  };

  return (
    <div className='banner-container'>
      <div className='banner-title-container'>
        <h3 className='banner-title'>Which version would you like to see?</h3>
      </div>
      <div className='banner-button-container'>
        <span className='banner-button' onClick={handleSuits}><img className='button-image' src='https://img.usanetwork.com/sites/nbcunbc/files/images/2019/7/16/Suits-S9-Logo-1920x1080.jpg?impolicy=nbc_com&imwidth=640&imdensity=1' alt='Suits'/></span>
        <span className='banner-button' onClick={handleLNO}><img className='button-image' src='https://variety.com/wp-content/uploads/2021/05/Law-and-Order-Logo.jpg?w=1000&h=563&crop=1' alt='Law & Order'/></span>
        <span className='banner-button' onClick={handleHouse}><img className='button-image' src='https://img.nbc.com/sites/nbcunbc/files/images/2018/5/30/House-Logo-1920x1080.jpg?impolicy=nbc_com&imwidth=640&imdensity=1' alt='House'/></span>
      </div>
    </div>
  )
};
