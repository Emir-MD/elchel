import React from 'react';

const MenuSection = () => {
  const dishes = [
    { name: 'Chilaquiles con Pollo', price: '$97.00 MXN' },
    { name: 'Chilaquiles con Bistec', price: '$103.00 MXN' },
    { name: 'Enchiladas Rellenas', price: '$102.00 MXN' },
  ];

  return (
    <section style={styles.menuSection}>
      <h3>Platillos Destacados</h3>
      <div style={styles.menuGrid}>
        {dishes.map((dish, index) => (
          <div key={index} style={styles.card}>
            <h4>{dish.name}</h4>
            <p>{dish.price}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

const styles = {
  menuSection: {
    padding: '20px',
    textAlign: 'center',
  },
  menuGrid: {
    display: 'flex',
    justifyContent: 'center',
    gap: '15px',
  },
  card: {
    padding: '10px',
    border: '1px solid #ccc',
    borderRadius: '5px',
    width: '150px',
    backgroundColor: '#f8f9fa',
  },
};

export default MenuSection;
