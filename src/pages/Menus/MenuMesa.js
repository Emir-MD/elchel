import React, { useState } from 'react';
// Importa tus imágenes
import divorciadosImg from '../../img/huevos.jpg';
import molletesImg from '../../img/molletes.jpg';
import paella from '../../img/paellaa.jpg';
import chilaquilesBistecImg from '../../img/chilaquiles.jpg';
import huevosMexicanaImg from '../../img/huevos.jpg';
import cafeameri from '../../img/cafeamericano.jpg';
import cochinitaImg from '../../img/cochinita.jpg';
import panuchosImg from '../../img/panuchos.jpg';
import horchataImg from '../../img/horchata.jpg';
import flanImg from '../../img/flan.jpg';
import marquesitaImg from '../../img/marquesitas.jpg';

const MenuMesa = () => {
  const [selectedCategory, setSelectedCategory] = useState(null); // Mostrar todos inicialmente

  const dishes = [
    // Desayunos
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
      category: 'desayunos',
      name: 'Huevos a la Mexicana',
      description: 'Huevos revueltos con cebolla, jitomate y chile serrano. Servido con frijoles refritos.',
      price: '$69.00',
      image: huevosMexicanaImg,
    },

    // Platillos
    {
      category: 'platillos',
      name: 'Chilaquiles con Bistec',
      description: 'Chilaquiles verdes o rojos con bistec (100 gr), crema, queso rallado y cebolla.',
      price: '$84.00',
      image: chilaquilesBistecImg,
    },
    {
      category: 'platillos',
      name: 'Cochinita Pibil',
      description: 'Deliciosa cochinita pibil, acompañada de cebolla morada y tortillas recién hechas.',
      price: '$95.00',
      image: cochinitaImg,
    },
    {
      category: 'platillos',
      name: 'Panuchos',
      description: 'Panuchos rellenos de frijol, acompañados de pollo desmenuzado y encurtidos.',
      price: '$75.00',
      image: panuchosImg,
    },

    // Postres
    {
      category: 'postres',
      name: 'Pastel de Tres Leches',
      description: 'Delicioso pastel bañado en tres leches, servido con fresas.',
      price: '$45.00',
      image: molletesImg,
    },
    {
      category: 'postres',
      name: 'Flan Napolitano',
      description: 'Flan cremoso con caramelo, preparado de manera tradicional.',
      price: '$40.00',
      image: flanImg,
    },
    {
      category: 'postres',
      name: 'Marquesita',
      description: 'Postre típico yucateco, relleno de queso de bola y chocolate.',
      price: '$35.00',
      image: marquesitaImg,
    },
    //especiales
    {
      category: 'especiales',
      name: 'paella',
      description: 'Paella.',
      price: '$225.00',
      image: paella,
    },
    // Bebidas
    {
      category: 'bebidas',
      name: 'Café Americano',
      description: 'Café de grano 100% mexicano.',
      price: '$30.00',
      image: cafeameri,
    },
    {
      category: 'bebidas',
      name: 'Agua de Horchata',
      description: 'Refrescante agua de horchata, preparada con arroz y canela.',
      price: '$25.00',
      image: horchataImg,
    },
    {
      category: 'bebidas',
      name: 'Agua de Jamaica',
      description: 'Agua de jamaica natural, dulce y refrescante.',
      price: '$25.00',
      image: cafeameri,
    },
  ];

  // Filtra según la categoría seleccionada, o muestra todos si no hay filtro
  const filteredDishes = selectedCategory
    ? dishes.filter(dish => dish.category === selectedCategory)
    : dishes;

  return (
    <div style={styles.outerContainer}>
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
      <style>
        {`
          @media (max-width: 768px) {
            nav {
              gap: 5px;
            }
            button {
              padding: 6px 10px;
              font-size: 14px;
            }
            section {
              padding: 10px;
            }
            div {
              grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
            }
          }
        `}
      </style>
    </div>
  );
};

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
    padding: '15px',
    border: '2px solid #ff6f00',
    borderRadius: '8px',
    backgroundColor: '#fff',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
  },
  image: {
    width: '100%',
    height: 'clamp(120px, 15vw, 180px)',
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
  },
  price: {
    fontSize: 'clamp(14px, 1.2vw, 18px)',
    fontWeight: 'bold',
    color: '#ff6f00',
  },
};

export default MenuMesa;
