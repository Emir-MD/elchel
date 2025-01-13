import React from 'react';
import '@fontsource/poppins';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const location = useLocation(); // Obtiene la ruta actual

  return (
    <nav style={styles.navbar}>
      {/* Contenedor del logo */}
      <div style={styles.logoContainer}>
        <Link to="/">
          <img src="/img/logos.png" alt="El Chel Logo"
            style={styles.logoImage}
          />
        </Link>
      </div>

      {/* Contenedor de enlaces */}
      <ul style={styles.navLinks}>
        <li>
          <Link
            to="/sucursales"
            style={{
              ...styles.link,
              ...(location.pathname === '/sucursales' && styles.activeLink),
            }}
          >
            Sucursales
          </Link>
        </li>
        <li>
          <Link
            to="/menu"
            style={{
              ...styles.link,
              ...(location.pathname === '/menu' && styles.activeLink),
            }}
          >
            Menú
          </Link>
        </li>
        <li>
          <Link
            to="/nosotros"
            style={{
              ...styles.link,
              ...(location.pathname === '/nosotros' && styles.activeLink),
            }}
          >
            Nosotros
          </Link>
        </li>
        <li>
          <Link
            to="/contacto"
            style={{
              ...styles.link,
              ...(location.pathname === '/contacto' && styles.activeLink),
            }}
          >
            Contacto
          </Link>
        </li>
      </ul>
    </nav>
  );
};

const styles = {
  navbar: {
    display: 'flex',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '10px 20px',
    backgroundColor: 'white',
    borderBottom: '3px solid #e76f51',
    width: '100%',
    top: 0,
    left: 0,
    zIndex: 1000, // Asegura que esté sobre otros elementos
    boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
  },
  logoContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flex: '0 0 auto',
    paddingLeft: '0',
  },
  logoImage: {
    height: 'clamp(80px, 12vw, 120px)',
    width: 'auto',
  },
  navLinks: {
    display: 'flex',
    flexWrap: 'wrap',
    listStyle: 'none',
    margin: 0,
    padding: 0,
    gap: '10px',
    justifyContent: 'center',
    flex: 1,
  },
  link: {
    color: 'black',
    textDecoration: 'none',
    fontSize: 'clamp(18px, 1.2vw, 16px)',
    textTransform: 'uppercase',
    fontFamily: 'Poppins, sans-serif',
    padding: '8px 12px',
    borderRadius: '4px',
    transition: 'color 0.3s, background-color 0.3s',
  },
  activeLink: {
    color: '#fff',
    backgroundColor: '#e76f51',
    borderBottom: 'none',
  },
  '@media (max-width: 768px)': {
    navbar: {
      flexDirection: 'column',
      alignItems: 'center',
    },
    navLinks: {
      flexDirection: 'column',
      gap: '8px',
    },
    link: {
      fontSize: 'clamp(12px, 2vw, 14px)',
    },
  },
  '@media (max-width: 480px)': {
    navbar: {
      padding: '10px',
    },
    logoImage: {
      height: '40px',
    },
    link: {
      fontSize: 'clamp(10px, 2.5vw, 12px)',
    },
  },
};

export default Navbar;
