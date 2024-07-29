// src/Toolbar.js
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { toggleMenu } from './redux/actions';
import { updatePage } from './portfolioSlice';
import { updateText } from './textManager';
import text from './data/text.json'
import FloatingMenu from './components/FloatingMenu';
import './Toolbar.css';

const Toolbar = () => {
  const location = useLocation();
  const isMenuOpen = useSelector((state) => state.isMenuOpen);
  const dispatch = useDispatch();


  const handleToggle = () => {
    dispatch(toggleMenu());
  };

  const page1 = () => {
    dispatch(updatePage({index:0}));
    dispatch(updateText(text.pageText[0]));
  };
  const page2 = () => {
    dispatch(updatePage({index:1}));
    dispatch(updateText(text.pageText[1]));
  };
  const AboutButton = () => <li className = {location.pathname === '/' ? 'hidden' : ''}><a href="#about"onClick={page1}>About</a></li>;
  const ServicesButton = () => <li className = {location.pathname === '/' ? 'hidden' : ''}><a href="#services" onClick={page2}>Services</a></li>
  const ContactButton = () => <li className = {location.pathname === '/' ? 'hidden' : ''}><a href="#contact">Contact</a></li>

  return (
    <header className="toolbar">
      <div className="toolbar__logo">Hana Glass-Choi</div>
      <nav className={`toolbar__nav ${isMenuOpen ? 'open' : ''}`}>
        <ul>
          {location.pathname === '/portfolio' && <AboutButton />}
          {location.pathname === '/portfolio' && <ServicesButton />}
          {location.pathname === '/portfolio' && <ContactButton />}
        </ul>
      </nav>
      <FloatingMenu />
    </header>
  );
};

export default Toolbar;