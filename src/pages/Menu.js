import React, { useState } from 'react';
// Importa tus imágenes
import divorciadosImg from '../img/Whatsapp.jpg';
import molletesImg from '../img/promos.png';
import huevosConJamonImg from '../img/paella.jpg';
import chilaquilesBistecImg from '../img/miercoles.jpg';
import huevosMexicanaImg from '../img/logo.png';
import chilaquilesPolloImg from '../img/Whatsapp.jpg';

const Menu = () => {
  const [selectedCategory, setSelectedCategory] = useState(null); // Cambiar valor inicial a null para mostrar todos

  const dishes = [
    {
      category: 'desayunos',
      name: 'Huevos Divorciados',
      description: 'Huevos estrellados, sobre tortilla frita, bañados con salsa verde y roja, servido con frijoles refritos.',
      price: '$69.00',
      image: divorciadosImg,
    },
    {
      category: 'desayunos',
      name: 'Molletes Sencillos',
      description: 'Molletes sencillos. Se sirven con pico de gallo.',
      price: '1/2 Orden (2 piezas): $42.00, Orden (4 piezas): $71.00',
      image: molletesImg,
    },
    {
      category: 'platillos',
      name: 'Chilaquiles con Bistec',
      description: 'Chilaquiles verdes o rojos con bistec (100 gr), crema, queso rallado y cebolla.',
      price: '$84.00',
      image: chilaquilesBistecImg,
    },
    {
      category: 'platillos',
      name: 'Huevos a la Mexicana',
      description: 'Huevos revueltos con cebolla, jitomate y chile serrano. Servido con frijoles refritos.',
      price: '$69.00',
      image: huevosMexicanaImg,
    },
    {
      category: 'postres',
      name: 'Pastel de Tres Leches',
      description: 'Delicioso pastel bañado en tres leches, servido con fresas.',
      price: '$45.00',
      image: molletesImg,
    },
    {
      category: 'bebidas',
      name: 'Café Americano',
      description: 'Café de grano 100% mexicano.',
      price: '$30.00',
      image: chilaquilesPolloImg,
    },
    {
      category: 'especiales',
      name: 'Paella Especial',
      description: 'Paella preparada con mariscos frescos y especias de la casa.',
      price: '$120.00',
      image: huevosConJamonImg,
    },
  ];

  // Mostrar todos si no hay categoría seleccionada
  const filteredDishes = selectedCategory
    ? dishes.filter(dish => dish.category === selectedCategory)
    : dishes;

  return (
    <div>
      <nav style={styles.navbar}>
        {['Todos', 'Desayunos', 'Platillos', 'Postres', 'Especiales', 'Bebidas'].map((category, index) => (
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
        <h1 style={styles.title}>Menú de Mesa</h1>
        <div style={styles.menuList}>
          {filteredDishes.map((dish, index) => (
            <div key={index} style={styles.menuItem}>
              <img src={dish.image} alt={dish.name} style={styles.image} />
              <h2 style={styles.dishName}>{dish.name}</h2>
              <p style={styles.description}>{dish.description}</p>
              <p style={styles.price}>{dish.price}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

const styles = {
  navbar: {
    display: 'flex',
    justifyContent: 'center',
    gap: '10px', // Espaciado reducido entre botones
    padding: '10px 0',
    borderBottom: '2px solid #ff6f00',
    backgroundColor: '#fff',
    marginBottom: '20px',
  },
  navButton: {
    padding: '10px 15px', // Tamaño más compacto
    fontSize: '1rem',
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
    fontSize: '2.5rem',
    color: '#333',
    textAlign: 'left',
    marginBottom: '30px',
    fontWeight: 'bold',
  },
  menuList: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
    gap: '20px',
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
    height: '150px',
    objectFit: 'cover',
    borderRadius: '8px',
  },
  dishName: {
    fontSize: '1.5rem',
    color: '#333',
    fontWeight: 'bold',
    margin: '10px 0',
  },
  description: {
    fontSize: '1rem',
    color: '#666',
    marginBottom: '10px',
    textAlign: 'center',
  },
  price: {
    fontSize: '1.2rem',
    fontWeight: 'bold',
    color: '#ff6f00',
  },
};

export default Menu;
