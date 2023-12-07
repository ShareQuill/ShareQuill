import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Home from './pages/Home';
import Login from './pages/Login';
import ViewProduct from './pages/ViewProduct';
import PostItems from './pages/PostItems';
import Signup from './pages/Signup';
import Logout from './pages/Logout';

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
      {hasAccessToken ? (
        <>
          <Route path="/" element={<Home/>} />
          <Route path="/listing/:id" element={<ViewProduct/>} />
          <Route path="/postItems" element={<PostItems/>} />
          <Route path="/logout" element={<Logout/>} />
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
