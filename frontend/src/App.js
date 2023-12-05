import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Home from './pages/Home';
import Login from './pages/Login';
import ViewProduct from './pages/ViewProduct';
import PostItems from './pages/PostItems';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/listing/:id" element={<ViewProduct/>} />
        <Route path="/postItems" element={<PostItems/>} />
      </Routes>
    </Router>
  );
};

export default App;
