// src/store.js
import { configureStore } from '@reduxjs/toolkit';
import portfolioReducer from '../portfolioSlice';
import titleReducer from '../textManager';
import toolbarReducer from './toolbarReducer';

const store = configureStore({
  reducer: {
    portfolio: portfolioReducer,
    toolbar: toolbarReducer,
    title: titleReducer
  },
});

export default store;