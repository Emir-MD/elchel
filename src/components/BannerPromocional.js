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
    flexDirection: 'column', // Alinea los elementos verticalmente en móviles
    alignItems: 'center',
    justifyContent: 'center',
    padding: '1rem',
    background: 'linear-gradient(to bottom, #ff9800, #ff6f00)', // Fondo degradado
    boxShadow: '0px 2px 5px rgba(0, 0, 0, 0.2)',
    fontFamily: '"Arial", sans-serif',
    width: '100%',
    margin: '0 auto',
    height: 'auto', // Permite que la altura se ajuste al contenido
    borderRadius: '10px',
    overflow: 'hidden',
    gap: '1rem', // Espaciado uniforme entre elementos
  },
  textContainer: {
    textAlign: 'center', // Centra el texto
    color: '#fff',
    padding: '0 1rem',
  },
  mainText: {
    fontSize: 'clamp(1.5rem, 4vw, 2.5rem)', // Tamaño dinámico del título
    fontWeight: 'bold',
    marginBottom: '0.5rem',
  },
  subText: {
    fontSize: 'clamp(1rem, 3vw, 1.2rem)', // Tamaño dinámico del subtítulo
    marginBottom: '1rem',
  },
  callToAction: {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center', // Centra el contenido del botón
    backgroundColor: '#25d366',
    color: '#fff',
    textDecoration: 'none',
    padding: '0.5rem 1rem',
    borderRadius: '5px',
    fontWeight: 'bold',
    fontSize: 'clamp(0.8rem, 2vw, 1rem)', // Tamaño adaptativo
    boxShadow: '0 2px 3px rgba(0, 0, 0, 0.2)',
    gap: '0.5rem',
  },
  icon: {
    width: 'clamp(16px, 4vw, 20px)', // Tamaño dinámico del ícono
    height: 'clamp(16px, 4vw, 20px)',
  },
  imageContainer: {
    display: 'flex',
    justifyContent: 'center', // Centra la imagen
    alignItems: 'center',
    width: '100%',
    padding: '1rem',
  },
  image: {
    width: 'clamp(200px, 80%, 400px)', // Tamaño dinámico de la imagen
    height: 'auto',
    objectFit: 'cover',
    borderRadius: '10px',
  },
};

export default BannerPromocional;