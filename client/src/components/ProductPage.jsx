import React from 'react';
import { useParams } from 'react-router-dom';

const ProductPage = () => {
  const { id } = useParams();

  return (
    <div className="container my-5">
    <h2 className="text-center">Ürün Bilgisi</h2>
    <p className="text-muted text-center">Seçilen ürün ID: <strong>{id}</strong></p>
    <p className="text-center">Ürün detayları yakında burada yer alacak!</p>
    </div>
  );
};

export default ProductPage;
