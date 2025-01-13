import React, { useState, useEffect } from 'react';

const Banner = () => {
  // Lista de imágenes con rutas absolutas desde public
  const images = [
    '/img/paquetet.jpg',
    '/img/miercoles.jpg',
    '/img/paega.jpg',
    '/img/promos.png',
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // Cambia la imagen automáticamente cada 3 segundos
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div style={styles.container}>
      {/* Lado Izquierdo: Texto */}
      <div style={styles.leftSide}>
        <h1 style={styles.text}>EL CHEL</h1>
        <p style={styles.subText}>EL ENCANTADOR DE ESTÓMAGOS</p>
      </div>

      {/* Lado Derecho: Slider */}
      <div style={styles.rightSide}>
        <div style={styles.slider}>
          {images.map((image, index) => (
            <div
              key={index}
              style={{
                ...styles.slide,
                transform: `translateX(${(index - currentIndex) * 100}%)`,
                transition: 'transform 0.8s ease-in-out',
              }}
            >
              <img
                src={image}
                alt={`Promoción ${index + 1}`}
                style={styles.image}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    width: '100%',
    padding: '2%',
    border: '3px solid #ff5722',
    borderRadius: '10px',
    boxSizing: 'border-box',
  },
  leftSide: {
    flex: '1',
    textAlign: 'center',
    margin: '0 auto',
  },
  text: {
    fontSize: 'clamp(1.5rem, 4vw, 3rem)',
    fontWeight: 'bold',
    color: '#ff5722',
    marginBottom: '10px',
  },
  subText: {
    fontSize: 'clamp(1rem, 2.5vw, 1.5rem)',
    color: '#333',
  },
  rightSide: {
    flex: '1',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  },
  slider: {
    position: 'relative',
    width: '100%',
    maxWidth: '600px',
    aspectRatio: '16 / 9',
    overflow: 'hidden',
    borderRadius: '10px',
  },
  slide: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: '100%',
    height: '100%',
    objectFit: 'contain',
  },
};

export default Banner;
