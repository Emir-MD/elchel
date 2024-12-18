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
            src={`${process.env.PUBLIC_URL}/img/Whatsapp.jpg`}
            alt="WhatsApp"
            style={styles.icon}
          />
          LLÁMANOS YA
        </a>
      </div>
      <div style={styles.imageContainer}>
        <img
          src={`${process.env.PUBLIC_URL}/img/promo.png`}
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
    boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.3)', // Sombra
    fontFamily: '"Arial", sans-serif',
    borderRadius: '10px',
  },
  textContainer: {
    textAlign: 'center',
    flex: 1,
    color: '#fff',
  },
  mainText: {
    fontSize: '3rem',
    fontWeight: 'bold',
    marginBottom: '10px',
    textShadow: '2px 2px 5px rgba(0, 0, 0, 0.5)',
  },
  subText: {
    fontSize: '1.8rem',
    marginBottom: '20px',
  },
  callToAction: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '10px',
    backgroundColor: '#25d366',
    color: '#fff',
    textDecoration: 'none',
    padding: '10px 20px',
    borderRadius: '5px',
    fontWeight: 'bold',
    fontSize: '1.2rem',
    boxShadow: '0 2px 5px rgba(0, 0, 0, 0.2)',
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
    width: '50%',
    height: '50%',
    objectFit: 'cover',
    borderRadius: '10px',
  },
};

export default BannerPromocional;
