// src/components/SlideshowPage.js
import React, { useEffect } from 'react';
import Toolbar from '../toolbar'
import text from '../data/text.json'
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { updatePage } from '../portfolioSlice';
import { updateText } from '../textManager';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import '../App.css';

const useQuery = () => {
  return new URLSearchParams(useLocation().search);
};

const SlideshowPage = () => {
  const dispatch = useDispatch();
  const query = useQuery();
  const project = query.get('project') || 'Default Title';

  useEffect(() => {
    dispatch(updatePage({index:project}));
    dispatch(updateText(text.pageText[project]));
  }, [dispatch, project]);

  const projects = useSelector((state) => state.portfolio.projects);
  const project_text = useSelector((state) => state.title.text);
  const title = useSelector((state) => state.title.title);

  return (
    <div style={{ textAlign: 'center'}}>
      <Toolbar />
      <h1>{title}</h1>
      <Carousel showThumbs={false}>
        {projects.map((project) => (
          <div>
          <div key={project.id} className="carousel-container">
            <img src={project.imageUrl} alt={project.title} className="carousel-item"/>
            
          </div>
          </div>
          
        ))}
      </Carousel>
      <p>{project_text}</p>
    </div>
  );
};

export default SlideshowPage;