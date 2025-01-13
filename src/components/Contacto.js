import React from 'react';
import { Link } from 'react-router-dom';

const Contacto = () => {
  return (
    <footer style={styles.footer}>
      <div style={styles.container}>
        {/* Logo y slogan */}
        <div style={styles.column}>
          <img src="/img/logos.png" alt="El Chel Logo" style={styles.logo} />
          <p style={styles.slogan}>La Casa de Todos</p>
        </div>

        {/* Información de sucursales */}
        <div style={styles.column}>
          <h3 style={styles.title}>Sucursales</h3>
          <ul style={styles.list}>
            <li><strong>Sucursal Centro:</strong></li>
            <li>Teléfono: 555-123-4567</li>
            <li>Correo: <a href="mailto:centro@elchel.com" style={styles.link}>centro@elchel.com</a></li>
            <br />
            <li><strong>Sucursal Norte:</strong></li>
            <li>Teléfono: 555-987-6543</li>
            <li>Correo: <a href="mailto:norte@elchel.com" style={styles.link}>norte@elchel.com</a></li>
            <br />
            <li><strong>Sucursal Sur:</strong></li>
            <li>Teléfono: 555-654-7890</li>
            <li>Correo: <a href="mailto:sur@elchel.com" style={styles.link}>sur@elchel.com</a></li>
          </ul>
        </div>

        {/* Enlaces de navegación */}
        <div style={styles.column}>
          <h3 style={styles.title}>Conócenos</h3>
          <ul style={styles.list}>
            <li>
              <Link to="/nosotros" style={styles.link}>
                Nosotros
              </Link>
            </li>
            <li>
              <Link to="/opiniones" style={styles.link}>
                Opiniones
              </Link>
            </li>
            <li>
              <Link to="/terminos" style={styles.link}>
                Términos y Condiciones
              </Link>
            </li>
          </ul>
        </div>

        {/* Redes sociales */}
        <div style={styles.column}>
          <h3 style={styles.title}>Redes sociales</h3>
          <ul style={styles.list}>
            <li>
              <a href="https://instagram.com/tu_restaurante" target="_blank" rel="noopener noreferrer" style={styles.link}>
                <img src="/img/instagram.png" alt="Instagram" style={styles.icon} /> Instagram
              </a>
            </li>
            <li>
              <a href="https://facebook.com/tu_restaurante" target="_blank" rel="noopener noreferrer" style={styles.link}>
                <img src="/img/facebook.jpg" alt="Facebook" style={styles.icon} /> Facebook
              </a>
            </li>
            <li>
              <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer" style={styles.link}>
                <img src="/img/Whatsapp.jpg" alt="WhatsApp" style={styles.icon} /> WhatsApp
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
    background: 'linear-gradient(to bottom, #ff9800, #ff6f00)', // Fondo degradado
    color: '#000000', // Texto negro
    padding: '20px 15px',
    textAlign: 'center',
    fontFamily: 'Arial, sans-serif',
  },
  container: {
    display: 'flex',
    flexWrap: 'wrap', // Hacer que las columnas se apilen en pantallas pequeñas
    justifyContent: 'center', // Centrar columnas horizontalmente
    alignItems: 'center', // Centrar columnas verticalmente
    maxWidth: '1200px',
    margin: '0 auto',
    gap: '20px', // Espaciado entre columnas
  },
  column: {
    flex: '1 1 250px', // Columnas flexibles
    minWidth: '200px',
    marginBottom: '20px', // Espaciado debajo de las columnas
    textAlign: 'center',
  },
  title: {
    fontSize: '20px', // Tamaño del título
    fontWeight: 'bold',
    marginBottom: '10px', // Espaciado debajo del título
  },
  list: {
    listStyle: 'none',
    padding: 0,
    margin: 0,
    fontSize: '16px', // Tamaño del texto
    lineHeight: '1.5', // Espaciado entre líneas
  },
  link: {
    color: '#000000',
    textDecoration: 'none',
    cursor: 'pointer',
    position: 'relative',
    transition: 'all 0.3s', // Transición suave
  },
  logo: {
    width: '150px',
    marginBottom: '10px',
  },
  slogan: {
    fontSize: '14px',
    marginBottom: '10px',
    fontStyle: 'italic',
  },
  icon: {
    width: '30px',
    height: 'auto',
    marginRight: '8px',
    verticalAlign: 'middle',
  },
  '@media (max-width: 768px)': {
    container: {
      flexDirection: 'column', // Cambia las columnas a una sola fila en móviles
      textAlign: 'center', // Centrar contenido
    },
    logo: {
      width: '100px', // Reducir el tamaño del logo
    },
    title: {
      fontSize: '18px', // Reducir tamaño de los títulos
    },
    list: {
      fontSize: '14px', // Reducir tamaño del texto en móviles
    },
    icon: {
      width: '25px', // Reducir tamaño de los íconos
    },
  },
};

export default Contacto;
