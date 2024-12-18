import React from 'react';
import promo from '../img/promo.png'; // Imagen de promoción
import whatsappIcon from '../img/Whatsapp.jpg'; // Imagen JPG de WhatsApp

const BannerPromocional = () => {
  return (
    <section style={styles.banner}>
      <div style={styles.textContainer}>
        <h2 style={styles.mainText}>¡EL CHEL MÁS CERCA DE TI!</h2>
        <p style={styles.subText}>Escríbenos y haz tu pedido para llevar o a domicilio</p>
        <a
          href="https://wa.me/7771861658" // Número de WhatsApp
          target="_blank"
          rel="noopener noreferrer"
          style={styles.callToAction}
        >
          <img src={whatsappIcon} alt="WhatsApp" style={styles.icon} />
          LLÁMANOS YA
        </a>
      </div>
      <div style={styles.imageContainer}>
        <img
          src={promo} // Imagen promocional
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
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '30px',
    background: 'linear-gradient(to bottom, #ff9800, #ff6f00)', // Fondo degradado naranja
    boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.3)', // Sombra para profundidad
    fontFamily: '"Arial", sans-serif',
    borderRadius: '10px', // Bordes suaves para el banner
  },
  textContainer: {
    textAlign: 'center',
    flex: 1,
    color: '#fff',
  },
  mainText: {
    fontSize: '3rem', // Título más grande
    fontWeight: 'bold',
    marginBottom: '10px',
    textShadow: '2px 2px 5px rgba(0, 0, 0, 0.5)', // Sombra para resaltar
  },
  subText: {
    fontSize: '1.8rem', // Subtítulo más grande
    marginBottom: '20px',
  },
  callToAction: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '10px',
    backgroundColor: '#25d366', // Verde WhatsApp
    color: '#fff',
    textDecoration: 'none',
    padding: '10px 20px',
    borderRadius: '5px',
    fontWeight: 'bold',
    fontSize: '1.2rem',
    boxShadow: '0 2px 5px rgba(0,0,0,0.2)',
  },
  icon: {
    width: '30px',
    height: '30px',
  },
  imageContainer: {
    flex: 1,
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center',
    height: '100%',
  },
  image: {
    width: '50%', // Imagen ocupa todo el ancho
    height: '50%', // Imagen ocupa toda la altura
    objectFit: 'cover', // Asegura que la imagen cubra todo el contenedor
    borderRadius: '10px', // Bordes suaves para la imagen
  },
};

export default BannerPromocional;
