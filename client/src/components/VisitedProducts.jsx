import React from 'react';
import { useSelector } from 'react-redux';
import './VisitedProducts.css';
const VisitedProducts = () => {
  const visited = useSelector((state) => state.visitedProducts.products);

  if (visited.length === 0) return null;

  const renderStars = (rating) => {
    const fullStars = Math.round(rating || 0);
    return [...Array(5)].map((_, i) => (
      <i
        key={i}
        className={`fas fa-star ${i < fullStars ? 'text-warning' : 'text-muted'}`}
        style={{ marginRight: '2px' }}
      ></i>
    ));
  };

  return (
    <div className="container mt-3 mb-5">
      <h2 className="text-center mb-4">Gezdiğin Ürünler</h2>

      <div className="row g-4 justify-content-center">
        {visited.map(product => (
          <div className="col-12 col-sm-6 col-md-4 col-lg-3" key={product.id}>
            <div className="product-card mx-auto p-3">
              <img src={product.image} className="img-fluid mb-2" alt={product.title} />
              <h5>{product.title}</h5>
              <div className="rating mb-1">{renderStars(product.rating)}</div>
              <div className="price">{product.price}₺</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default VisitedProducts;
