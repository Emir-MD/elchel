import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Banner from './components/Banner';
import BannerPromocional from './components/BannerPromocional'; // Importa el nuevo componente
import MenuSection from './components/MenuSection';
import Footer from './components/Footer';
import Sucursales from './pages/Sucursales';
import Menu from './pages/Menu';
import Nosotros from './pages/Nosotros';
import Contacto from './pages/Contacto';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        {/* Ruta principal con el diseño original */}
        <Route path="/" element={
          <>
            <BannerPromocional /> {/* Añadido arriba del banner principal */}
            <Banner />
            <MenuSection />
            <Footer />
          </>
        } />
        
        {/* Rutas adicionales */}
        <Route path="/sucursales" element={<Sucursales />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/nosotros" element={<Nosotros />} />
        <Route path="/contacto" element={<Contacto />} />
      </Routes>
    </Router>
  );
};

export default App;
