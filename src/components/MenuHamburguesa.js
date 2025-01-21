import React, { useState } from 'react';
import styled from 'styled-components';
import { Link, useLocation } from 'react-router-dom';

const MenuHamburguesa = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <StyledWrapper>
      <div className="relativa">
        <label className="burger" htmlFor="burger" onClick={toggleMenu}>
          <input type="checkbox" id="burger" checked={isOpen} readOnly />
          <span />
          <span />
          <span />
        </label>
      </div>
      
      <div className={`side-menu ${isOpen ? 'open' : ''}`}>
        {/* Botón de cierre (tache) */}
        <div className="closeButton" onClick={toggleMenu}>
          <div className="close-bar" />
          <div className="close-bar" />
        </div>

        <ul>
          <li>
            <Link
              to="/sucursales"
              style={{
                ...(location.pathname === '/sucursales' && styles.activeLink),
              }}
              onClick={toggleMenu}
            >
              Sucursales
            </Link>
          </li>
          <li>
            <Link
              to="/menu"
              style={{
                ...(location.pathname === '/menu' && styles.activeLink),
              }}
              onClick={toggleMenu}
            >
              Menú
            </Link>
          </li>
          <li>
            <Link
              to="/nosotros"
              style={{
                ...(location.pathname === '/nosotros' && styles.activeLink),
              }}
              onClick={toggleMenu}
            >
              Nosotros
            </Link>
          </li>
          <li>
            <Link
              to="/contacto"
              style={{
                ...(location.pathname === '/contacto' && styles.activeLink),
              }}
              onClick={toggleMenu}
            >
              Contacto
            </Link>
          </li>
        </ul>
      </div>
    </StyledWrapper>
  );
};

const styles = {
  activeLink: {
    color: '#fff',
    backgroundColor: '#e76f51',
  },
};

const StyledWrapper = styled.div`
  /* ... estilos existentes ... */

  /* Estilos para el botón de cierre (tache) */
  .closeButton {
    position: absolute;
    top: 20px;
    right: 20px;
    width: 30px;
    height: 30px;
    cursor: pointer;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    z-index: 10;
  }

  .close-bar {
    position: absolute;
    width: 100%;
    height: 4px;
    background-color: white;
    border-radius: 2px;
  }

  /* Rotar las barras para formar una X */
  .close-bar:first-child {
    transform: rotate(45deg);
  }
  .close-bar:last-child {
    transform: rotate(-45deg);
  }

  /* ... resto de tus estilos ... */
`;

export default MenuHamburguesa;
