import React from 'react';

const MenuSection = () => {
  const dishes = [
    { 
      name: 'Orden de cochinita', 
      price: '$97.00 MXN', 
      image: '/img/orden.jpg' // Ruta absoluta desde public
    },
    { 
      name: 'Paella', 
      price: '$103.00 MXN', 
      image: '/img/paella.jpg' // Ruta absoluta desde public
    },
    { 
      name: 'Tacos de relleno negro',  
      price: '$102.00 MXN', 
      image: '/img/rollonegro.jpg' // Ruta absoluta desde public
    },
  ];

  return (
    <section style={styles.menuSection}>
      <h3 style={styles.title}>Platillos Destacados</h3>
      <div style={styles.menuGrid}>
        {dishes.map((dish, index) => (
          <div key={index} style={styles.card}>
            <img 
              src={dish.image} 
              alt={dish.name} 
              style={styles.image} 
            />
            <h4 style={styles.cardTitle}>{dish.name}</h4>
            <p style={styles.cardPrice}>{dish.price}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

const styles = {
  menuSection: {
    padding: '20px',
    backgroundColor: 'white',
    color: '#ff6f00',
    textAlign: 'center',
    width: '100%', // Asegura que la sección ocupe el ancho completo
    margin: '0 auto',
  },
  title: {
    fontSize: '24px',
    marginBottom: '20px',
  },
  menuGrid: {
    display: 'flex',
    justifyContent: 'center',
    gap: '15px',
    flexWrap: 'wrap',
    maxWidth: '1200px', // Límite para tarjetas, opcional
    margin: '0 auto', // Centrado del grid
  },
  card: {
    padding: '15px',
    border: '2px solid #ff6f00',
    borderRadius: '8px',
    width: '180px',
    backgroundColor: '#fff',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    textAlign: 'center',
  },
  image: {
    width: '100%',
    height: '120px',
    objectFit: 'cover',
    borderRadius: '5px',
    marginBottom: '10px',
  },
  cardTitle: {
    fontSize: '18px',
    marginBottom: '10px',
  },
  cardPrice: {
    fontSize: '16px',
    fontWeight: 'bold',
  },
};

export default MenuSection;
