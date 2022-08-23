import React, { useEffect, useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Home from './page/Home';
import NavBar from './components/NavBar';
import Login from './page/Login';
import Register from './page/Register';
import { useSelector } from "react-redux";
import DetailProduct from './page/DetailProduct';
import Footer from './components/Footer';
import Shop from './page/Shop';
import Blog from './page/Blog';
import NotFound from './page/NotFound';

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
  const getuser = useSelector((state: StateStore) => state.userLogin.userInfo);


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
          <Route path='/shop' element={<Shop/>} />
          <Route path='/blog' element={<Blog/>} />
          <Route path='/detail-product/:productId' element={user ? <DetailProduct /> : <Navigate to='/login' />} />
          <Route path='*' element={<NotFound/>} />
        </Routes>

        <Footer />
      </Router>
    </div>
  );
}

export default App;

