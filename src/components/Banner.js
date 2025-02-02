import React, { useState, useEffect } from 'react';

const Banner = () => {
  const images = [
    '/img/elcheloficial.jpg',
    '/img/Menuelchel/paquetefinal.png',
    '/img/paegapromo.jpg',
    '/img/sucExpress.jpg',
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [showDetails, setShowDetails] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <>
      <style>
        {`
          .container {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            width: 100%;
            border: 3px solid #ff5722;
            box-sizing: border-box;
            background-color: #fff;
          }
          .slider {
            width: 100%;
            max-width: 1500px;
            overflow: hidden;
            border-radius: 10px;
            margin-bottom: 20px;
            position: relative;
          }
          .slider::before {
            content: "";
            display: block;
            width: 100%;
            padding-top: 56.25%; /* 16:9 ratio */
          }
          .slide {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
          }
          .image {
            width: 90%;
            height: 90%;
            object-fit: contain;
          }
          .selector {
            display: flex;
            justify-content: center;
            gap: 10px;
            margin-top: 10px;
          }
          .selector img {
            width: 80px;
            height: 80px;
            object-fit: cover;
            border: 2px solid transparent;
            cursor: pointer;
            transition: border 0.3s;
          }
          .selector img.selected {
            border: 2px solid #ff5722;
          }
          .textContainer {
            text-align: center;
            padding: 20px;
          }
          .text {
            font-size: clamp(1.5rem, 4vw, 3rem);
            font-weight: bold;
            color: #ff5722;
            margin-bottom: 10px;
          }
          .subText {
            font-size: clamp(1rem, 2.5vw, 1.5rem);
            color: #333;
            line-height: 1.5;
          }
          .details {
            display: inline-block;
            font-size: clamp(0.9rem, 2vw, 1.2rem);
            color: #555;
            line-height: 1.5;
            margin-top: 10px;
            transition: all 0.5s ease;
          }
          @media (max-width: 768px) {
            .image {
              width: clamp(100px, 100%, 500px);
              height: 100%;
              object-fit: contain;
            }
          }
        `}
      </style>

      <div className="container">
        <div className="slider">
          {images.map((image, index) => (
            <div
              key={index}
              className="slide"
              style={{
                transform: `translateX(${(index - currentIndex) * 100}%)`,
                transition: 'transform 1s ease-in-out',
              }}
            >
              <img src={image} alt={`Promoción ${index + 1}`} className="image" />
            </div>
          ))}
        </div>

        <div className="selector">
          {images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Miniatura ${index + 1}`}
              className={currentIndex === index ? 'selected' : ''}
              onClick={() => setCurrentIndex(index)}
            />
          ))}
        </div>

        <div className="textContainer">
          <h1 className="text">EL CHEL</h1>
          <p className="subText">
            EL ENCANTADOR DE ESTÓMAGOS
            <span
              className="details"
              style={{
                opacity: showDetails ? 1 : 0,
                transform: showDetails ? 'translateY(0)' : 'translateY(20px)',
              }}
            >
              <br />
              El Chel es un restaurante en la Ciudad de México que destaca por su
              deliciosa comida yucateca, como la cochinita pibil y la sopa de
              lima. Con un ambiente familiar y acogedor, es ideal para disfrutar
              de auténticos sabores tradicionales. ¡Visítanos en Tlalpan y vive
              una experiencia única!
            </span>
          </p>
        </div>
      </div>
    </>
  );
};

export default Banner;
