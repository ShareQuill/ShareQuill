import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Login from './pages/Login';
import Main from './pages/main/main';
import ViewProduct from './pages/ViewProduct';
import PostItems from './pages/PostItems';
import Signup from './pages/Signup';
import Logout from './pages/Logout';
import Success from './pages/Success';
import Category from "./pages/Category";

const App = () => {
  const [hasAccessToken, setHasAccessToken] = useState(false);

  useEffect(() => {
    const accessTokenCookie = document.cookie.split(';').find(cookie => cookie.trim().startsWith('userAccessToken='));
    
    if (accessTokenCookie) {
      setHasAccessToken(true);
    }
  },[])
  return (
    <Router>
      <Routes>
      {!hasAccessToken ? (
        <>
          <Route path="/" element={<Main/>} />
          <Route path="/products/:id" element={<ViewProduct/>} />
          <Route path="/postItems" element={<PostItems/>} />
          <Route path="/logout" element={<Logout/>} />
          <Route path="/success" element={<Success/>} />
          <Route path="/products/category/:category" element={<Category />} />
        </>
        ) : (
          <>
          </>
        )}
          <Route path="/login" element={<Login/>} />
          <Route path="/signup" element={<Signup/>} />
      </Routes>
    </Router>
  );
};

export default App;
