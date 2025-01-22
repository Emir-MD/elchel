import React, { useState } from 'react';

const MenuParaLlevar = () => {
  const [selectedCategory, setSelectedCategory] = useState(null); // Mostrar todos inicialmente

  const dishes = [
    {
      category: "para_llevar",
      name: "1 Kg de cochinita, relleno negro, lomo adobado o lechón",
      description: "Incluye frijoles o sopa de lima, tortillas, cebollitas moradas, salsa de escabeche y crema de habanero.",
      image: "/img/Menuelchel/paquetellevar.JPG"
    },
    {
      category: "extras",
      name: "Sopa de lima de 1 lt",
      description: "Complemento extra para acompañar tus pedidos.",
      image: "/img/sopalima.jpg"
    },
  ];

  // Filtra según la categoría seleccionada, o muestra todos si no hay filtro
  const filteredDishes = selectedCategory
    ? dishes.filter(dish => dish.category === selectedCategory)
    : dishes;

  return (
    <div style={styles.outerContainer}>
      <nav style={styles.navbar}>
        {['Todos', 'Para_llevar', 'Extras'].map((category, index) => (
          <button
            key={index}
            onClick={() => setSelectedCategory(category.toLowerCase() === 'todos' ? null : category.toLowerCase())}
            style={{
              ...styles.navButton,
              backgroundColor:
                selectedCategory === category.toLowerCase() || (category.toLowerCase() === 'todos' && !selectedCategory)
                  ? '#ff6f00'
                  : '#fff',
              color:
                selectedCategory === category.toLowerCase() || (category.toLowerCase() === 'todos' && !selectedCategory)
                  ? '#fff'
                  : '#ff6f00',
            }}
          >
            {category}
          </button>
        ))}
      </nav>
      <section style={styles.container}>
        <h1 style={styles.title}>Menú Para Llevar</h1>
        <div style={styles.menuList}>
          {filteredDishes.map((dish, index) => (
            <div key={index} style={styles.menuItem}>
              <img src={dish.image} alt={dish.name} style={styles.image} />
              <h2 style={styles.dishName}>{dish.name}</h2>
              <p style={styles.description}>{dish.description}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

// Estilos definidos previamente...
const styles = {
  outerContainer: {
    backgroundColor: '#FFD700', // Fondo amarillo para el exterior
    padding: '20px 0',
  },
  navbar: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: '8px',
    marginTop: '140px', // Añadido para evitar superposición con el Navbar

    padding: '10px 5px',
    borderBottom: '2px solid #ff6f00',
    background: 'linear-gradient(to bottom, #ff9800, #ff6f00)',
  },
  navButton: {
    padding: '8px 12px',
    fontSize: 'clamp(12px, 1.5vw, 16px)',
    border: '2px solid #ff6f00',
    borderRadius: '5px',
    cursor: 'pointer',
    fontWeight: 'bold',
    transition: 'background-color 0.3s, color 0.3s',
  },
  container: {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '20px',
  },
  title: {
    fontSize: 'clamp(18px, 2.5vw, 30px)',
    color: '#333',
    textAlign: 'center',
    marginBottom: '20px',
    fontWeight: 'bold',
  },
  menuList: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
    gap: '15px',
    justifyContent: 'center',
    alignItems: 'center',
  },
  menuItem: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '20px',
    border: '2px solid #ff6f00',
    borderRadius: '8px',
    backgroundColor: '#fff',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
  },
  image: {
    width: '100%',
    height: 'clamp(200px, 15vw, 180px)',
    objectFit: 'cover',
    borderRadius: '8px',
  },
  dishName: {
    fontSize: 'clamp(14px, 1.5vw, 18px)',
    color: '#333',
    fontWeight: 'bold',
    margin: '10px 0',
  },
  description: {
    fontSize: 'clamp(12px, 1.2vw, 16px)',
    color: '#666',
    marginBottom: '10px',
    textAlign: 'center',
  }
};

export default MenuParaLlevar;
