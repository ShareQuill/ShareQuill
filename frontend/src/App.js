import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom';
import './scss/tailwind.min.scss';

import Login from './pages/Login';
import Main from './pages/main/main';
import ViewProduct from './pages/viewproduct/ViewProduct';
import PostItems from './pages/PostItems';
import Signup from './pages/Signup';
import Logout from './pages/Logout';
import Success from './pages/Success';
import Category from "./pages/Category";
import { useAuth } from './hooks/authRedirectHook';


const App = () => {
  const auth = useAuth();

  return (
    <Router>
      <Routes>
      {auth.hasaccessToken &&
        <>
          
          <Route path="/postItems" element={<PostItems/>} />
          <Route path="/logout" element={<Logout/>} />
          <Route path="/success" element={<Success/>} />
          <Route path="/products/category/:category" element={<Category />} />
        </>}
        <Route path="/products/:id" element={<ViewProduct/>} />
          <Route path="/" element={<Main/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/signup" element={<Signup/>} />
      </Routes>
    </Router>
  );
};

export default App;
