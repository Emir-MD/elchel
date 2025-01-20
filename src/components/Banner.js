import React, { useState, useEffect } from 'react';

const Banner = () => {
  // Lista de rutas de imágenes en la carpeta public
  const images = [
    '/img/Menuelchel/redes oficiales.png', // Puedes agregar más imágenes aquí
    '/img/Menuelchel/paquetefinal.png', // Asegúrate de que esta ruta sea correcta
    '/img/Menuelchel/2x1.png', // Puedes agregar más imágenes aquí
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [showDetails, setShowDetails] = useState(false); // Controla si se muestra la información adicional

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
      <div
        style={styles.leftSide}
        onMouseEnter={() => setShowDetails(true)}
        onMouseLeave={() => setShowDetails(false)}
      >
        <h1 style={styles.text}>EL CHEL</h1>
        <p style={styles.subText}>
          EL ENCANTADOR DE ESTÓMAGOS
          <span
            style={{
              ...styles.details,
              opacity: showDetails ? 1 : 0,
              transform: showDetails ? 'translateY(0)' : 'translateY(20px)',
            }}
          >
            <br />
            El Chel es un restaurante en la Ciudad de México que destaca por su
            deliciosa comida yucateca, como la cochinita pibil y la sopa de
            lima. Con un ambiente familiar y acogedor, es ideal para disfrutar
            de auténticos sabores tradicionales. ¡Visítanos en Tlalpan y vive
            una experiencia única!
          </span>
        </p>
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
                transition: 'transform 1s ease-in-out',
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
    backgroundColor: '#fff',
  },
  leftSide: {
    flex: '1',
    textAlign: 'center',
    margin: '0 auto',
    position: 'relative',
    transition: 'all 0.3s ease',
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
    lineHeight: '1.5',
    position: 'relative',
  },
  details: {
    display: 'inline-block',
    fontSize: 'clamp(0.9rem, 2vw, 1.2rem)',
    color: '#555',
    lineHeight: '1.5',
    marginTop: '10px',
    transition: 'all 0.5s ease',
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
    maxWidth: '1500px',
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
    width: '110%',
    height: '100%',
    objectFit: 'contain',
  },
};

export default Banner;
