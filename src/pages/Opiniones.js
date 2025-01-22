import React, { useState } from 'react';
import styled from 'styled-components';

const Opiniones = () => {
  const [opiniones, setOpiniones] = useState([

    {
      fecha: new Date('2022-12-01'),
      titulo: 'Buena experiencia en El Chel',
      descripcion: 'Muy buena comida, barata y el servicio es muy rápido. Recomiendo ampliamente.',
      estrellas: 4,
    },
    {
      fecha: new Date('2021-10-15'),
      titulo: '100% recomendable',
      descripcion: 'El Chel es espectacular en todo, calidad y sazón de alimentos, personal muy calificado y amable.',
      estrellas: 5,
    },
    {
      fecha: new Date('2023-09-01'),
      titulo: 'Delicioso y rápido',
      descripcion: 'El servicio fue muy rápido y la comida deliciosa. Definitivamente regresaré.',
      estrellas: 5,
    },
    {
      fecha: new Date('2023-07-01'),
      titulo: 'Buen precio y calidad',
      descripcion: 'Precios justos y excelente sabor en todos los platillos. Altamente recomendable.',
      estrellas: 4,
    },
    {
      fecha: new Date('2023-12-01'),
      titulo: 'Me encanta',
      descripcion: 'La cochinita es mi favorita. El lugar está limpio y el personal es muy amable.',
      estrellas: 5,
    },
  ]);

  const getRelativeTime = (date) => {
    const now = new Date();
    const diff = Math.floor((now - date) / (1000 * 60 * 60 * 24)); // Diferencia en días
    if (diff < 1) return 'hoy';
    if (diff === 1) return 'hace 1 día';
    if (diff < 30) return `hace ${diff} días`;
    const months = Math.floor(diff / 30);
    if (months === 1) return 'hace 1 mes';
    if (months < 12) return `hace ${months} meses`;
    const years = Math.floor(months / 12);
    return years === 1 ? 'hace 1 año' : `hace ${years} años`;
  };

  return (
    <StyledWrapper>
      <h1 className="title">Opiniones de Nuestros Clientes</h1>
      <div className="opinion-cards">
        {opiniones.map((opinion, index) => (
          <div key={index} className="card">
            <p className="fecha">{getRelativeTime(opinion.fecha)}</p>
            <h2 className="card-title">{opinion.titulo}</h2>
            <p className="small-desc">{opinion.descripcion}</p>
            <div className="estrellas">{'★'.repeat(opinion.estrellas)}</div>
          </div>
        ))}
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  width: 100%;
  height: 100%;
  background: linear-gradient(
      45deg,
      orange 25%,
      orangered 25%,
      orange 75%,
      orangered 75%,
      orange
    ),
    linear-gradient(
      45deg,
      orange 25%,
      orangered 25%,
      orange 75%,
      orangered 75%,
      orange
    );
  background-size: 5em 10em;
  background-position: 0 0, 10px 10px;
  text-align: center;
  font-family: Arial, sans-serif;

  .title {
    font-size: clamp(1.5rem, 5vw, 2rem);
    color: #fff;
    margin-bottom: 20px;
  }

  .opinion-cards {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 20px;
  }

  .card {
    position: relative;
    max-width: 200px;
    background-color: #fff;
    border-radius: 10px;
    padding: 2em 1.2em;
    text-decoration: none;
    overflow: hidden;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    cursor: pointer;
  }

  .card:hover {
    transform: scale(1.05);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  }

  .card-title {
    font-size: 1.2em;
    color: #262626;
    font-weight: bold;
    margin-bottom: 0.5em;
  }

  .small-desc {
    font-size: 1em;
    color: #452c2c;
    line-height: 1.5em;
    margin-bottom: 1em;
  }

  .estrellas {
    color: #FFD700;
    font-size: 1.2em;
  }

  .fecha {
    font-size: 0.9em;
    color: #fff;
    margin-bottom: 0.5em;
  }
`;

export default Opiniones;
