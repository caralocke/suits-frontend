import './App.css';
import PeopleList from './components/PeopleList';
import { useSelector } from 'react-redux';
import PersonPage from './components/PersonPage';
import { Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar';
import CarouselContainer from './components/CarouselContainer';
import AboutUs from './components/AboutUs';
import Banner from './components/Banner';
import Loader from './components/Loader';
import Modal from './components/Modal';
import ContactUs from './components/ContactUs';

const App = () => {

  const state = useSelector(state => state.persistedReducer);
  const showChoice = localStorage.getItem('showChoice');
  const name = useSelector(state => state.persistedReducer.data[4]?.show[0]?.name);
  const logo = useSelector(state => state.persistedReducer.data[3]?.navbar[0]?.url);

  document.title = name || 'Choose a show'


  return ( !state.isSuccess && !state.loading && showChoice === null ? (
    <Modal/>
  ) : state.loading ? (
    <Loader/>
  ):
    <div className="App">
      <Banner/>
      <NavBar/>
      <Routes>
        <Route exact path='/' element={<><CarouselContainer/></>} ></Route>
        <Route path='/about-us' element={<AboutUs/>}></Route>
        <Route path='/cast' element={<PeopleList/>}></Route>
        <Route path='/cast/:id' element={<PersonPage/>}></Route>
        <Route path='/contact' element={<ContactUs/>}></Route>
      </Routes>
    </div>
  )
};

export default App;
