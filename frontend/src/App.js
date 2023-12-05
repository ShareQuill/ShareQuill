import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './pages/Login';

import MainView from './components/mainview/MainView';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login/>} />
        
      </Routes>
      <MainView />
    </Router>
  );
};

export default App;
