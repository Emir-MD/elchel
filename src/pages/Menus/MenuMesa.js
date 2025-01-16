import React, { useState } from 'react';

const MenuMesa = () => {
  const [selectedCategory, setSelectedCategory] = useState(null); // Mostrar todos inicialmente

  const dishes = [


    {
      category: "desayunos",
      name: "Huevos al gusto",
      description: "Con jamón, a la mexicana, rancheros, divorciados, con chorizo, con mole, con salsa pasilla, al albañil. Acompañados de frijoles y totopos.",
      image: "/img/Menuelchel/Huevoscontocino.JPG"
    },
    {
      category: "desayunos",
      name: "Sopes tradicionales",
      description: "Con pollo o chorizo, 2 piezas. Acompañados de frijoles y totopos.",
      image: "/img/Menuelchel/sopes.JPG"
    },
    {
      category: "desayunos",
      name: "Molletes",
      description: "Con queso y pico de gallo, 2 piezas.",
      image: "/img/molletes.jpg"
    },
    {
      category: "desayunos",
      name: "Chilaquiles verdes o rojos",
      description: "Acompañados con pollo, cecina, arrachera o huevo.",
      image: "/img/Menuelchel/chilaquileszoncecina.JPG"
    },
    {
      category: "desayunos",
      name: "Enchiladas suizas",
      description: "Verdes o rojas con pollo, 3 piezas.",
      image: "/img/Menuelchel/ENCHILADAS SUIZAS.JPG"
    },
    {
      category: "desayunos",
      name: "Enfrijoladas o Enmoladas",
      description: "Con pollo, 3 piezas.",
      image: "/img/Menuelchel/ENCHILADAS ROJAS1.JPG"
    },
    {
      category: "desayunos",
      name: "Panuchos o Tacos de cochinita",
      description: "2 piezas por orden.",
      image: "/img/panuchos1.jpg"
    },
    {
      category: "desayunos",
      name: "Torta de cochinita",
      description: "Preparada con frijoles refritos y cochinita pibil.",
      image: "/img/tortadecochinita.jpg"
    },
    {
      category: "desayunos",
      name: "Hot cakes",
      description: "3 piezas solas o acompañadas con jamón, tocino o huevo.",
      image: "/img/hotcakes.jpg"
    },
    {
      category: "desayunos",
      name: "Queso panela con nopal",
      description: "2 piezas.",
      image: "/img/quesopanelaconnopal.jpg"
    },
    {
      category: "desayunos",
      name: "Claras de huevo",
      description: "Con jamón o a la mexicana.",
      image: "/img/Menuelchel/Huevo estrellado.JPG"
    },
    {
      category: "comida",
      name: "Chilaquiles con Bistec",
      description: "Chilaquiles verdes o rojos con bistec (100 gr), crema, queso rallado y cebolla.",
      image: "/img/chilaquiles.jpg"
    },
    {
      category: "comida",
      name: "Cochinita Pibil",
      description: "Deliciosa cochinita pibil, acompañada de cebolla morada y tortillas recién hechas.",
      image: "/img/cochinita.jpg"
    },
    {
      category: "comida",
      name: "Tacos dorados de cochinita",
      description: "Tres tacos dorados rellenos de cochinita pibil, acompañados de encurtidos.",
      image: "/img/Menuelchel/flautas.JPG"
    },
    {
      category: "comida",
      name: "Chamorro al pibil",
      description: "Delicioso chamorro al estilo pibil, servido con tortillas y cebolla morada.",
      image: "/img/chamorro.jpg"
    },

    {
      category: "comida",
      name: "Torta de cochinita",
      description: "Torta rellena de cochinita pibil con cebolla morada.",
      image: "/img/tortadecochinita.jpg"
    },
    {
      category: "comida",
      name: "Paella (especial de la casa)",
      description: "Prueba la deliciosa paella disponible los viernes, sábados y domingos, con opciones para mesa o para llevar.",
      image: "/img/Menuelchel/paella.JPG"
    },
    {
      category: "comida",
      name: "Sopa de lima",
      description: "Sopa tradicional de lima con un toque de sabor auténtico.",
      image: "/img/sopalima.jpg"
    },
    {
      category: "comida",
      name: "Camarón extra",
      description: "Adición de camarón para la paella.",
      note: "Especialidad de la casa",
      image: "/img/camaron.jpg"
    },
    {
      category: "comida",
      name: "Ensalada El Chel",
      description: "Una fresca combinación de lechuga, tomate, zanahoria rallada, pepino y aderezo especial.",
      image: "/img/Menuelchel/ensalada.JPG"
    },
    {
      category: "comida",
      name: "Nugets",
      description: "Deliciosos trozos de pollo empanizado, crujientes por fuera y jugosos por dentro.",
      image: "/img/Menuelchel/nuggets.JPG"
    },
    {
      category: "comida",
      name: "Salchipapa",
      description: "Papas fritas servidas con salchichas crujientes, acompañadas de salsas al gusto.",
      image: "/img/Menuelchel/salchipapa.JPG"
    },
    {
      "category": "comida",
      "name": "Pechuga al Chimichurri",
      "description": "Pechuga de pollo asada con un toque de chimichurri casero, ideal para los amantes de los sabores intensos.",
      "image": "/img/Menuelchel/PECHUGA AL CHIMICHURRI.JPG"
    },
    // Postres
    {
      category: 'postres',
      name: 'Pan De Dulce',
      description: 'Delicioso pastel bañado en tres leches, servido con fresas.',
      image: '/img/Menuelchel/pan de dulce.JPG', // Ruta absoluta desde public
    },
    {
      category: 'postres',
      name: 'Pasteles del dia',
      description: 'Pregunte por las rebanadas disponibles de diferentes pastel',
      image: '/img/Menuelchel/pasteles.JPG', // Ruta absoluta desde public
    },

    // Bebidas
    {
      "category": "bebidas",
      "name": "Ron",
      "description": "Una selección de los rones más populares del mundo: Bacardí, Captain Morgan, Havana Club, Zacapa y Diplomático.",
      "image": "/img/Menuelchel/ron.JPG" // Ruta absoluta desde public
    },
    {
      "category": "bebidas",
      "name": "Tequila",
      "description": "Disfruta de un buen tequila con estas marcas reconocidas: José Cuervo, Don Julio, Patrón, Herradura y 1800.",
      "image": "/img/Menuelchel/tequila.JPG" // Ruta absoluta desde public
    },
    {
      "category": "bebidas",
      "name": "Whiskey",
      "description": "Explora los sabores únicos de las mejores marcas de whiskey: Jack Daniel's, Jameson, Johnnie Walker, Chivas Regal y Macallan.",
      "image": "/img/Menuelchel/whiskey.JPG" // Ruta absoluta desde public
    },
  ];

  // Filtra según la categoría seleccionada, o muestra todos si no hay filtro
  const filteredDishes = selectedCategory
    ? dishes.filter(dish => dish.category === selectedCategory)
    : dishes;

  return (
    <div style={styles.outerContainer}>
      <nav style={styles.navbar}>
        {['Todos', 'Desayunos', 'Comida', 'Postres', 'Bebidas'].map((category, index) => (
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
  }, menuList: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', // Tarjetas más anchas (mínimo 250px)
    gap: '20px', // Espacio entre tarjetas
    justifyContent: 'center',
    alignItems: 'start',
  },menuList: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', // Diseño base: mínimo 250px por tarjeta
    gap: '20px', // Espacio entre tarjetas
    justifyContent: 'center',
    alignItems: 'start',
  },
  menuItem: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '15px',
    border: '2px solid #ff6f00',
    borderRadius: '12px',
    backgroundColor: '#fff',
    boxShadow: '0 6px 10px rgba(0, 0, 0, 0.15)',
    transition: 'transform 0.2s, box-shadow 0.2s',
  },
  menuItemHover: {
    transform: 'scale(1.05)',
    boxShadow: '0 8px 15px rgba(0, 0, 0, 0.2)',
  },
  image: {
    width: '100%',
    height: '200px',
    objectFit: 'cover',
    borderRadius: '8px',
    marginBottom: '10px',
  },
  dishName: {
    fontSize: 'clamp(16px, 1.5vw, 20px)',
    color: '#333',
    fontWeight: 'bold',
    textAlign: 'center',
    margin: '10px 0',
  },
  description: {
    fontSize: 'clamp(14px, 1.2vw, 16px)',
    color: '#666',
    textAlign: 'center',
    marginBottom: '10px',
  },
  price: {
    fontSize: 'clamp(14px, 1.2vw, 18px)',
    fontWeight: 'bold',
    color: '#ff6f00',
    textAlign: 'center',
  },
  // Estilos responsive
  '@media (max-width: 768px)': {
    menuList: {
      gridTemplateColumns: 'repeat(2, 1fr)', // Dos tarjetas por fila en dispositivos móviles
      gap: '10px', // Menor espacio entre tarjetas
    },
    menuItem: {
      padding: '10px', // Reducir padding para un diseño más compacto
    },
    image: {
      height: '150px', // Imágenes más pequeñas en móviles
    },
    dishName: {
      fontSize: 'clamp(14px, 1.2vw, 18px)', // Texto ligeramente más pequeño
    },
    description: {
      fontSize: 'clamp(12px, 1vw, 14px)', // Descripción más compacta
    },
    price: {
      fontSize: 'clamp(12px, 1.2vw, 16px)', // Precio ajustado
    },
  },
  
};

export default MenuMesa;
