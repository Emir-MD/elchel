import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Banner from './components/Banner';
import BannerPromocional from './components/BannerPromocional';
import MenuSection from './components/MenuSection';
import Footer from './components/Footer';
import Sucursales from './pages/Sucursales';
import Menu from './pages/Menu';
import Nosotros from './pages/Nosotros';
import Contacto from './pages/Contacto';

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
              <Footer />
            </>
          }
        />
        <Route path="/sucursales" element={<Sucursales />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/nosotros" element={<Nosotros />} />
        <Route path="/contacto" element={<Contacto />} />
      </Routes>
    </>
  );
};

export default App;
