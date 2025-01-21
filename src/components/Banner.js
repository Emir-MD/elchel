import React, { useState, useEffect } from 'react';

const Banner = () => {
  const images = [
    '/img/Menuelchel/redes oficiales.png',
    '/img/Menuelchel/paquetefinal.png',
    '/img/Menuelchel/2x1.png',
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [showDetails, setShowDetails] = useState(false);

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
            flex-direction: row;
            align-items: center;
            justify-content: space-between;
            flex-wrap: wrap;
            width: 100%;
            padding: 2%;
            border: 3px solid #ff5722;
            border-radius: 10px;
            box-sizing: border-box;
            background-color: #fff;
          }
          .leftSide {
            flex: 1;
            text-align: center;
            margin: 0 auto;
            position: relative;
            transition: all 0.3s ease;
            min-height: 250px;
            background-color: #f9f9f9;
            display: flex;
            flex-direction: column;
            justify-content: center;
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
            position: relative;
          }
          .details {
            display: inline-block;
            font-size: clamp(0.9rem, 2vw, 1.2rem);
            color: #555;
            line-height: 1.5;
            margin-top: 10px;
            transition: all 0.5s ease;
          }

          .rightSide {
            flex: 1;
            display: flex;
            justify-content: center;
            align-items: center;
            position: relative;
          }

          /* Aquí el fallback con ::before en lugar de aspect-ratio */
          .slider {
            position: relative;
            width: 100%;
            max-width: 1500px;
            overflow: hidden;
            border-radius: 10px;
          }
          .slider::before {
            content: "";
            display: block;
            width: 100%;
            padding-top: 56.25%; /* 16:9 */
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
            width: 100%;
            height: auto;
            object-fit: contain;
          }

          @media (max-width: 768px) {
            .container {
              flex-direction: column;
            }
            .leftSide {
              order: 1;
              margin-bottom: 20px;
            }
            .rightSide {
              order: 2;
              width: 100%;
            }
            .slider {
              width: 100%;
            }
            .image {
              width: 90%;
              height: auto;
            }
          }
        `}
      </style>

      <div className="container">
        <div
          className="leftSide"
          onMouseEnter={() => setShowDetails(true)}
          onMouseLeave={() => setShowDetails(false)}
        >
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

        <div className="rightSide">
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
                <img
                  src={image}
                  alt={`Promoción ${index + 1}`}
                  className="image"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
