import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import '@fortawesome/fontawesome-free/css/all.min.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import QuickLinks from './components/QuickLinks';
import MainSlider from './components/MainSlider';
import ElectronicSlider from './components/ElectronicSlider';
import Recommendations from './components/Recommendations';
import VisitedProducts from './components/VisitedProducts';
import ProductPage from './components/ProductPage';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <QuickLinks />
              <div className="container mt-4">
                <div className="row align-items-stretch">
                  <div className="col-md-8 mb-3 mb-md-0">
                    <MainSlider />
                  </div>
                  <ElectronicSlider />
                </div>
              </div>
              <Recommendations />
              <VisitedProducts />
            </>
          }
        />
        <Route path="/product/:id" element={<ProductPage />} />
      </Routes>
    </Router>
  );
}

export default App;
