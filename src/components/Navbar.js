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
    padding: '5px 1px',
    backgroundColor: 'white',
    borderBottom: '3px solid #e76f51',
    width: '100%',
    top: 0,
    left: 0,
    zIndex: 1000, // Asegura que esté sobre otros elementos
    boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)', // Sombra para mejor visibilidad
  },
  logoContainer: {
  display: 'flex',
  justifyContent: 'center', // Centra horizontalmente dentro de su espacio
  alignItems: 'center',
  flex: '0 0 auto', // Evita que el logo se estire
  paddingLeft: '100px', // Ajusta el espacio hacia la derecha
},

  logoImage: {
    height: 'clamp(100px, 8vw, 80px)', // Tamaño dinámico del logo
    width: 'auto',
  },
  navLinks: {
    display: 'flex',
    flexWrap: 'wrap', // Permite que los enlaces bajen a otra línea si es necesario
    listStyle: 'none',
    margin: 0,
    padding: 0,
    gap: '15px', // Espaciado entre enlaces
    justifyContent: 'center',
    flex: 1,
  },
  link: {
    color: 'black',
    textDecoration: 'none',
    fontSize: 'clamp(12px, 1.5vw, 18px)', // Tamaño dinámico
    textTransform: 'uppercase',
    fontFamily: 'Poppins, sans-serif',
    padding: '5px 10px', // Espaciado interno
    borderRadius: '4px',
    transition: 'color 0.3s, background-color 0.3s',
  },
  activeLink: {
    color: '#fff', // Texto blanco para el enlace activo
    backgroundColor: '#e76f51', // Fondo naranja para el enlace activo
    borderBottom: 'none', // Elimina el subrayado en el enlace activo
  },

  // Media queries
  '@media (max-width: 768px)': {
    navbar: {
      flexDirection: 'column', // Los elementos se apilan
      alignItems: 'flex-start', // Alineación a la izquierda
    },
    navLinks: {
      flexDirection: 'column', // Los enlaces se apilan
      gap: '10px', // Espaciado reducido entre enlaces
    },
    link: {
      fontSize: '14px', // Tamaño reducido en móviles
    },
  },

  '@media (max-width: 480px)': {
    navbar: {
      padding: '10px', // Reducción de padding en pantallas más pequeñas
    },
    logoImage: {
      height: '60px', // Tamaño fijo para el logo
    },
    link: {
      fontSize: '60px', // Tamaño aún más pequeño para pantallas pequeñas
      padding: '5px',
    },
  },
};

export default Navbar;
