import React from 'react';

const BannerPromocional = () => {
  return (
    <section style={styles.banner}>
      <div style={styles.textContainer}>
        <h2 style={styles.mainText}>¡EL CHEL MÁS CERCA DE TI!</h2>
        <p style={styles.subText}>Escríbenos y haz tu pedido para llevar o a domicilio</p>
        <a
          href="https://wa.me/7771861658"
          target="_blank"
          rel="noopener noreferrer"
          style={styles.callToAction}
        >
          <img
            src="/img/Whatsapp.jpg" // Ruta absoluta para la imagen de WhatsApp
            alt="WhatsApp"
            style={styles.icon}
          />
          LLÁMANOS YA
        </a>
      </div>
      <div style={styles.imageContainer}>
        <img
          src="/img/promo.png" // Ruta absoluta para la imagen de promoción
          alt="Promoción"
          style={styles.image}
        />
      </div>
    </section>
  );
};

const styles = {
  banner: {
    display: 'flex',
    flexDirection: 'column', // Vertical en pantallas pequeñas
    alignItems: 'center',
    justifyContent: 'center',
    padding: '2rem 1rem',
    background: 'linear-gradient(to bottom, #ff9800, #ff6f00)',
    boxShadow: '0px 2px 5px rgba(0, 0, 0, 0.2)',
    fontFamily: '"Arial", sans-serif',
    width: '100%',
    maxWidth: '100vw', // Asegura que no haya desbordamiento horizontal
    margin: '0 auto',
    gap: '1.5rem', // Espaciado uniforme entre elementos
    borderRadius: '10px',
    overflow: 'hidden',
  },
  textContainer: {
    textAlign: 'center',
    color: '#fff',
    padding: '0 1rem',
  },
  mainText: {
    fontSize: 'clamp(1.8rem, 5vw, 2.5rem)',
    fontWeight: 'bold',
    marginBottom: '1rem',
  },
  subText: {
    fontSize: 'clamp(1rem, 3vw, 1.2rem)',
    marginBottom: '1rem',
  },
  callToAction: {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#25d366',
    color: '#fff',
    textDecoration: 'none',
    padding: '0.8rem 1.5rem', // Botón más grande
    borderRadius: '8px',
    fontWeight: 'bold',
    fontSize: 'clamp(1rem, 2vw, 1.2rem)',
    boxShadow: '0 2px 5px rgba(0, 0, 0, 0.2)',
    gap: '0.5rem',
    marginTop: '1rem',
  },
  icon: {
    width: 'clamp(20px, 4vw, 24px)',
    height: 'clamp(20px, 4vw, 24px)',
  },
  imageContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    padding: '0', // Elimina padding extra
  },
  image: {
    width: 'clamp(250px, 90%, 500px)', // Ajuste dinámico
    height: 'auto',
    objectFit: 'cover',
    borderRadius: '10px',
  },
  '@media (min-width: 768px)': {
    banner: {
      flexDirection: 'row', // Cambia a horizontal en pantallas medianas
      padding: '3rem 2rem',
      gap: '2rem',
    },
    textContainer: {
      textAlign: 'left',
      flex: 1, // Toma la mitad del espacio
    },
    imageContainer: {
      flex: 1, // Toma la otra mitad
    },
    image: {
      width: 'clamp(300px, 80%, 600px)', // Imagen más grande en pantallas amplias
    },
  },
};

// Solución global para el body y html
document.body.style.margin = '0'; // Elimina márgenes globales
document.body.style.padding = '0'; // Elimina padding global
document.body.style.overflowX = 'hidden'; // Previene desbordamiento horizontal globalmente
document.documentElement.style.margin = '0'; // Ajusta el html también
document.documentElement.style.padding = '0';
document.documentElement.style.overflowX = 'hidden';

export default BannerPromocional;
