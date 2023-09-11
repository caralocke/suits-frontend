import './App.css';
import PeopleList from './components/PeopleList';
import { useDispatch, useSelector } from 'react-redux';
import { getSuitsData, getLNOData } from './features/dataSlice';
import PersonPage from './components/PersonPage';
import { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar';
import CarouselContainer from './components/CarouselContainer';
import AboutUs from './components/AboutUs';
import Banner from './components/Banner';
import Modal from './components/Modal';
import ContactUs from './components/ContactUs';

const App = () => {

  const state = useSelector(state => state.dataReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    const showChoice = localStorage.getItem('showChoice')
     if (showChoice === 'suits') {
      dispatch(getSuitsData())
    } else if (showChoice === 'lawAndOrder') {
      dispatch(getLNOData())
    }
  },[dispatch]);


  return ( !state.isSuccess && !state.loading ? (
    <Modal/>
  ) :
    <div className="App">
      <Banner/>
      <NavBar/>
      <Routes>
        <Route exact path='/' element={<CarouselContainer/>}></Route>
        <Route path='/about-us' element={<AboutUs/>}></Route>
        <Route path='/attorneys' element={<PeopleList/>}></Route>
        <Route path='/attorneys/:id' element={<PersonPage/>}></Route>
        <Route path='/contact' element={<ContactUs/>}></Route>
      </Routes>
    </div>
  )
};

export default App;
