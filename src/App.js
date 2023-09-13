import './App.css';
import PeopleList from './components/PeopleList';
import { useDispatch, useSelector } from 'react-redux';
import { createSelector } from '@reduxjs/toolkit';
import { getData } from './features/dataSlice';
import PersonPage from './components/PersonPage';
import { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar';
import CarouselContainer from './components/CarouselContainer';
import AboutUs from './components/AboutUs';
import Banner from './components/Banner';
import Modal from './components/Modal';
import ContactUs from './components/ContactUs';

const App = () => {

  const state = useSelector(state => state.dataReducer);
  console.log('state', state)
  const [ data, setData ] = useState([])
  console.log('data', data)
  const dispatch = useDispatch();

  const selectData = (state) => state.data
  console.log('selectData')
  // const selectData = createSelector(
  //    (state) => state.dataReducer,
  //    (data) => data
  // )

  console.log('selectData', selectData)

  useEffect(() => {
    const showChoice = localStorage.getItem('showChoice')
     if (showChoice === 'suits') {
      dispatch(getData(showChoice))
    } else if (showChoice === 'lawandorder') {
      dispatch(getData(showChoice))
    } else if (showChoice === 'house') {
      dispatch(getData(showChoice))
    }
  },[]);


  return ( !state.isSuccess && !state.loading ? (
    <Modal/>
  ) :
    <div className="App">
      <Banner/>
      <NavBar/>
      <Routes>
        <Route exact path='/' element={state ? <CarouselContainer {...data} props={data}/> : <div>Loading</div>}></Route>
        <Route path='/about-us' element={state ? <AboutUs props={state}/> : <div>Loading</div>}></Route>
        <Route path='/cast' element={<PeopleList/>}></Route>
        <Route path='/cast/:id' element={<PersonPage/>}></Route>
        <Route path='/contact' element={<ContactUs/>}></Route>
      </Routes>
    </div>
  )
};

export default App;
