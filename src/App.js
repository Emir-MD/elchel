import React from "react";

const App = () => {
  // Datos para los platillos destacados
  const dishes = [
    { name: "Chilaquiles con Pollo", price: "$97.00 MXN" },
    { name: "Chilaquiles con Bistec", price: "$103.00 MXN" },
    { name: "Enchiladas Rellenas", price: "$102.00 MXN" },
  ];

  return (
    <div style={styles.container}>
      {/* Navbar */}
      <nav style={styles.navbar}>
        <h1 style={styles.logo}>Restaurante</h1>
        <ul style={styles.navLinks}>
          <li>te amo</li>
          <li>Menú</li>
          <li>Contacto</li>
          <li>Facturación</li>
        </ul>
      </nav>

      {/* Banner */}
      <section style={styles.banner}>
        <h2>¡Bienvenido a Restaurante!</h2>
        <p>Delicias para todos los gustos</p>
      </section>

      {/* Menu Section */}
      <section style={styles.menuSection}>
        <h3>Platillos Destacados</h3>
        <div style={styles.menuGrid}>
          {dishes.map((dish, index) => (
            <div key={index} style={styles.card}>
              <h4>{dish.name}</h4>
              <p>{dish.price}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer style={styles.footer}>
        <p>© 2024 Restaurante. Todos los derechos reservados.</p>
      </footer>
    </div>
  );
};

const styles = {
  container: {
    fontFamily: "Arial, sans-serif",
  },
  navbar: {
    display: "flex",
    justifyContent: "space-between",
    padding: "10px 20px",
    backgroundColor: "#2d6a4f",
    color: "white",
  },
  logo: {
    fontSize: "24px",
  },
  navLinks: {
    listStyle: "none",
    display: "flex",
    gap: "15px",
  },
  banner: {
    textAlign: "center",
    padding: "50px",
    backgroundColor: "#52b788",
    color: "white",
  },
  menuSection: {
    padding: "20px",
    textAlign: "center",
  },
  menuGrid: {
    display: "flex",
    justifyContent: "center",
    gap: "15px",
  },
  card: {
    padding: "10px",
    border: "1px solid #ccc",
    borderRadius: "5px",
    width: "150px",
    backgroundColor: "#f8f9fa",
  },
  footer: {
    textAlign: "center",
    padding: "10px",
    backgroundColor: "#2d6a4f",
    color: "white",
  },
};

export default App;
