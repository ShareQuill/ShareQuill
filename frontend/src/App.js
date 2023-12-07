import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import Login from "./pages/Login";
import ViewProduct from "./pages/ViewProduct";
import PostItems from "./pages/PostItems";
import Success from "./pages/Success";
import Category from "./pages/Category";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/products/:id" element={<ViewProduct />} />
        <Route path="/postItems" element={<PostItems />} />
        <Route path="/success" element={<Success />} />
        <Route path="/products/category/:category" element={<Category />} />
      </Routes>
    </Router>
  );
};

export default App;
