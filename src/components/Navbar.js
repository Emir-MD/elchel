// ======== Navbar.jsx ========
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  // Alterna el estado para abrir/cerrar el menú lateral
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <StyledNavbar>
      <div className="navbarContainer">
        {/* LOGO en la barra superior */}
        <div className="logoContainer">
          <Link to="/">
            <img
              src="/img/Menuelchel/chel logo.png"
              alt="El Chel Logo"
              className="logoImage"
            />
          </Link>
        </div>

        {/* ENLACES DESKTOP (se ocultan en móvil) */}
        <ul className="navLinks">
          <li>
            <Link
              to="/sucursales"
              className={`link ${
                location.pathname === '/sucursales' ? 'activeLink' : ''
              }`}
            >
              Sucursales
            </Link>
          </li>
          <li>
            <Link
              to="/menu"
              className={`link ${
                location.pathname === '/menu' ? 'activeLink' : ''
              }`}
            >
              Menú
            </Link>
          </li>
          <li>
            <Link
              to="/nosotros"
              className={`link ${
                location.pathname === '/nosotros' ? 'activeLink' : ''
              }`}
            >
              Nosotros
            </Link>
          </li>
          <li>
            <Link
              to="/contacto"
              className={`link ${
                location.pathname === '/contacto' ? 'activeLink' : ''
              }`}
            >
              Contacto
            </Link>
          </li>
        </ul>

        {/* ÍCONO HAMBURGUESA (solo en móvil) */}
        <div className="burger" onClick={toggleMenu}>
          <span />
          <span />
          <span />
        </div>
      </div>

      {/* MENÚ LATERAL (Side-menu) */}
      <div className={`side-menu ${isOpen ? 'open' : ''}`}>
        {/* Logo dentro del menú lateral */}
        <div className="logoSideMenu">
          <Link to="/" onClick={toggleMenu}>
            <img
              src="/img/Menuelchel/chel logo.png"
              alt="El Chel Logo"
              className="logoImageSide"
            />
          </Link>
        </div>

        {/* Botón de cierre (Tache) */}
        <div className="closeButton" onClick={toggleMenu}>
          <div className="close-bar" />
          <div className="close-bar" />
        </div>

        <ul>
          <li>
            <Link
              to="/sucursales"
              className={`sideLink ${
                location.pathname === '/sucursales' ? 'activeSideLink' : ''
              }`}
              onClick={toggleMenu}
            >
              Sucursales
            </Link>
          </li>
          <li>
            <Link
              to="/menu"
              className={`sideLink ${
                location.pathname === '/menu' ? 'activeSideLink' : ''
              }`}
              onClick={toggleMenu}
            >
              Menú
            </Link>
          </li>
          <li>
            <Link
              to="/nosotros"
              className={`sideLink ${
                location.pathname === '/nosotros' ? 'activeSideLink' : ''
              }`}
              onClick={toggleMenu}
            >
              Nosotros
            </Link>
          </li>
          <li>
            <Link
              to="/contacto"
              className={`sideLink ${
                location.pathname === '/contacto' ? 'activeSideLink' : ''
              }`}
              onClick={toggleMenu}
            >
              Contacto
            </Link>
          </li>
        </ul>
      </div>
    </StyledNavbar>
  );
};

export default Navbar;

/* STYLED COMPONENT (Estilos) */
const StyledNavbar = styled.nav`
  /* ========== NAVBAR FIJO SUPERIOR ========== */
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 140px;
  background-color: white;
  border-bottom: 2px solid #e76f51;
  z-index: 1000;

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  .navbarContainer {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    max-width: 1200px;
    height: 100%;
    margin: 0 auto;
    padding: 0 20px;
    gap: 15px;
  }

  .logoContainer {
    display: flex;
    align-items: center;
  }
  .logoImage {
    height: clamp(60px, 10vw, 100px);
    width: auto;
  }

  .navLinks {
    display: flex;
    align-items: center;
    list-style: none;
    gap: 40px;
  }
  .link {
    color: black;
    text-decoration: none;
    font-size: clamp(10px, 1.5vw, 20px);
    text-transform: uppercase;
    font-family: 'Poppins', sans-serif;
    padding: 10px 15px;
    border-radius: 4px;
    transition: color 0.3s, background-color 0.3s;
  }
  .activeLink {
    color: #fff;
    background-color: rgb(255, 133, 4);
  }

  .burger {
    width: 40px;
    height: 30px;
    background: transparent;
    cursor: pointer;
    display: none;
    flex-direction: column;
    justify-content: space-between;
  }
  .burger span {
    display: block;
    height: 4px;
    width: 100%;
    background: black;
    border-radius: 9px;
    transition: 0.25s ease-in-out;
    transform-origin: left center;
  }

  .side-menu {
    position: fixed;
    top: 0;
    right: 0;
    width: 75%;
    max-width: 300px;
    height: 100%;
    background: linear-gradient(to bottom, #ff6f00, #ff9800);
    box-shadow: -2px 0 5px rgba(0, 0, 0, 0.5);
    transform: translateX(100%);
    transition: transform 0.3s ease;
    padding: 20px;
    display: flex;
    flex-direction: column;
    color: white;
  }
  .side-menu.open {
    transform: translateX(0);
  }

  /* Logo dentro del menú lateral */
  .logoSideMenu {
    display: flex;
    justify-content: center;
  }
  .logoImageSide {
    height: clamp(150Px, 10vw, 100px);
    width: auto;
  }

  .side-menu ul {
    list-style: none;
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 25px;
    margin: 0;
    padding: 0;
  }
  .side-menu li {
    text-align: center;
  }
  .sideLink {
    text-decoration: none;
    color: white;
    font-size: 20px;
    font-weight: bold;
    transition: color 0.3s ease;
  }
  .sideLink:hover {
    color: rgb(0, 0, 0);
  }
  .activeSideLink {
    color: rgb(0, 0, 0);
  }

  .closeButton {
    position: absolute;
    top: 20px;
    right: 20px;
    width: 30px;
    height: 30px;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1001;
  }
  .close-bar {
    position: absolute;
    width: 100%;
    height: 4px;
    background-color: white;
    border-radius: 2px;
  }
  .close-bar:first-child {
    transform: rotate(45deg);
  }
  .close-bar:last-child {
    transform: rotate(-45deg);
  }

  @media (max-width: 768px) {
    .navLinks {
      display: none;
    }
    .burger {
      display: flex;
      position: absolute;
      right: 60px;
      top: 50%;
      transform: translateY(-50%);
    }
    .navbarContainer {
      position: relative;
      justify-content: center;
    }
  }
`;
