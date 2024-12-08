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
    padding: '10px',
    backgroundColor: '#2d6a4f',
    color: 'white',
  },
};

export default Footer;
