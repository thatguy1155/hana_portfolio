// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';
import HomePage from './components/HomePage';
import SlideshowPage from './components/SlideshowPage';
import ThumbnailGrid from './components/ThumbnailGrid';
import './App.css';

const sampleItems = [
  { id: 1, title: 'Project 1', subtitle: 'Subtitle 1', imageUrl: './images/image_1.jpg' },
  { id: 2, title: 'Project 2', subtitle: 'Subtitle 2', imageUrl: './images/image_2.jpg' },
  { id: 3, title: 'Project 3', subtitle: 'Subtitle 3', imageUrl: './images/image_3.jpg' },
  { id: 4, title: 'Project 4', subtitle: 'Subtitle 4', imageUrl: './images/image_4.jpg' },
  // Add more items as needed
];

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/portfolio" element={<SlideshowPage />} />
          <Route path="/thumbnails" element={<ThumbnailGrid items={sampleItems} />} />
        </Routes>
      </Router>
    </Provider>
  );
};

export default App;