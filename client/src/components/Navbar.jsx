import React from 'react';
import './Navbar.css';

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

            {/* Menü 1 */}
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="/elektronik"
                id="elektronikMenu"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Elektronik
              </a>
              <ul className="dropdown-menu" aria-labelledby="elektronikMenu">
                <li><a className="dropdown-item" href="/bilgisayar-tablet">Bilgisayar / Tablet</a></li>
                <li><a className="dropdown-item" href="/yazici-projeksiyon">Yazıcılar / Projeksiyon</a></li>
                <li><a className="dropdown-item" href="/telefon-aksesuarlari">Telefon Aksesuarları</a></li>
              </ul>
            </li>

            {/* Menü 2 */}
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="/ev-yasam"
                id="evYasamMenu"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Ev, Yaşam, Kırtasiye
              </a>
              <ul className="dropdown-menu" aria-labelledby="evYasamMenu">
                <li><a className="dropdown-item" href="/ofis">Ofis</a></li>
                <li><a className="dropdown-item" href="/dekorasyon">Dekorasyon</a></li>
                <li><a className="dropdown-item" href="/kirtasiye">Kırtasiye</a></li>
              </ul>
            </li>

            {/* Statik Menüler */}
            <li className="nav-item">
              <a className="nav-link" href="/oto-bahce">Oto, Bahçe, Yapı Market</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/bebek">Anne & Bebek, Oyuncak</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/spor">Spor, Outdoor</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/kozmetik">Kozmetik, Kişisel Bakım</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/supermarket">Süpermarket, Petshop</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
