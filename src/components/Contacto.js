import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Contacto = () => {
  return (
    <FooterWrapper>
      <footer>
        <div className="container">
          {/* Logo y slogan */}
          <div className="logo-column">
            <img 
              src="/img/Menuelchel/chel logo.png" 
              alt="El Chel Logo" 
              className="logo" 
            />
            <p className="slogan">La Casa de Todos</p>
          </div>

          {/* Sucursales y correo */}
          <div className="column">
            <h3 className="title">Sucursales</h3>
            <p>
              <Link to="/sucursales" className="link">Ver todas las sucursales</Link>
            </p>
            <br />
            <p className="correo">
              <strong>Correo General:</strong>
            </p>
            <p className="correo">
              <a href="mailto:elcheloficial@gmail.com" className="link">elcheloficial@gmail.com</a>
            </p>
          </div>

          {/* Conócenos */}
          <div className="column">
            <h3 className="title">Conócenos</h3>
            <ul className="list">
              <li>
                <Link to="/nosotros" className="link">Nosotros</Link>
              </li>
              <li>
                <Link to="/opiniones" className="link">Opiniones</Link>
              </li>
              <li>
                <Link to="/terminos" className="link">Términos y Condiciones</Link>
              </li>
            </ul>
          </div>

          {/* Redes sociales con tooltips */}
          <div className="column social-column">
            <h3 className="title">Redes sociales</h3>
            <StyledWrapper>
              <ul className="example-2">
                <li className="icon-content">
                  <a 
                    data-social="whatsapp" 
                    aria-label="Whatsapp" 
                    href="https://wa.me/525575110551" 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    <div className="filled" />
                    <svg 
                      xmlSpace="preserve" 
                      viewBox="0 0 24 24" 
                      className="bi bi-whatsapp" 
                      fill="currentColor" 
                      height={24} 
                      width={24} 
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path fill="currentColor" d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                    </svg>
                  </a>
                  <div className="tooltip">Whatsapp</div>
                </li>
                <li className="icon-content">
                  <a 
                    data-social="facebook" 
                    aria-label="Facebook" 
                    href="https://www.facebook.elchel.mx" 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    <div className="filled" />
                    <svg 
                      xmlSpace="preserve" 
                      viewBox="0 0 24 24" 
                      className="bi bi-facebook" 
                      fill="currentColor" 
                      height={24} 
                      width={24} 
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path fill="currentColor" d="M23.9981 11.9991C23.9981 5.37216 18.626 0 11.9991 0C5.37216 0 0 5.37216 0 11.9991C0 17.9882 4.38789 22.9522 10.1242 23.8524V15.4676H7.07758V11.9991H10.1242V9.35553C10.1242 6.34826 11.9156 4.68714 14.6564 4.68714C15.9692 4.68714 17.3424 4.92149 17.3424 4.92149V7.87439H15.8294C14.3388 7.87439 13.8739 8.79933 13.8739 9.74824V11.9991H17.2018L16.6698 15.4676H13.8739V23.8524C19.6103 22.9522 23.9981 17.9882 23.9981 11.9991Z" />
                    </svg>
                  </a>
                  <div className="tooltip">Facebook</div>
                </li>
                <li className="icon-content">
                  <a 
                    data-social="instagram" 
                    aria-label="Instagram" 
                    href="https://www.instagram.elchel.mx" 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    <div className="filled" />
                    <svg 
                      xmlSpace="preserve" 
                      viewBox="0 0 16 16" 
                      className="bi bi-instagram" 
                      fill="currentColor" 
                      height={16} 
                      width={16} 
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path fill="currentColor" d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334" />
                    </svg>
                  </a>
                  <div className="tooltip">Instagram</div>
                </li>
              </ul>
            </StyledWrapper>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="bottomText">
            Términos y condiciones de nuestras redes 
          </p>
          <p className="bottomText">
            Copyright 2025 El Chel 
          </p>
        </div>
      </footer>
    </FooterWrapper>
  );
};

// Aquí defines todos los estilos con styled-components.
// Fíjate en las media queries para que en pantallas chicas
// se coloquen en una sola columna (flex-direction: column).
const FooterWrapper = styled.footer`
  background: linear-gradient(to bottom, #ff6f00, #ff9800);
  color: #FFFFFF;
  font-family: Arial, sans-serif;

  footer {
    padding: 40px 20px;
  }

  /* Contenedor principal */
  .container {
    display: flex;
    flex-direction: row; /* Predeterminado para pantallas grandes */
  align-items: flex-start; /* Alinea al inicio */
    justify-content: space-between; /* Espacia uniformemente las columnas */
    border: none;
    /* Si quieres que se estire full-width en móvil, no uses max-width o pon max-width: 100%. */
    max-width: 1000px;
    margin: 0 auto;
    background: linear-gradient(to bottom, #ff6f00, #ff9800);
    margin-top:140px;
    gap: 20px;

    @media (max-width: 768px) {
      flex-direction: column;
      align-items: center; 
      text-align: center;
       
    }
  }

  /* Columnas */
  .logo-column,
  .column {
    flex: 1 1 300px;
    margin-bottom: 20px;
  }

  .social-column {
        text-align: center;
    /* si quieres un estilo extra para la de redes */
  }

  .logo {
    width: 150px;
    margin-bottom: 10px;

    @media (max-width: 480px) {
      width: 120px;
    }
  }

  .slogan {
    font-size: clamp(20px, 1.4vw, 14px);
    font-style: italic;
    margin-bottom: 10px;
  }

  .title {
    font-size: clamp(30px, 2vw, 20px);
    font-weight: bold;
    margin-bottom: 10px;
    color:rgba(47, 0, 255, 0.74);
  }

  .link {
    color: #FFFFFF;
    text-decoration: none;
    font-size: clamp(20px, 1.8vw, 16px);
    cursor: pointer;
  }

  .list {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  .correo {
    font-size: clamp(30px, 1.6vw, 16px);
    margin-top: 5px;
    color:rgba(47, 0, 255, 0.74);
  }

  .footer-bottom {
    margin-top: 20px;
    border-top: 1px solid #FFFFFF;
    padding-top: 10px;
    text-align: center;
  }

  .bottomText {
    font-size: clamp(20px, 1.4vw, 14px);
    color: #FFFFFF;
    margin: 5px 0;
  }
`;

/* Redes sociales y tooltips */
const StyledWrapper = styled.div`
  ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  .example-2 {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 40px;
  }

  .icon-content {
    margin: 0 10px;
    position: relative;
  }

  .tooltip {
    position: absolute;
    top: -30px;
    left: 50%;
    transform: translateX(-50%);
    color: #FFFFFF;
    padding: 6px 10px;
    border-radius: 5px;
    opacity: 0;
    visibility: hidden;
    font-size: clamp(10px, 1.4vw, 14px);
    transition: all 0.3s ease;
  }

  .icon-content:hover .tooltip {
    opacity: 1;
    visibility: visible;
    top: -50px;
  }

  .icon-content a {
    position: relative;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
    width: clamp(50px, 5vw, 70px); /* Ajusta con clamp */
    height: clamp(50px, 5vw, 70px);
    border-radius: 50%;
    color:rgb(255, 133, 26);
    background-color: #fff;
    transition: all 0.3s ease-in-out;
  }

  .icon-content a:hover {
    box-shadow: 3px 2px 45px 0px rgb(0 0 0 / 12%);
  }

  .icon-content a svg {
    position: relative;
    z-index: 1;
    width: clamp(30px, 2.2vw, 30px);
    height: clamp(30px, 2.2vw, 30px);
  }

  .icon-content a:hover {
    color: white;
  }

  .filled {
    position: absolute;
    top: auto;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 0;
    background-color: #000;
    transition: all 0.3s ease-in-out;
  }

  .icon-content a:hover .filled {
    height: 100%;
  }

  @media (max-width: 768px) {
    .example-2 {
      flex-direction: column;
      gap: 10px;
    }
    .icon-content a {
      width: 60px;
      height: 60px;
    }
    .icon-content a svg {
      width: clamp(40px, 4vw, 20px);
      height: clamp(40px, 8vw, 20px);
    }
    .tooltip {
      font-size: clamp(10px, 1.2vw, 12px);
    }
  }

  @media (max-width: 480px) {
    .example-2 {
      gap: 8px;
    }
    .icon-content a {
      width: 35px;
      height: 35px;
    }
    .icon-content a svg {
      width: clamp(12px, 1.6vw, 18px);
      height: clamp(12px, 1.6vw, 18px);
    }
    .tooltip {
      font-size: clamp(px, 1vw, 10px);
    }
  }

`;

export default Contacto;