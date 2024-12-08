import React from 'react';

const Navbar = () => {
  return (
    <nav style={styles.navbar}>
      <h1 style={styles.logo}>Restaurante</h1>
      <ul style={styles.navLinks}>
        <li>Inicio</li>
        <li>Menú</li>
        <li>Contacto</li>
        <li>Facturación</li>
      </ul>
    </nav>
  );
};

const styles = {
  navbar: {
    display: 'flex',
    justifyContent: 'space-between',
    padding: '10px 20px',
    backgroundColor: '#2d6a4f',
    color: 'white',
  },
  logo: {
    fontSize: '24px',
  },
  navLinks: {
    listStyle: 'none',
    display: 'flex',
    gap: '15px',
  },
};

export default Navbar;
