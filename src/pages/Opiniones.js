import React, { useState } from 'react';

const Opiniones = () => {
  // eslint-disable-next-line no-unused-vars
  const [opiniones, setOpiniones] = useState([
    {
      fecha: 'Hace 9 meses',
      titulo: 'Excelente pozole',
      descripcion: 'Excelente comida mexicana a pesar de ser una cadena grande los sabores son exquisitos y los locales mantienen el lugar siempre lleno.',
      estrellas: 5,
    },
    {
      fecha: 'Hace 1 año',
      titulo: 'Buena experiencia en El Chel',
      descripcion: 'Muy buena comida, barata y el servicio es muy rápido. Recomiendo ampliamente.',
      estrellas: 4,
    },
    {
      fecha: 'Hace 2 años',
      titulo: '100% recomendable',
      descripcion: 'El Chel es espectacular en todo, calidad y sazón de alimentos, personal muy calificado y amable.',
      estrellas: 5,
    },
    {
      fecha: 'Hace 3 meses',
      titulo: 'Delicioso y rápido',
      descripcion: 'El servicio fue muy rápido y la comida deliciosa. Definitivamente regresaré.',
      estrellas: 5,
    },
    {
      fecha: 'Hace 6 meses',
      titulo: 'Buen precio y calidad',
      descripcion: 'Precios justos y excelente sabor en todos los platillos. Altamente recomendable.',
      estrellas: 4,
    },
    {
      fecha: 'Hace 1 semana',
      titulo: 'Me encanta',
      descripcion: 'La cochinita es mi favorita. El lugar está limpio y el personal es muy amable.',
      estrellas: 5,
    },
  ]);

  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + opiniones.length) % opiniones.length);
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % opiniones.length);
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Opiniones de Nuestros Clientes</h1>
      <div style={styles.sliderWrapper}>
        <button onClick={handlePrev} style={{ ...styles.navButton, ...styles.navButtonLeft }}>&lt;</button>
        <div style={styles.sliderContainer}>
          <div
            style={{
              ...styles.slider,
              transform: `translateX(-${currentIndex * 100}%)`,
            }}
          >
            {opiniones.map((opinion, index) => (
              <div key={index} style={styles.opinionCard}>
                <p style={styles.fecha}>{opinion.fecha}</p>
                <h2 style={styles.titulo}>{opinion.titulo}</h2>
                <p style={styles.descripcion}>{opinion.descripcion}</p>
                <div style={styles.estrellas}>{'★'.repeat(opinion.estrellas)}</div>
              </div>
            ))}
          </div>
        </div>
        <button onClick={handleNext} style={{ ...styles.navButton, ...styles.navButtonRight }}>&gt;</button>
      </div>
    </div>
  );
};

const styles = {
  container: {
    padding: '10px',
    fontFamily: 'Arial, sans-serif',
    textAlign: 'center',
    background: 'linear-gradient(to bottom, #ff9800, #ff6f00)', // Fondo degradado
    minHeight: 'auto',
  },
  title: {
    fontSize: '1.5rem',
    color: '#fff',
    marginBottom: '15px',
  },
  sliderWrapper: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
    marginBottom: '15px',
  },
  sliderContainer: {
    width: '70%',
    overflow: 'hidden',
  },
  slider: {
    display: 'flex',
    transition: 'transform 0.5s ease-in-out',
  },
  opinionCard: {
    width: '200px',
    margin: '0 5px',
    border: '1px solid #ddd',
    borderRadius: '8px',
    padding: '10px',
    boxShadow: '0 2px 5px rgba(0,0,0,0.1)',
    backgroundColor: '#fff',
    textAlign: 'center',
  },
  fecha: {
    fontSize: '0.8rem',
    color: '#555',
    marginBottom: '5px',
  },
  titulo: {
    fontSize: '1rem',
    color: '#333',
    marginBottom: '8px',
  },
  descripcion: {
    fontSize: '0.9rem',
    color: '#666',
    marginBottom: '8px',
  },
  estrellas: {
    fontSize: '1rem',
    color: '#FFD700',
  },
  navButton: {
    backgroundColor: '#FFA726',
    color: '#fff',
    border: 'none',
    padding: '8px 12px',
    cursor: 'pointer',
    borderRadius: '5px',
    fontSize: '0.8rem',
    position: 'absolute',
    top: '50%',
    transform: 'translateY(-50%)',
  },
  navButtonLeft: {
    left: '-20px',
  },
  navButtonRight: {
    right: '-20px',
  },
  '@media (max-width: 768px)': {
    sliderContainer: {
      width: '80%',
    },
    opinionCard: {
      width: '160px',
    },
    navButton: {
      padding: '6px 8px',
    },
  },
  '@media (max-width: 480px)': {
    title: {
      fontSize: '1.2rem',
    },
    opinionCard: {
      width: '140px',
    },
    navButton: {
      padding: '5px 7px',
    },
  },
};

export default Opiniones;
