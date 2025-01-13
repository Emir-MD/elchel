import React, { useState } from 'react';

const MenuMesa = () => {
  const [selectedCategory, setSelectedCategory] = useState(null); // Mostrar todos inicialmente

  const dishes = [
    // Desayunos
    {
      category: 'desayunos',
      name: 'Huevos Divorciados',
      description: 'Huevos estrellados, sobre tortilla frita, bañados con salsa verde y roja, servido con frijoles refritos.',
      price: '$69.00',
      image: '/img/huevos.jpg', // Ruta absoluta desde public
    },
    {
      category: 'desayunos',
      name: 'Molletes Sencillos',
      description: 'Molletes sencillos. Se sirven con pico de gallo.',
      price: '1/2 Orden (2 piezas): $42.00, Orden (4 piezas): $71.00',
      image: '/img/molletes.jpg', // Ruta absoluta desde public
    },
    {
      category: 'desayunos',
      name: 'Huevos a la Mexicana',
      description: 'Huevos revueltos con cebolla, jitomate y chile serrano. Servido con frijoles refritos.',
      price: '$69.00',
      image: '/img/huevosmexicana.jpg', // Ruta absoluta desde public
    },

    // Platillos
    {
      category: 'platillos',
      name: 'Chilaquiles con Bistec',
      description: 'Chilaquiles verdes o rojos con bistec (100 gr), crema, queso rallado y cebolla.',
      price: '$84.00',
      image: '/img/chilaquiles.jpg', // Ruta absoluta desde public
    },
    {
      category: 'platillos',
      name: 'Cochinita Pibil',
      description: 'Deliciosa cochinita pibil, acompañada de cebolla morada y tortillas recién hechas.',
      price: '$95.00',
      image: '/img/cochinita.jpg', // Ruta absoluta desde public
    },
    {
      category: 'platillos',
      name: 'Panuchos',
      description: 'Panuchos rellenos de frijol, acompañados de pollo desmenuzado y encurtidos.',
      price: '$75.00',
      image: '/img/panuchos.jpg', // Ruta absoluta desde public
    },

    // Postres
    {
      category: 'postres',
      name: 'Pastel de Tres Leches',
      description: 'Delicioso pastel bañado en tres leches, servido con fresas.',
      price: '$45.00',
      image: '/img/molletes.jpg', // Ruta absoluta desde public
    },
    {
      category: 'postres',
      name: 'Flan Napolitano',
      description: 'Flan cremoso con caramelo, preparado de manera tradicional.',
      price: '$40.00',
      image: '/img/flan.jpg', // Ruta absoluta desde public
    },
    {
      category: 'postres',
      name: 'Marquesita',
      description: 'Postre típico yucateco, relleno de queso de bola y chocolate.',
      price: '$35.00',
      image: '/img/marquesitas.jpg', // Ruta absoluta desde public
    },
    // Especiales
    {
      category: 'especiales',
      name: 'Paella',
      description: 'Paella.',
      price: '$225.00',
      image: '/img/paellaa.jpg', // Ruta absoluta desde public
    },
    // Bebidas
    {
      category: 'bebidas',
      name: 'Café Americano',
      description: 'Café de grano 100% mexicano.',
      price: '$30.00',
      image: '/img/cafeamericano.jpg', // Ruta absoluta desde public
    },
    {
      category: 'bebidas',
      name: 'Agua de Horchata',
      description: 'Refrescante agua de horchata, preparada con arroz y canela.',
      price: '$25.00',
      image: '/img/horchata.jpg', // Ruta absoluta desde public
    },
    {
      category: 'bebidas',
      name: 'Agua de Jamaica',
      description: 'Agua de jamaica natural, dulce y refrescante.',
      price: '$25.00',
      image: '/img/cafeamericano.jpg', // Ruta absoluta desde public
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
    </div>
  );
};

const styles = {
  // Estilos definidos previamente...
};

export default MenuMesa;
