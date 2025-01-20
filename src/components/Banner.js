import React, { useState, useEffect } from 'react';

const Banner = () => {
  // Lista de imágenes con rutas absolutas desde public
  const images = [
    '/img/Menuelchel/pa.jpg',
    '/img/2000x1000.png',
 
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
  );
};

const styles = {
  slider: {
    position: 'relative',
    width: '100%',
    height: '100vh',
    overflow: 'hidden',
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
    objectFit: 'cover',
  },
};

export default Banner;
