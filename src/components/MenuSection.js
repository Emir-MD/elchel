import React from 'react';
import styled from 'styled-components';

const MenuSection = () => {
  const dishes = [
    { 
      name: 'Orden de cochinita', 
      description: 'Deliciosa cochinita pibil preparada al estilo tradicional yucateco, acompañada de cebolla morada y tortillas.', 
      image: '/img/panuchos.jpg' // Ruta absoluta desde public
    },
    { 
      name: 'Paella', 
      description: 'Paella española con una combinación de mariscos, pollo y verduras, preparada con especias auténticas.', 
      image: '/img/Menuelchel/paella.JPG' // Ruta absoluta desde public
    },
    { 
      name: 'Tacos de relleno negro',  
      description: 'Tacos con relleno negro, un guiso tradicional de la península de Yucatán, servido con tortillas frescas.', 
      image: '/img/rollonegro.jpg' // Ruta absoluta desde public
    },
  ];

  return (
    <StyledMenuSection>
      <h3 className="title">Platillos Destacados</h3>
      <div className="menuGrid">
        {dishes.map((dish, index) => (
          <div key={index} className="card">
            <img 
              src={dish.image} 
              alt={dish.name} 
              className="image" 
            />
            <div className="cardContent">
              <h4 className="cardTitle">{dish.name}</h4>
              <p className="cardPrice">{dish.description}</p>
            </div>
          </div>
        ))}
      </div>
    </StyledMenuSection>
  );
};

const StyledMenuSection = styled.section`
  padding: 20px;
  background-color: white;
  color: #ff6f00;
  text-align: center;

  .title {
    font-size: 30px;
    margin-bottom: 20px;
  }

  .menuGrid {
    display: flex;
    justify-content: center;
    gap: 15px;
    flex-wrap: wrap;
    max-width: 1200px;
    margin: 0 auto;
  }

  .card {
    position: relative;
    width: 300px;
    height: 300px;
    background-color: #f2f2f2;
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    perspective: 1000px;
    box-shadow: 0 0 0 5px #ffffff80;
    transition: all 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275);

    &:hover {
      transform: scale(1.05);
      box-shadow: 0 8px 16px rgba(255, 255, 255, 0.2);
    }

    .image {
      width: 100%;
      height: 200px;
      object-fit: cover;
      border-radius: 5px;
      margin-bottom: 10px;
      transition: all 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    }

    .cardContent {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      padding: 20px;
      box-sizing: border-box;
      background-color: #f2f2f2;
      transform: rotateX(-90deg);
      transform-origin: bottom;
      transition: all 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    }

    &:hover .cardContent {
      transform: rotateX(0deg);
    }

    &:hover .image {
      transform: scale(0);
    }
  }

  .cardTitle {
    margin: 0;
    font-size: 18px;
    color: #333;
    font-weight: 700;
  }

  .cardPrice {
    margin: 10px 0 0;
    font-size: 16px;
    color: #777;
    line-height: 1.4;
    font-weight: bold;
  }
`;

export default MenuSection;
