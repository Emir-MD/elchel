import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Banner from './components/Banner';
import BannerPromocional from './components/BannerPromocional';
import MenuSection from './components/MenuSection';
import Contacto from './components/Contacto';
import Sucursales from './pages/Sucursales';
import Menu from './pages/Menu';
import Nosotros from './pages/Nosotros';
import Opiniones from './pages/Opiniones'; // Asegúrate de importar Opiniones
import Terminos from './pages/Terminos'; // Importa Términos

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <BannerPromocional />
              <Banner />
              <MenuSection />
              <Opiniones /> {/* Agregado antes del footer */}
              <Contacto />
            </>
          }
        />
        <Route path="/sucursales" element={<Sucursales />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/nosotros" element={<Nosotros />} />
        <Route path="/opiniones" element={<Opiniones />} /> {/* Ruta para Opiniones */}
        <Route path="/terminos" element={<Terminos />} /> {/* Ruta para Términos */}
        <Route path="/contacto" element={<Contacto />} />
      </Routes>
    </>
  );
};

export default App;
