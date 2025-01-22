import React, { useState, useEffect, useRef } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Banner from './components/Banner';
import BannerPromocional from './components/BannerPromocional';
import MenuSection from './components/MenuSection';
import Contacto from './components/Contacto';
import Sucursales from './pages/Sucursales';
import MainMenu from './pages/Menus/MainMenu';
import MenuMesa from './pages/Menus/MenuMesa';
import MenuParaLlevar from './pages/Menus/MenuParaLLevar';
import Nosotros from './pages/Nosotros';
import Opiniones from './pages/Opiniones';
import Terminos from './pages/Terminos';

const App = () => {
  const location = useLocation();
  const [animationStyle, setAnimationStyle] = useState({
    opacity: 0,
    transform: 'translateY(30px)',
  });
  const [navbarHeight, setNavbarHeight] = useState(0);
  const navbarRef = useRef(null);

  // Actualizar dinámicamente la altura del navbar
  useEffect(() => {
    const updateNavbarHeight = () => {
      if (navbarRef.current) {
        setNavbarHeight(navbarRef.current.offsetHeight);
      }
    };

    updateNavbarHeight(); // Calcula la altura inicial
    window.addEventListener('resize', updateNavbarHeight); // Recalcula en redimensionamiento
    return () => window.removeEventListener('resize', updateNavbarHeight); // Limpia el evento
  }, []);

  // Animación al cambiar de ruta
  useEffect(() => {
    setAnimationStyle({ opacity: 0, transform: 'translateY(30px)' });
    const timeout = setTimeout(() => {
      setAnimationStyle({ opacity: 1, transform: 'translateY(0)', transition: 'all 0.6s ease-out' });
    }, 100);
    return () => clearTimeout(timeout);
  }, [location]);

  return (
    <>
      {/* Navbar con ref para calcular su altura */}
      <div ref={navbarRef}>
        <Navbar />
      </div>

      {/* Contenedor principal con espaciado dinámico */}
      <div style={{ ...animationStyle, paddingTop: `${navbarHeight}px` }}>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <BannerPromocional style={{ marginBottom: '20px' }} />
                <Banner style={{ marginBottom: '20px' }} />
                <MenuSection style={{ marginBottom: '20px' }} />
                <Opiniones style={{ marginBottom: '20px' }} />
                <Contacto />
              </>
            }
          />
          <Route path="/sucursales" element={<Sucursales />} />
          <Route path="/menu" element={<MainMenu />} />
          <Route path="/menuMesa" element={<MenuMesa />} />
          <Route path="/menuparallevar" element={<MenuParaLlevar />} />
          <Route path="/nosotros" element={<Nosotros />} />
          <Route path="/opiniones" element={<Opiniones />} />
          <Route path="/terminos" element={<Terminos />} />
          <Route path="/contacto" element={<Contacto />} />
        </Routes>
      </div>
    </>
  );
};

export default App;
