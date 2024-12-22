import React from 'react';
import '@fontsource/changa';
import '@fontsource/poppins';
import { Link, useLocation } from 'react-router-dom';
import logo from '../img/logos.png'; // Importa la imagen desde la carpeta "img"

const Navbar = () => {
  const location = useLocation(); // Obtiene la ruta actual

  return (
    <nav style={styles.navbar}>
      {/* Contenedor del logo */}
      <div style={styles.logoContainer}>
        <Link to="/">
          <img
            src={logo} // Utiliza la variable importada
            alt="El Chel Logo"
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
            Facturación
          </Link>
        </li>
      </ul>
    </nav>
  );
};

const styles = {
  navbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between', // Distribuye logo y enlaces
    padding: '10px 30px',
    backgroundColor: 'white', // Fondo blanco
    borderBottom: '3px solid #e76f51', // Línea inferior naranja
    width: '100%', // Asegura que el navbar cubra el 100% del ancho de la pantalla
    top: 0,
    left: 0,
    zIndex: 1000, // Asegura que el navbar esté sobre otros elementos
  },
  logoContainer: {
    display: 'flex',
    alignItems: 'center',
  },
  logoImage: {
    height: 'clamp(50px, 10vw, 100px)', // Ajusta el tamaño del logo en función de la pantalla
    width: 'auto',
  },
  navLinks: {
    display: 'flex',
    listStyle: 'none',
    margin: 0,
    padding: 0,
    gap: '20px', // Espaciado entre enlaces
    justifyContent: 'center', // Centra los enlaces en su contenedor
    flex: 1,
  },
  link: {
    color: 'black', // Letras negras
    textDecoration: 'none',
    fontSize: 'clamp(14px, 1.2vw, 18px)', // Tamaño dinámico del texto
    textTransform: 'uppercase',
    fontFamily: 'Poppins, sans-serif',
    transition: 'color 0.3s, border-bottom 0.3s',
  },
  activeLink: {
    color: '#e76f51', // Color naranja al seleccionarse
    borderBottom: '3px solid #e76f51', // Subrayado naranja
  },
};

export default Navbar;
