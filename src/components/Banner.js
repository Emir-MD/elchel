import React, { useState, useEffect } from 'react';
import img1 from '../img/paquete.jpg';
import img2 from '../img/miercoles.jpg';
import img3 from '../img/paega.jpg';
import img4 from '../img/promos.png';

const Slider = () => {
  const images = [img1, img2, img3, img4];
  const [currentIndex, setCurrentIndex] = useState(0);

  // Cambia la imagen automáticamente cada segundo
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Cambia cada 1 segundo

    return () => clearInterval(interval); // Limpia el intervalo al desmontar el componente
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
                transition: 'transform 0.8s ease-in-out', // Suaviza el movimiento
              }}
            >
              <img src={image} alt={`Promoción ${index + 1}`} style={styles.image} />
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
      height: '350px', // Ocupa todo el alto de la pantalla
      backgroundColor: '#fff3e0',
      padding: '20px',
    },
    leftSide: {
      flex: 1, // Ocupa el lado izquierdo
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      textAlign: 'center',
    },
    text: {
      fontSize: '3rem',
      fontWeight: 'bold',
      color: '#ff5722',
      margin: 0,
    },
    subText: {
      fontSize: '1.5rem',
      color: '#333',
      margin: 0,
    },
    rightSide: {
      flex: 1, // Ocupa el lado derecho
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
    slider: {
      position: 'relative',
      width: '500px', // Ajusta el ancho del slider
      height: '4000px', // Ajusta el alto del slider
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
      objectFit: 'contain', // Muestra la imagen completa sin recortar
    },
  };
  

export default Slider;
