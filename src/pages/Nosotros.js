import React from "react";
import Footer from "../components/Contacto"; // Asegúrate de que la ruta sea correcta
import { Helmet } from "react-helmet";

const Nosotros = () => {
  return (
    <div style={styles.container}>
      {/* Metadatos para SEO */}
      <Helmet>
        <title>Nosotros | El Chel</title>
        <meta
          name="description"
          content="Conoce nuestra historia, tradición y el amor por la comida yucateca que compartimos en El Chel."
        />
        <meta
          name="keywords"
          content="restaurante mexicano, cochinita pibil, comida yucateca, CDMX, El Chel"
        />
        <meta property="og:title" content="Nosotros | El Chel" />
        <meta
          property="og:description"
          content="Descubre nuestra misión y compromiso de llevar los sabores auténticos de Yucatán a tu mesa."
        />
        <meta property="og:image" content="https://tu-dominio.com/img/ressuc1.jpg" />
        <meta property="og:url" content="https://tu-dominio.com/nosotros" />
        <meta property="og:type" content="website" />
      </Helmet>

      {/* Título de la página */}
      <h1 style={styles.title}>Nosotros</h1>

      {/* Primera sección: Texto a la izquierda, imagen a la derecha */}
      <div style={styles.section}>
        <div style={styles.textContainer}>
          <h2 style={styles.subtitle}>Nuestra Historia</h2>
          <p style={styles.text}>
            Bienvenido a <strong>El Chel</strong>, el hogar de la cochinita pibil y la auténtica comida yucateca en la
            Ciudad de México. Desde nuestros inicios, hemos estado comprometidos con llevar los sabores tradicionales
            del sureste mexicano a tu mesa, combinando ingredientes frescos y recetas que han pasado de generación en
            generación.
          </p>
        </div>
        <div style={styles.imageContainer}>
          <img
            src="/img/ressuc1.jpg"
            alt="Fachada del restaurante El Chel"
            style={styles.image}
          />
        </div>
      </div>

      {/* Segunda sección: Imagen a la izquierda, texto a la derecha */}
      <div style={styles.sectionReverse}>
        <div style={styles.imageContainer}>
          <img
            src="/img/ressuc2.jpg"
            alt="Otra vista del restaurante El Chel"
            style={styles.image}
          />
        </div>
        <div style={styles.textContainer}>
          <h2 style={styles.subtitle}>Nuestro Origen</h2>
          <p style={styles.text}>
            Nuestra historia comienza con un pequeño local en la zona de Coapa, donde servíamos cochinita pibil a amigos
            y vecinos. Gracias al apoyo de nuestra comunidad y el amor de nuestros clientes, hemos crecido hasta
            convertirnos en un referente de la gastronomía yucateca en la CDMX, con varias sucursales al sur de la
            ciudad.
          </p>
        </div>
      </div>

      {/* Tercera sección: Texto a la izquierda, imagen a la derecha */}
      <div style={styles.section}>
        <div style={styles.textContainer}>
          <h2 style={styles.subtitle}>Nuestra Pasión</h2>
          <p style={styles.text}>
            En <strong>El Chel</strong>, nos apasiona ofrecer una experiencia única, donde puedas disfrutar de un
            ambiente familiar y acogedor, acompañado de los sabores que nos representan. Creemos que cada platillo
            cuenta una historia, y queremos compartirla contigo.
          </p>
        </div>
        <div style={styles.imageContainer}>
          <img
            src="/img/ressuc3.png"
            alt="Ambiente acogedor en El Chel"
            style={styles.image}
          />
        </div>
      </div>

      {/* Cuarta sección: Imagen a la izquierda, texto a la derecha */}
      <div style={styles.sectionReverse}>
        <div style={styles.imageContainer}>
          <img
            src="/img/ressuc1.jpg"
            alt="Interior del restaurante El Chel"
            style={styles.image}
          />
        </div>
        <div style={styles.textContainer}>
          <h2 style={styles.subtitle}>Nuestra Misión</h2>
          <p style={styles.text}>
            Nuestra misión es preservar y compartir la riqueza culinaria de Yucatán, combinando tradición con un
            servicio excepcional para que cada cliente se sienta como en casa.
          </p>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

// Estilos del componente
const commonFlexStyles = {
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  gap: "20px",
  flexWrap: "wrap",
};

const styles = {
  container: {
    width: "90%",
    maxWidth: "1200px",
    margin: "0 auto",
    padding: "20px",
    fontFamily: "Arial, sans-serif",
    color: "#333",
  },
  title: {
    fontSize: "clamp(1.8rem, 5vw, 2.5rem)",
    color: "#e76f51",
    textAlign: "center",
    marginBottom: "30px",
  },
  subtitle: {
    fontSize: "clamp(1.5rem, 4vw, 2rem)",
    color: "#2a9d8f",
    marginBottom: "20px",
  },
  section: {
    ...commonFlexStyles,
    marginBottom: "30px",
  },
  sectionReverse: {
    ...commonFlexStyles,
    flexDirection: "row-reverse",
    marginBottom: "30px",
  },
  textContainer: {
    flex: "1 1 300px",
    padding: "20px",
    textAlign: "justify",
  },
  text: {
    fontSize: "clamp(1rem, 2.5vw, 1.2rem)",
    lineHeight: "1.8",
  },
  imageContainer: {
    flex: "1 1 300px",
    padding: "20px",
    textAlign: "center",
  },
  image: {
    width: "100%",
    maxWidth: "400px",
    height: "auto",
    borderRadius: "10px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
  },
};

export default Nosotros;
