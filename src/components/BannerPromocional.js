import React from 'react';
import styled from 'styled-components';

const BannerPromocional = () => {
  return (
    <section style={styles.banner}>
      <div style={styles.textContainer}>
        <h2 style={styles.mainText}>¡EL CHEL MÁS CERCA DE TI!</h2>
        <p style={styles.subText}>Escríbenos y haz tu pedido para llevar o a domicilio</p>
        <div style={styles.buttonContainer}>
          <StyledWrapper>
            <button onClick={() => window.open('https://wa.me/7771861658', '_blank')}>
              LLÁMANOS YA
            </button>
          </StyledWrapper>
        </div>
      </div>
    </section>
  );
};

const StyledWrapper = styled.div`
  button {
    position: relative;
    padding: 10px 20px;
    border-radius: 7px;
    border: 1px solid rgb(255, 123, 0);
    font-size: 14px;
    text-transform: uppercase;
    font-weight: 600;
    letter-spacing: 2px;
    background: transparent;
    color: #fff;
    overflow: hidden;
    box-shadow: 0 0 0 0 transparent;
    transition: all 0.2s ease-in;
  }

  button:hover {
    background: rgb(255, 162, 0);
    box-shadow: 0 0 30px 5px rgba(253, 122, 0, 0.81);
    transition: all 0.2s ease-out;
  }

  button:hover::before {
    animation: sh02 0.5s 0s linear;
  }

  button::before {
    content: '';
    display: block;
    width: 0px;
    height: 86%;
    position: absolute;
    top: 7%;
    left: 0%;
    opacity: 0;
    background: #fff;
    box-shadow: 0 0 50px 30px #fff;
    transform: skewX(-20deg);
  }

  @keyframes sh02 {
    from {
      opacity: 0;
      left: 0%;
    }
    50% {
      opacity: 1;
    }
    to {
      opacity: 0;
      left: 100%;
    }
  }

  button:active {
    box-shadow: 0 0 0 0 transparent;
    transition: box-shadow 0.2s ease-in;
  }
`;

const styles = {
  banner: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '1rem',
    fontFamily: '"Arial", sans-serif',
    width: '98%',
    maxWidth: '98%',
    margin: '0 auto',
    height: 'auto',
    borderRadius: '10px',
    marginTop: '140px',
    overflow: 'hidden',
    backgroundImage: 'radial-gradient(circle, orange, transparent 20%, orangered)',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundColor: 'orange',
    boxShadow: '0px 2px 5px rgba(0, 0, 0, 0.2)',
  },
  textContainer: {
    textAlign: 'center',
    color: '#fff',
    padding: '0 1rem',
    width: '100%',
  },
  mainText: {
    fontSize: 'clamp(1.5rem, 4vw, 2.5rem)',
    fontWeight: 'bold',
    marginBottom: '0.5rem',
    textShadow: `
      -1px -1px 0 #000,  
       1px -1px 0 #000,  
      -1px  1px 0 #000,  
       1px  1px 0 #000`,
  },
  subText: {
    fontSize: 'clamp(1rem, 3vw, 1.2rem)',
    marginBottom: '1rem',
    textShadow: `
      -1px -1px 0 #000,  
       1px -1px 0 #000,  
      -1px  1px 0 #000,  
       1px  1px 0 #000`,
  },
  buttonContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  '@media (max-width: 768px)': {
    banner: {
      marginTop: '100px',
      padding: '0.5rem',
    },
    mainText: {
      fontSize: '1.5rem',
    },
    subText: {
      fontSize: '1rem',
    },
  },
  '@media (max-width: 480px)': {
    banner: {
      marginTop: '50px',
    },
    mainText: {
      fontSize: '1.2rem',
    },
    subText: {
      fontSize: '0.9rem',
    },
  },
};

export default BannerPromocional;
