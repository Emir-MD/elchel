import React from 'react';

const MenuSection = () => {
  const dishes = [
    { name: 'Chilaquiles con Pollo', price: '$97.00 MXN' },
    { name: 'Chilaquiles con Bistec', price: '$103.00 MXN' },
    { name: 'Enchiladas Rellenas', price: '$102.00 MXN' },
  ];

  return (
    <section style={styles.menuSection}>
      <h3 style={styles.title}>Platillos Destacados</h3>
      <div style={styles.menuGrid}>
        {dishes.map((dish, index) => (
          <div key={index} style={styles.card}>
            <h4 style={styles.cardTitle}>{dish.name}</h4>
            <p style={styles.cardPrice}>{dish.price}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

const styles = {
    borderBottom: '3px solid #f4a261', // Borde inferior naranja
  menuSection: {
    padding: '20px',
    backgroundColor: 'white', // Color naranja claro
    color: '#2d6a4f', // Texto verde oscuro
    textAlign: 'center',
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
  },
  card: {
    padding: '15px',
    border: '2px solid #2d6a4f', // Borde verde oscuro
    borderRadius: '8px',
    width: '180px',
    backgroundColor: '#fff', // Fondo blanco
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)', // Sombra sutil
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
