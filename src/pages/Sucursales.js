import React from 'react';
import Footer from '../components/Contacto';
import suc1 from '../img/suc1.png';
import suc2 from '../img/suc2.png';

const Sucursales = () => {
  const sucursales = [
    {
      id: 1,
      nombre: 'Cañaverales 39',
      direccion: 'Cañaverales 39, Coapa, Magisterial, Tlalpan, 14330 Ciudad de México, CDMX',
      horario: 'Lunes a Domingo: 8 AM - 10 PM',
      telefono: '55 9278 4907',
      mapsLink: 'https://www.google.com/maps/place/El+Chel/@19.2946679,-99.1366559,17z/data=!3m1!5s0x85ce01a70754d223:0x3809b5d7d88c2cdd!4m7!3m6!1s0x85ce01a7aa008ad5:0x6cfc1eebd37d3b2a!8m2!3d19.294668!4d-99.131785!10e1!16s%2Fg%2F1tw1f4wl?entry=ttu',
      imagen: suc1,
    },
    {
      id: 2,
      nombre: 'Av. División del Nte.',
      direccion: 'Av. División del Nte. 4405, Coapa, Ex de San Juan de Dios, Tlalpan, 14357 Tlalpan, CDMX',
      horario: 'Lunes a Domingo: 8 AM - 10 PM',
      telefono: '55 9278 4907',
      mapsLink: 'https://www.google.com/maps/place/El+Chel/@19.294668,-99.1343599,17z/data=!3m2!4b1!5s0x85ce01a70754d223:0x3809b5d7d88c2cdd!4m6!3m5!1s0x85ce01a7aa008ad5:0x6cfc1eebd37d3b2a!8m2!3d19.294668!4d-99.131785!16s%2Fg%2F1tw1f4wl?entry=ttu&g_ep=EgoyMDI0MTIxMS4wIKXMDSoASAFQAw%3D%3D',
      imagen: suc2,
    },
  ];

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Nuestras Sucursales</h1>
      <div style={styles.sucursalList}>
        {sucursales.map((sucursal) => (
          <div key={sucursal.id} style={styles.card}>
            <h2 style={styles.cardTitle}>{sucursal.nombre}</h2>
            <p style={styles.cardText}><strong>Dirección:</strong> {sucursal.direccion}</p>
            <p style={styles.cardText}><strong>Horario:</strong> {sucursal.horario}</p>
            <p style={styles.cardText}><strong>Teléfono:</strong> {sucursal.telefono}</p>
            <a href={sucursal.mapsLink} target="_blank" rel="noopener noreferrer">
              <img src={sucursal.imagen} alt={sucursal.nombre} style={styles.image} />
            </a>
            <a
              href={sucursal.mapsLink}
              target="_blank"
              rel="noopener noreferrer"
              style={styles.mapLink}
            >
              Ver en Google Maps
            </a>
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
};

const styles = {
  container: {
    width: '100%',
    padding: '1.5rem',
    fontFamily: '"Arial", sans-serif',
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: '2rem',
    color: '#ff6f00',
    textAlign: 'center',
    marginBottom: '1rem',
  },
  sucursalList: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1.5rem',
    alignItems: 'center',
  },
  card: {
    padding: '1rem',
    background: 'linear-gradient(to bottom, #ff9800, #ff6f00)', 
    borderRadius: '8px',
    boxShadow: '0 2px 4px rgba(186, 1, 1, 0.95)',
    width: '90%',
    maxWidth: '600px',
    textAlign: 'left',
  },
  cardTitle: {
    fontSize: '1.5rem',
    color: '#000000',
    marginBottom: '0.5rem',
  },
  cardText: {
    fontSize: '1rem',
    color: '#000000',
    marginBottom: '0.5rem',
  },
  mapLink: {
    color: 'blue',
    textDecoration: 'none',
    fontWeight: 'bold',
    fontSize: '1rem',
  },
  image: {
    width: '80%',
    height: 'auto',
    borderRadius: '8px',
    marginTop: '0.5rem',
    display: 'block', // Asegura que la imagen se comporte como un bloque
    marginLeft: 'auto', // Centra horizontalmente
    marginRight: 'auto', // Centra horizontalmente
  },
  
};

export default Sucursales;
