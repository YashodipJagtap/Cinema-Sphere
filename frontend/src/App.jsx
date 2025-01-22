// Home.js
import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import SignUp from './pages/SignUp';
import Login from './pages/Login';
import Home from './pages/Home';
import About from './pages/About';
import Bollywood from './pages/Bollywood';
import Hollywood from './pages/Hollywood'; 
import Tollywood from './pages/Tollywood'; 
import PageNotFound from './pages/PageNotFound';

import SingleMovie from './pages/SingleMovie';
import AdminLogin from './pages/admin/AdminLogin';
import CreateMovie from './pages/admin/CreateMovie';
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" crossorigin="anonymous"></script>
const App = () => {
  let isLoggedIn = localStorage.getItem('isLoggedIn');
  let isAdmin = localStorage.getItem('isAdmin');

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
         <Route path="/signUp" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/admin-login" element={<AdminLogin />} />
        <Route path="/singleMovie" element={<SingleMovie />} />
        <Route path="/about" element={<About />} />
        <Route path="/bollywood" element={<Bollywood />} />
        <Route path="/hollywood" element={<Hollywood />} />
        <Route path="/tollywood" element={<Tollywood />} />

        {/* Admin routes */}
        <Route path="/adminLogin" element={<AdminLogin />} />
        <Route path="/CreateMovie" element={<CreateMovie />} />
        <Route path="/createMovie" element={<CreateMovie />} />

        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
