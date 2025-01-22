import React from 'react';

const Terminos = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Términos y Condiciones</h1>
      <p style={styles.paragraph}>
        Bienvenido a El Chel, el sitio web oficial de nuestro restaurante. Al acceder y usar este sitio web, aceptas los términos y condiciones descritos a continuación. Por favor, léelos detenidamente.
      </p>
      
      <h2 style={styles.subtitle}>1. Uso del Sitio Web</h2>
      <p style={styles.paragraph}>
        Este sitio está destinado únicamente para proporcionar información sobre nuestro restaurante, incluyendo sucursales, menú, redes sociales oficiales y medios de contacto. No se permite el uso indebido del sitio web, como la reproducción no autorizada de contenido o la distribución sin permiso.
      </p>
      
      <h2 style={styles.subtitle}>2. Propiedad Intelectual</h2>
      <p style={styles.paragraph}>
        Todos los derechos sobre el contenido del sitio web, incluyendo imágenes, logotipos, textos y diseños, pertenecen a El Chel. No está permitido copiar, reproducir, distribuir o usar el contenido sin autorización previa y por escrito.
      </p>
      
      <h2 style={styles.subtitle}>3. Cuentas Oficiales</h2>
      <p style={styles.paragraph}>
        Las únicas cuentas oficiales del restaurante El Chel son las siguientes:
      </p>
      <ul style={styles.list}>
        <li>
          <a href="https://www.instagram.com/elchel_oficial/" style={styles.link} target="_blank" rel="noopener noreferrer">
            Instagram: @elchel_oficial
          </a>
        </li>
        <li>
          <a href="https://www.facebook.com/share/1BJwMeEuq8/?mibextid=wwXIfr" style={styles.link} target="_blank" rel="noopener noreferrer">
            Facebook: EL Chel
          </a>
        </li>
        <li>
          WhatsApp: Disponible en las sucursales a través de los números indicados.
        </li>
      </ul>
      
      <h2 style={styles.subtitle}>4. Enlaces Externos</h2>
      <p style={styles.paragraph}>
        Este sitio puede contener enlaces a redes sociales u otras plataformas externas. No somos responsables por el contenido, políticas o prácticas de sitios web externos.
      </p>
      
      <h2 style={styles.subtitle}>5. Limitación de Responsabilidad</h2>
      <p style={styles.paragraph}>
        El Chel no será responsable por errores u omisiones en la información presentada en este sitio. Aunque intentamos mantener el contenido actualizado y preciso, no garantizamos la disponibilidad o exactitud completa de la información.
      </p>
      
      <h2 style={styles.subtitle}>6. Privacidad</h2>
      <p style={styles.paragraph}>
        No recopilamos ni almacenamos información personal a través de este sitio web. Las interacciones mediante enlaces de contacto, como WhatsApp o correo electrónico, se regirán por las políticas de privacidad de esas plataformas.
      </p>
      
      <h2 style={styles.subtitle}>7. Cambios en los Términos</h2>
      <p style={styles.paragraph}>
        El Chel se reserva el derecho de modificar estos términos y condiciones en cualquier momento. Las actualizaciones se reflejarán en esta página y te recomendamos revisarlas periódicamente.
      </p>
      
      <h2 style={styles.subtitle}>8. Contacto</h2>
      <p style={styles.paragraph}>
        Si tienes alguna pregunta o comentario sobre estos términos, puedes contactarnos a través del siguiente correo electrónico:
      </p>
      <p style={styles.paragraph}>
        <a href="mailto:elcheloficial@elchel.com" style={styles.link}>Correo General: elcheloficial@elchel.com</a>
      </p>
    </div>
  );
};

const styles = {
  container: {
    padding: '20px',
    fontFamily: 'Arial, sans-serif',
    maxWidth: '800px',
    margin: '0 auto',
    margintop:'400px',
    lineHeight: '1.6',
  },
  title: {
    fontSize: '24px',
    fontWeight: 'bold',
    marginBottom: '10px',
    textAlign: 'center',
    color: '#ff6f00',
  },
  subtitle: {
    fontSize: '18px',
    fontWeight: 'bold',
    marginTop: '20px',
    marginBottom: '10px',
    color: '#000000',
  },
  paragraph: {
    fontSize: '16px',
    marginBottom: '15px',
    color: '#333',
    textAlign: 'justify',
  },
  list: {
    listStyleType: 'none',
    padding: 0,
    margin: 0,
  },
  link: {
    color: '#ff6f00',
    textDecoration: 'none',
    fontWeight: 'bold',
  },
};

export default Terminos;
