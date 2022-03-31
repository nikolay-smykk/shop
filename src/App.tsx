import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './App.css';
import { Auth } from './pages/Auth';
import { Cart } from './pages/Cart';
import { Home } from './pages/Home';
import { Header } from './shared/Layout/Header';

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="auth" element={<Auth />}></Route>
        <Route path="cart" element={<Cart />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
