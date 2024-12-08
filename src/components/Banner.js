import React from 'react';

const Banner = () => {
  return (
    <section style={styles.banner}>
      <h2>¡Bienvenido a Restaurante!</h2>
      <p>Delicias para todos los gustos</p>
    </section>
  );
};

const styles = {
  banner: {
    textAlign: 'center',
    padding: '50px',
    backgroundColor: '#52b788',
    color: 'white',
  },
};

export default Banner;
