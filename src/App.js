import './App.css';
import PeopleList from './components/PeopleList';
import { useDispatch } from 'react-redux';
import { getPeople } from './features/peopleSlice';
import PersonPage from './components/PersonPage';
import { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './components/Home';
import CarouselContainer from './components/CarouselContainer';
import AboutUs from './components/AboutUs';

const App = () => {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPeople())
  },[dispatch])

  return (
    <div className="App">
      <NavBar/>
      <Routes>
        <Route exact path='/' element={<CarouselContainer/>}></Route>
        <Route path='/about-us' element={<AboutUs/>}></Route>
        <Route path='/attorneys' element={<PeopleList/>}></Route>
        <Route path='/attorneys/:id' Component={props => <PersonPage {...props}/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
