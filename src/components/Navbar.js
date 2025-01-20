import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const location = useLocation();

  return (
    <nav style={styles.navbar}>
      <div style={styles.navbarContainer}>
        {/* Logo a la izquierda */}
        <div style={styles.logoContainer}>
          <Link to="/">
            <img src="/img/logos.png" alt="El Chel Logo" style={styles.logoImage} />
          </Link>
        </div>
        {/* Enlaces a la derecha del logo */}
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
      </div>
    </nav>
  );
};

const styles = {
  navbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    borderBottom: '2px solid #e76f51',
    width: '100%',
    height: '140px',
    position: 'fixed',
    top: 0,
    left: 0,
    zIndex: 1000,
  },
  navbarContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center', // Centra el contenido horizontalmente
    width: '100%',
    maxWidth: '1200px',
    padding: '0 20px',
    gap: '15px', // Espacio entre logo y enlaces
  },
  logoContainer: {
    display: 'flex',
    alignItems: 'center',
    marginRight: '10px', // Espacio entre el logo y los enlaces
  },
  logoImage: {
    height: 'clamp(100px, 10vw, 100px)',
    width: 'auto',
  },
  navLinks: {
    display: 'flex',
    alignItems: 'center',
    listStyle: 'none',
    margin: 0,
    padding: 0,
    gap: '40px', // Espacio entre cada enlace
  },
  link: {
    color: 'black',
    textDecoration: 'none',
    fontSize: 'clamp(16px, 1.5vw, 20px)',
    textTransform: 'uppercase',
    fontFamily: 'Poppins, sans-serif',
    padding: '10px 15px',
    borderRadius: '4px',
    transition: 'color 0.3s, background-color 0.3s',
  },
  activeLink: {
    color: '#fff',
    backgroundColor: '#e76f51',
  },
};
document.body.style.margin = '0';
document.body.style.padding = '0';

export default Navbar;
