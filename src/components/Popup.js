import React, { useState } from "react";

const Popup = () => {
  const [showPopup, setShowPopup] = useState(true);

  // Función para cerrar el popup
  const cerrarPopup = () => {
    setShowPopup(false);
  };

  return (
    showPopup && (
      <div style={styles.popupOverlay}>
        {/* Contenedor de la imagen con botón de cierre */}
        <div style={styles.popupContainer}>
          {/* Botón de cerrar (Siempre Visible) */}
          <button style={styles.closeBtn} onClick={cerrarPopup}>✖</button>

          {/* Imagen con enlace */}
          <a href="https://www.facebook.com/profile.php?id=61572273834288" target="_blank" rel="noopener noreferrer">
            <img
              src="/img/2x1.jpg"
              alt="Anuncio de El Chel"
              style={styles.popupImage}
            />
          </a>
        </div>
      </div>
    )
  );
};

// 🎨 **Corrección en la "X" para que siempre se vea en celular**
const styles = {
  popupOverlay: {
    position: "fixed",
    top:100,
    left: 0,
    width: "100%",
    height: "100%",
    background: "rgba(0, 0, 0, 0.8)", // Fondo oscuro cubriendo toda la pantalla
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    zIndex: 1000,
  },
  popupContainer: {
    position: "relative",
    width: "500px", // Tamaño estándar en pantallas grandes
    height: "700px",
    maxWidth: "90vw", // Se adapta en pantallas pequeñas
    maxHeight: "90vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  popupImage: {
    width: "100%",
    height: "100%",
    objectFit: "contain", // Mantiene la imagen en su tamaño original sin cortes
    cursor: "pointer",
  },
  closeBtn: {
    position: "absolute",
    top: "10px",
    right: "10px",
    background: "red",
    color: "white",
    border: "none",
    fontSize: "24px",
    cursor: "pointer",
    padding: "8px",
    borderRadius: "50%",
    zIndex: 1001,
  },

  // 📱 **Media Queries para mejorar la "X" en celulares**
  "@media (max-width: 600px)": {
    popupContainer: {
      width: "70vw", // Hace que el popup ocupe el 90% del ancho de la pantalla
      height: "auto",
    },
    popupImage: {
      width: "100%",
      height: "auto",
    },
    closeBtn: {
      top:0,
      right: "5px",
      fontSize: "22px",
      padding: "10px",
      background: "red", // **Siempre visible en pantallas pequeñas**
    },
  },

  "@media (max-width: 400px)": {
    closeBtn: {
      top:100,
      right: "02px",
      fontSize: "18px",
      padding: "8px",
    },
  },
};

export default Popup;
