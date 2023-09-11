import React from 'react';
import '../styles/Modal.css';
import { useDispatch } from 'react-redux';
import { getSuitsData, getLNOData } from '../features/dataSlice';
import { useNavigate } from 'react-router-dom';

export default function Modal () {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSuits = () => {
    dispatch(getSuitsData())
    localStorage.setItem('showChoice', 'suits')
    navigate('/')
  };

  const handleLNO = () => {
    dispatch(getLNOData())
    localStorage.setItem('showChoice', 'lawAndOrder')
    navigate('/')
  };

  return (
    <div id='modal' className='modal' style={{zIndex: 800}}>
      <div className='modal-inner'>
        <div className='modal-text'>
          <h1>This application is "plug and play." To see what it can do, please pick a show.</h1>
          <h3>(This can be changed later).</h3> 
        </div>        
        <div className='modal-buttons-container'>
          <span className='modal-button' onClick={handleSuits}><img className='modal-button-image' src='https://img.usanetwork.com/sites/nbcunbc/files/images/2019/7/16/Suits-S9-Logo-1920x1080.jpg?impolicy=nbc_com&imwidth=640&imdensity=1' alt='Suits'/></span>
          <span className='modal-button' onClick={handleLNO}><img className='modal-button-image' src='https://variety.com/wp-content/uploads/2021/05/Law-and-Order-Logo.jpg?w=1000&h=563&crop=1' alt='Law & Order'/></span>
        </div>
      </div>      
    </div>
  )
};
