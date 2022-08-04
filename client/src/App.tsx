import React, { useEffect, useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Home from './page/Home';
import NavBar from './components/NavBar';
import Login from './page/Login';
import Register from './page/Register';
import { useSelector } from "react-redux";
import Detail from './page/Detail';
import Footer from './components/Footer';

export interface StateStore {
  userLogin: {
    loading: boolean,
    userInfo: {
      name?: string,
    }
    error: boolean,
  }
}

function App() {
  const [user, setUser] = useState(true);
  const getuser =  useSelector((state:StateStore) => state.userLogin.userInfo);


  useEffect(() => {
    if (getuser == null && getuser == undefined) {
      setUser(false)
    } else {
      setUser(true)
    }

  }, [getuser, user])

  return (
      <div className="App">
        <Router>
          <NavBar children={undefined} />

          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />
            <Route path='/shop' element={user ? <Detail /> : <Navigate to='/login' />} />
            <Route path='*' element={'not found'} />
          </Routes>

          <Footer/>
        </Router>
      </div>
  );
}

export default App;

