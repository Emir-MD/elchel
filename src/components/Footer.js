import React from 'react';

const Footer = () => {
  return (
    <footer style={styles.footer}>
      <p>© 2024 Restaurante. Todos los derechos reservados.</p>
    </footer>
  );
};

const styles = {
  footer: {
    textAlign: 'center',
    padding: '15px',
    backgroundColor: '#5d4037', // Marrón oscuro
    color: 'white',
    fontSize: '14px',
  },
};

export default Footer;
