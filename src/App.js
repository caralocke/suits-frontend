import './App.css';
import PeopleList from './components/PeopleList';
import { useDispatch } from 'react-redux';
import { getPeople } from './features/peopleSlice';
import PersonPage from './components/PersonPage';
import { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar';

const App = () => {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPeople())
  },[])

  return (
    <div className="App">
      <NavBar/>
      <Routes>
        <Route exact path='/' element={<PeopleList/>}></Route>
        <Route path='/attorneys' element={<PeopleList/>}></Route>
        <Route path='/attorneys/:id' Component={props => <PersonPage {...props}/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
