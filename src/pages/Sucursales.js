import React from 'react';
import Footer from '../components/Contacto';

const Sucursales = () => {
  const sucursales = [
    {
      id: 1,
      nombre: "Matriz",
      direccion: "Av. División del Nte. 4405, Coapa, Ex de San Juan de Dios, Tlalpan, CDMX",
      horario: "Lunes a Domingo: 8 AM - 10 PM",
      telefono: "55 6603 0293",
      whatsapp: "55 7511 0551",
       mapsLink: "https://www.google.com/maps/place/El+Chel/@19.294668,-99.1413122,16z/data=!3m1!5s0x85ce01a70754d223:0x3809b5d7d88c2cdd!4m10!1m2!2m1!1sel+chel!3m6!1s0x85ce01a7aa008ad5:0x6cfc1eebd37d3b2a!8m2!3d19.294668!4d-99.131785!15sCgdlbCBjaGVsWgkiB2VsIGNoZWySARJtZXhpY2FuX3Jlc3RhdXJhbnTgAQA!16s%2Fg%2F1tw1f4wl?entry=ttu&g_ep=EgoyMDI1MDExMC4wIKXMDSoASAFQAw%3D%3D",
      imagen: "/img/suc1.png"
    },
    {
      id: 2,
      nombre: "Cuemanco",
      direccion: "Cañaverales 39, Coapa, Magisterial, Tlalpan, CDMX",
      horario: "Lunes a Domingo: 8 AM - 10 PM",
      telefono: "55 9278 4907",
      whatsapp: "55 7181 0812",
      // mapsLink: "https://www.google.com/maps/place/Cuemanco",
      // imagen: "/img/cuemanco.png"
    },
    {
      id: 3,
      nombre: "Mercado Villa Coapa",
      direccion: "Av. Canal De Miramontes S/N, Local 59, Tlalpan, CDMX",
      horario: "Lunes a Domingo: 8 AM - 10 PM",
      telefono: "55 5671 3059",
      // mapsLink: "https://www.google.com/maps/place/Mercado+Villa+Coapa",
      // imagen: "/img/mercado-villa-coapa.png"
    },
    {
      id: 4,
      nombre: "Club de Golf",
      direccion: "Miguel Hidalgo Esq. C. Club de Golf, Arenal Tepepan, Tlalpan, CDMX",
      horario: "Lunes a Domingo: 8 AM - 10 PM",
      telefono: "55 4958 0070",
      // mapsLink: "https://www.google.com/maps/place/Club+de+Golf",
      // imagen: "/img/club-de-golf.png"
    },
    {
      id: 5,
      nombre: "San Jerónimo Totalplay",
      direccion: "Av. San Jerónimo 252, Tizapán San Ángel, La Otra Banda, Coyoacán, CDMX",
      horario: "Lunes a Domingo: 8 AM - 10 PM",
      telefono: "55 6234 1811",
      // mapsLink: "https://www.google.com/maps/place/San+Jerónimo+Totalplay",
      // imagen: "/img/san-jeronimo.png"
    },
    {
      id: 6,
      nombre: "Mercado de la Paz - La Casa del Frijol",
      direccion: "Centro Histórico de Tlalpan, Local 35 y 36, Tlalpan Centro, CDMX",
      horario: "Lunes a Domingo: 8 AM - 10 PM",
      telefono: "55 6234 1811",
      mapsLink: "https://www.google.com/maps/place/Mercado+de+la+Paz",
      // imagen: "/img/mercado-de-la-paz.png"
    }
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
    display: 'block',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
};

export default Sucursales;
