import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './ElectronicSlider.css';
import { useDispatch } from 'react-redux';
import { addVisitedProduct } from '../redux/visitedProductsSlice';
import { useNavigate } from 'react-router-dom';


const ElectronicSlider = () => {
  const [products, setProducts] = useState([]);
  const dispatch = useDispatch();
  const navigate = useNavigate();

    const baseURL =
    process.env.NODE_ENV === 'development'
      ? 'http://localhost:5050'
      : ''
useEffect(() => {
  axios.get(`${baseURL}/api/elektronik`)
    .then(res => setProducts(res.data))
    .catch(err => console.error('Elektronik slider error:', err));
}, []);

const handleClick = (product) => {
  dispatch(addVisitedProduct(product));
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


  return (
      <div className="bg-light rounded p-2 h-100 d-flex flex-column justify-content-between">
        <h5 className="text-center mb-3">Elektronik Fırsatlar</h5>
        <div id="electronicSlider" className="carousel slide" data-bs-ride="carousel" data-bs-interval="3000">
          <div className="carousel-inner">
            <button className="carousel-control-prev" type="button" data-bs-target="#electronicSlider" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Önceki</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#electronicSlider" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Sonraki</span>
                </button>
            {products.map((product, index) => (
                <div
                  className={`carousel-item ${index === 0 ? 'active' : ''}`}
                  key={product.id}
                  onClick={() => handleClick({ ...product, source: 'electronic' })}
                  style={{ cursor: 'pointer' }}
                >
                <div className="product-card mx-auto p-3">
                  <img src={product.image} className="img-fluid mb-2" alt={product.title} />
                  <h5>{product.title}</h5>
                  <div className="rating">{renderStars(product.rating || 0)}</div>
                  <div className="price">{product.price}₺</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
  );
};

export default ElectronicSlider;