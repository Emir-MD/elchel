import React from 'react';
import logo from '../img/logos.png';
import instagramLogo from '../img/instagram.png';
import facebookLogo from '../img/facebook.jpg';
import whatsappLogo from '../img/Whatsapp.jpg';

const Footer = () => {
  return (
    <footer style={styles.footer}>
      <div style={styles.container}>
        <div style={styles.column}>
          <img src={logo} alt="El Chel Logo" style={styles.logo} />
          <p style={styles.slogan}>La Casa de Todos</p>
        </div>
        <div style={styles.column}>
          <h3 style={styles.title}>Sucursales</h3>
          <ul style={styles.list}>
            <li><strong>Sucursal Centro:</strong></li>
            <li>Teléfono: 555-123-4567</li>
            <li>Correo: centro@elchel.com</li>
            <br />
            <li><strong>Sucursal Norte:</strong></li>
            <li>Teléfono: 555-987-6543</li>
            <li>Correo: norte@elchel.com</li>
            <br />
            <li><strong>Sucursal Sur:</strong></li>
            <li>Teléfono: 555-654-7890</li>
            <li>Correo: sur@elchel.com</li>
          </ul>
        </div>
        <div style={styles.column}>
          <h3 style={styles.title}>Conócenos</h3>
          <ul style={styles.list}>
            <li><a href="/nosotros" style={styles.link}>Nosotros</a></li>
            <li><a href="/zona-cobertura" style={styles.link}>Zona de Cobertura</a></li>
            <li><a href="/contacto" style={styles.link}>Contacto</a></li>
            <li><a href="/terminos" style={styles.link}>Términos y Condiciones</a></li>
            <li><a href="/privacidad" style={styles.link}>Política de Privacidad</a></li>
          </ul>
        </div>
        <div style={styles.column}>
          <h3 style={styles.title}>Redes sociales</h3>
          <ul style={styles.list}>
            <li>
              <a href="https://instagram.com/tu_restaurante" target="_blank" rel="noopener noreferrer" style={styles.link}>
                <img src={instagramLogo} alt="Instagram" style={styles.icon} /> Instagram
              </a>
            </li>
            <li>
              <a href="https://facebook.com/tu_restaurante" target="_blank" rel="noopener noreferrer" style={styles.link}>
                <img src={facebookLogo} alt="Facebook" style={styles.icon} /> Facebook
              </a>
            </li>
            <li>
              <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer" style={styles.link}>
                <img src={whatsappLogo} alt="WhatsApp" style={styles.icon} /> WhatsApp
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

const styles = {
  footer: {
    backgroundColor: '#FF5722', // Naranja
    color: '#FFFFFF', // Texto blanco
    padding: '20px 30px',
    textAlign: 'left',
    fontFamily: 'Arial, sans-serif',
  },
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    maxWidth: '1200px',
    margin: '0 auto',
    gap: '20px',
  },
  column: {
    flex: '1 1 250px',
    marginBottom: '20px',
  },
  title: {
    fontSize: 'clamp(16px, 1.5vw, 18px)',
    fontWeight: 'bold',
    marginBottom: '10px',
  },
  list: {
    listStyle: 'none',
    padding: 0,
    margin: 0,
    fontSize: 'clamp(12px, 1.2vw, 14px)',
    lineHeight: '1.8',
  },
  link: {
    color: '#FFFFFF',
    textDecoration: 'none',
    transition: 'color 0.3s',
  },
  logo: {
    width: 'clamp(100px, 10vw, 150px)',
    marginBottom: '10px',
  },
  slogan: {
    fontSize: 'clamp(12px, 1.2vw, 14px)',
    fontStyle: 'italic',
  },
  icon: {
    width: '20px',
    height: '20px',
    marginRight: '10px',
    verticalAlign: 'middle',
  },
};

export default Footer;
