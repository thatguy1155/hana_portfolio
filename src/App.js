// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';
import HomePage from './components/HomePage';
import SlideshowPage from './components/SlideshowPage';
import './App.css';

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/portfolio" element={<SlideshowPage />} />
        </Routes>
      </Router>
    </Provider>
  );
};

export default App;