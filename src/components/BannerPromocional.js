import React from 'react';
// Importa las imágenes desde la carpeta src/img
import whatsappImg from '../img/Whatsapp.jpg';
import promoImg from '../img/promo.png';

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
            src={whatsappImg}
            alt="WhatsApp"
            style={styles.icon}
          />
          LLÁMANOS YA
        </a>
      </div>
      <div style={styles.imageContainer}>
        <img
          src={promoImg}
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
    flexDirection: 'row', // Mantiene texto a la izquierda y la imagen a la derecha
    justifyContent: 'space-between', // Espacio máximo entre elementos
    alignItems: 'center',
    padding: '1rem 2rem', // Padding dinámico
    background: 'linear-gradient(to bottom, #ff9800, #ff6f00)',
    boxShadow: '0px 2px 5px rgba(0, 0, 0, 0.2)',
    fontFamily: '"Arial", sans-serif',
    width: '100%', // Ocupa el 100% del ancho disponible
    margin: '0 auto',
    height: 'clamp(250px, 35vw, 350px)', // Altura adaptativa basada en el ancho de la pantalla
    borderRadius: '10px', // Bordes redondeados
    overflow: 'hidden', // Evita desbordamientos
  },
  textContainer: {
    flex: '1', // Ocupa espacio restante a la izquierda
    textAlign: 'left', // Alineado a la izquierda
    color: '#fff',
    padding: '0 1rem',
  },
  mainText: {
    fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)', // Tamaño dinámico del texto principal
    fontWeight: 'bold',
    marginBottom: '0.5rem',
  },
  subText: {
    fontSize: 'clamp(1rem, 2vw, 1.5rem)', // Tamaño dinámico del subtítulo
    marginBottom: '1rem',
  },
  callToAction: {
    display: 'inline-flex',
    alignItems: 'center',
    backgroundColor: '#25d366',
    color: '#fff',
    textDecoration: 'none',
    padding: '0.6rem 1.2rem',
    borderRadius: '5px',
    fontWeight: 'bold',
    fontSize: 'clamp(0.8rem, 1.5vw, 1rem)', // Tamaño adaptativo del texto del botón
    boxShadow: '0 2px 3px rgba(0, 0, 0, 0.2)',
    gap: '0.3rem',
  },
  icon: {
    width: 'clamp(12px, 2vw, 16px)', // Tamaño dinámico del icono
    height: 'clamp(12px, 2vw, 16px)',
    marginRight: '0.5rem',
  },
  imageContainer: {
    flex: '0 1 50%', // Ajusta la imagen al 50% del ancho total
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingRight: '2%',
  },
  image: {
    width: '100%', // Imagen completamente responsiva
    maxWidth: 'clamp(300px, 50vw, 550px)', // Límite dinámico del tamaño máximo
    height: 'auto',
    objectFit: 'cover',
    borderRadius: '10px',
  },
};

export default BannerPromocional;
