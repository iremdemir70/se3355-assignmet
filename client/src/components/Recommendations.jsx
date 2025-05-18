import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Recommendations.css';
import { useDispatch } from 'react-redux';
import { addVisitedProduct } from '../redux/visitedProductsSlice';
import { useNavigate } from 'react-router-dom';
import Slider from 'react-slick';

const Recommendations = () => {
  const isMobile = window.innerWidth <= 576;
  const [products, setProducts] = useState([]);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const baseURL =
    process.env.NODE_ENV === 'development'
      ? 'http://localhost:5050'
      : '';
  useEffect(() => {
    axios.get(`${baseURL}/api/recommendations`)
      .then(res => setProducts(res.data))
      .catch(err => console.error('Recommendations error:', err));
  }, []);

  const handleClick = (product) => {
    dispatch(addVisitedProduct({ ...product, source: 'recommendation' }));
    navigate(`/product/${product.id}`);
  };

  const renderStars = (rating) => {
    const fullStars = Math.round(rating);
    return [...Array(5)].map((_, i) => (
      <i
        key={i}
        className={`fas fa-star ${i < fullStars ? 'text-warning' : 'text-muted'}`}
        style={{ marginRight: '2px' }}
      ></i>
    ));
  };

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    arrows: true,
    responsive: [
      {
        breakpoint: 992,
        settings: { slidesToShow: 3 },
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 576,
        settings: { slidesToShow: 1 },
      },
    ],
  };

 return (
  <div className="wider-container recommendations">
    <h2 className="text-center mb-4">Sana Özel Öneriler</h2>
    {isMobile ? (
      <div className="row g-3 justify-content-center">
        {products.map((product) => (
          <div className="col-6 d-flex justify-content-center" key={product.id} onClick={() => handleClick(product)}>
            <div className="rec-product-card p-3">
              <img src={product.image} alt={product.title} className="img-fluid mb-2" />
              <h5>{product.title}</h5>
              <div className="rating">{renderStars(product.rating || 0)}</div>
              <div className="price">{product.price}₺</div>
            </div>
          </div>
        ))}
      </div>
    ) : (
      <Slider {...settings}>
        {products.map(product => (
          <div key={product.id} onClick={() => handleClick(product)} style={{ padding: '0 10px', cursor: 'pointer' }}>
            <div className="rec-product-card p-3 mx-auto">
              <img src={product.image} alt={product.title} className="img-fluid mb-2" />
              <h5>{product.title}</h5>
              <div className="rating">{renderStars(product.rating || 0)}</div>
              <div className="price">{product.price}₺</div>
            </div>
          </div>
        ))}
      </Slider>
    )}
  </div>
);
}
export default Recommendations;
