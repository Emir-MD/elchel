import React, { useState, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom'; // No `Router` aquí
import Navbar from './components/Navbar';
import Banner from './components/Banner';
import BannerPromocional from './components/BannerPromocional';
import MenuSection from './components/MenuSection';
import Contacto from './components/Contacto';
import Sucursales from './pages/Sucursales';
import MainMenu from './pages/Menus/MainMenu';
import MenuMesa from './pages/Menus/MenuMesa';
import Nosotros from './pages/Nosotros';
import Opiniones from './pages/Opiniones';
import Terminos from './pages/Terminos';

const App = () => {
  const location = useLocation();
  const [animationStyle, setAnimationStyle] = useState({
    opacity: 0,
    transform: 'translateY(30px)',
  });

  useEffect(() => {
    setAnimationStyle({ opacity: 0, transform: 'translateY(30px)' });
    const timeout = setTimeout(() => {
      setAnimationStyle({ opacity: 1, transform: 'translateY(0)', transition: 'all 0.6s ease-out' });
    }, 100);
    return () => clearTimeout(timeout);
  }, [location]);

  return (
    <>
      <Navbar />
      <div style={{ ...animationStyle }}>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <BannerPromocional />
                <Banner />
                <MenuSection />
                <Opiniones />
                <Contacto />
              </>
            }
          />
          <Route path="/sucursales" element={<Sucursales />} />
          <Route path="/menu" element={<MainMenu />} />
          <Route path="/menuMesa" element={<MenuMesa />} />
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
