import React from 'react';
import { Link } from 'react-router-dom';

const Contacto = () => {
  return (
    <footer style={styles.footer}>
      <div style={styles.container}>
        {/* Logo y slogan */}
        <div style={styles.logoContainer}>
          <img src="/img/logos.png" alt="El Chel Logo" style={styles.logo} />
          <p style={styles.slogan}>La Casa de Todos</p>
        </div>

        {/* Información de sucursales */}
        <div style={styles.column}>
          <h3 style={styles.title}>Sucursales</h3>
          <div style={styles.sucursalesContainer}>
            {/* Primera columna de sucursales */}
            <div style={styles.sucursalColumn}>
              <p><strong>Matriz:</strong></p>
              <p>Av. División del Nte. 4405, Coapa, Ex de San Juan de Dios, Tlalpan, CDMX</p>
              <p>Teléfono: <a href="tel:5566030293" style={styles.link}>55 6603-0293</a></p>
              <p>WhatsApp: <a href="https://wa.me/525575110551" target="_blank" rel="noopener noreferrer" style={styles.link}>55 7511-0551</a></p>
              <br />
              <p><strong>Cuemanco:</strong></p>
              <p>Cañaverales 39, Coapa, Magisterial, Tlalpan, CDMX</p>
              <p>Teléfono: <a href="tel:5592784907" style={styles.link}>55 9278-4907</a></p>
              <p>WhatsApp: <a href="https://wa.me/525571810812" target="_blank" rel="noopener noreferrer" style={styles.link}>55 7181-0812</a></p>
              <br />
              <p><strong>Mercado Villa Coapa:</strong></p>
              <p>Av. Canal de Miramontes S/N Local 59, Tlalpan, CDMX</p>
              <p>Teléfono: <a href="tel:5556713059" style={styles.link}>55 5671-3059</a></p>
            </div>
            {/* Segunda columna de sucursales */}
            <div style={styles.sucursalColumn}>
              <p><strong>Club de Golf:</strong></p>
              <p>Miguel Hidalgo Esq., C. Club de Golf, Arenal Tepepan, Tlalpan, CDMX</p>
              <p>Teléfono: <a href="tel:5549580070" style={styles.link}>55 4958-0070</a></p>
              <br />
              <p><strong>San Jerónimo Totalplay:</strong></p>
              <p>Av. San Jerónimo 252, Tizapán San Ángel, La Otra Banda, Coyoacán, CDMX</p>
              <p>Teléfono: <a href="tel:5562341811" style={styles.link}>55 6234-1811</a></p>
              <br />
              <p><strong>Mercado de la Paz "La Casa del Frijol":</strong></p>
              <p>Centro Histórico de Tlalpan, Local 35 y 36, Tlalpan Centro, CDMX</p>
              <p>Teléfono: <a href="tel:5562341811" style={styles.link}>55 6234-1811</a></p>
            </div>
          </div>
        </div>

        {/* Enlaces de navegación */}
        <div style={styles.column}>
          <h3 style={styles.title}>Conócenos</h3>
          <ul style={styles.list}>
            <li>
              <Link to="/nosotros" style={styles.link}>Nosotros</Link>
            </li>
            <li>
              <Link to="/opiniones" style={styles.link}>Opiniones</Link>
            </li>
            <li>
              <Link to="/terminos" style={styles.link}>Términos y Condiciones</Link>
            </li>
          </ul>
          <br />
          <p style={styles.correo}>
            <strong>Correo General:</strong>
          </p>
          <p style={styles.correo}>
            <a href="mailto:elcheloficial@gmail.com" style={styles.link}>elcheloficial@gmail.com</a>
          </p>
        </div>

        {/* Redes sociales */}
        <div style={styles.socialColumn}>
          <h3 style={styles.title}>Redes sociales</h3>
          <ul style={styles.list}>
            <li>
              <a href="https://www.instagram.com/elchel_oficial/" target="_blank" rel="noopener noreferrer" style={styles.link}>
                <img src="/img/instagram.png" alt="Instagram" style={styles.icon} /> Instagram
              </a>
            </li>
            <li>
              <a href="https://www.facebook.com/share/19nvSzrxNV/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer" style={styles.link}>
                <img src="/img/facebook.jpg" alt="Facebook" style={styles.icon} /> Facebook
              </a>
            </li>
            <li>
              <a href="https://wa.me/55 7511-0551" target="_blank" rel="noopener noreferrer" style={styles.link}>
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
    background: 'linear-gradient(to bottom, #ff9800, #ff6f00)',
    color: '#000000',
    padding: '20px 15px',
    fontFamily: 'Arial, sans-serif',
  },
  container: {
    display: 'flex',
    flexWrap: 'nowrap', // Evita que las columnas se apilen
    justifyContent: 'space-between', // Distribuye las columnas uniformemente
    alignItems: 'flex-start', // Alinea todas las columnas al inicio
    maxWidth: '1200px',
    margin: '0 auto',
    gap: '20px',
  },
  column: {
    flex: '1 1 300px',
    textAlign: 'center', // Centra el contenido
    marginBottom: '20px',
  },
  socialColumn: {
    flex: '0 0 auto', // Evita que ocupe demasiado espacio
    alignSelf: 'flex-start', // Asegura que las redes sociales estén al inicio
    textAlign: 'right', // Alinea el contenido al lado derecho
  },
  sucursalesContainer: {
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)', // Dos columnas iguales
    gap: '20px',
    textAlign: 'center',
  },
  sucursal: {
    fontSize: '16px',
    lineHeight: '1.5',
  },
  title: {
    fontSize: '18px',
    fontWeight: 'bold',
    marginBottom: '10px',
    textAlign: 'center',
  },
  list: {
    listStyle: 'none', // Elimina los puntos de las listas
    padding: 0,
    margin: 0,
    textAlign: 'center', // Centra la lista dentro de la columna
  },
  link: {
    color: '#000000',
    textDecoration: 'none',
    cursor: 'pointer',
    fontSize: '18px',
    fontWeight: 'bold',
    display: 'block', // Hace que cada enlace ocupe una línea
  },
  correo: {
    fontSize: '16px',
    marginTop: '5px',
    textAlign: 'center', // Centra el texto del correo
    color: '#000000',
  },
  logo: {
    width: '150px',
    marginBottom: '10px',
  },
  slogan: {
    fontSize: '14px',
    fontStyle: 'italic',
    marginBottom: '10px',
  },
  icon: {
    width: '30px',
    height: 'auto',
    marginRight: '5px',
  },
};

export default Contacto;
