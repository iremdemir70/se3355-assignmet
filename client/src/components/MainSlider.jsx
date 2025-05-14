import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './MainSlider.css';

const MainSlider = () => {
  const [slides, setSlides] = useState([]);

useEffect(() => {
  axios.get('http://localhost:5050/api/slider')
    .then(res => setSlides(res.data))
    .catch(err => console.error('Slider error:', err));
}, []);



  return (
    <div className="container mt-4">
      <div id="mainSlider" className="carousel slide h-100" data-bs-ride="carousel">
        <div className="carousel-inner">
          {slides.map((item, index) => (
            <div
              key={item.id}
              className={`carousel-item ${index === 0 ? 'active' : ''}`}
            >
              <img src={item.image} className="d-block w-100 slider-img" alt={item.title} />
              <div className="carousel-caption d-none d-md-block">
                <h5>{item.title}</h5>
              </div>
            </div>
          ))}
        </div>

        <button className="carousel-control-prev" type="button" data-bs-target="#mainSlider" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Önceki</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#mainSlider" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Sonraki</span>
        </button>
      </div>
    </div>
  );
};

export default MainSlider;
