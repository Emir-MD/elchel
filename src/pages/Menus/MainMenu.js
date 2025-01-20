import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const MainMenu = () => {
  const [showOptions, setShowOptions] = useState(false); // Estado para mostrar las opciones
  const navigate = useNavigate();

  const toggleOptions = () => {
    setShowOptions(!showOptions); // Alterna el estado
  };

  return (
    <div style={styles.page}>
      <div style={styles.container}>
        <img src="/img/Menuelchel/chel logo.png" alt="Logo" style={styles.logo} /> {/* Ruta absoluta */}
        <h1 style={styles.title}>Bienvenido</h1>
        {!showOptions && (
          <button style={styles.button} onClick={toggleOptions}>
            Ver Menús
          </button>
        )}
        {showOptions && (
          <div style={styles.optionsContainer}>
            <button
              style={styles.optionButton}
              onClick={() => navigate('/menuMesa')}
            >
              Menú de Mesa
            </button>
            <button
              style={styles.optionButton}
              onClick={() => navigate('/MenuParaLlevar')}
            >
              Menú de Pedidos
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

const styles = {
  page: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-start',
    height: '100vh',
    backgroundColor: '#FFFFFF',
    paddingTop: '100px',
  },
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: '100px', // Añadido para evitar superposición con el Navbar

    justifyContent: 'center',
    width: '400px',
    background: 'linear-gradient(to bottom, #ff9800, #ff6f00)',
    borderRadius: '10px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
    padding: '20px',
    overflow: 'hidden', // Evita el desbordamiento de contenido
  },
  logo: {
    width: '300px',
    height: 'auto',
    marginBottom: '20px',
  },
  title: {
    fontSize: '40px',
    color: '#FFFFFF',
    marginBottom: '20px',
  },
  button: {
    padding: '16px 20px',
    fontSize: '20px',
    backgroundColor: '#FFFFFF',
    color: '#FF8C00',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)',
  },
  optionsContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    animation: 'slideDown 0.5s ease-in-out', // Animación CSS
  },
  optionButton: {
    padding: '12px 20px',
    fontSize: '18px',
    backgroundColor: '#FFFFFF',
    color: '#FF8C00',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)',
    margin: '10px 0',
  },
};

// Animación CSS
const slideDownStyle = document.createElement('style');
slideDownStyle.innerHTML = `
@keyframes slideDown {
  from {
    opacity: 0;
    transform: translateY(-20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
`;
document.head.appendChild(slideDownStyle);

export default MainMenu;
