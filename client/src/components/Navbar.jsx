import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light sticky-top shadow-sm">
      <div className="container justify-content-center">
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
          <ul className="navbar-nav">

            <li className="nav-item dropdown">
              <Link
                className="nav-link dropdown-toggle"
                to="/elektronik"
                id="elektronikMenu"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Elektronik
              </Link>
              <ul className="dropdown-menu" aria-labelledby="elektronikMenu">
                <li><Link className="dropdown-item" to="/bilgisayar-tablet">Bilgisayar / Tablet</Link></li>
                <li><Link className="dropdown-item" to="/yazici-projeksiyon">Yazıcılar / Projeksiyon</Link></li>
                <li><Link className="dropdown-item" to="/telefon-aksesuarlari">Telefon Aksesuarları</Link></li>
              </ul>
            </li>

            <li className="nav-item dropdown">
              <Link
                className="nav-link dropdown-toggle"
                to="/ev-yasam"
                id="evYasamMenu"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Ev, Yaşam, Kırtasiye
              </Link>
              <ul className="dropdown-menu" aria-labelledby="evYasamMenu">
                <li><Link className="dropdown-item" to="/ofis">Ofis</Link></li>
                <li><Link className="dropdown-item" to="/dekorasyon">Dekorasyon</Link></li>
                <li><Link className="dropdown-item" to="/kirtasiye">Kırtasiye</Link></li>
              </ul>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/oto-bahce">Oto, Bahçe, Yapı Market</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/bebek">Anne & Bebek, Oyuncak</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/spor">Spor, Outdoor</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/kozmetik">Kozmetik, Kişisel Bakım</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/supermarket">Süpermarket, Petshop</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
