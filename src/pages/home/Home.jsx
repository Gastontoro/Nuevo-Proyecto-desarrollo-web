import React from 'react';

// Se definen los estilos como un objeto de JavaScript directamente en el archivo.
// Esto evita la necesidad de un archivo .css separado y resuelve el error de compilación.
const styles = {
  container: {
    padding: '2rem',
    textAlign: 'center',
    backgroundColor: '#f9fafb', // Un gris muy claro
    borderRadius: '12px',
    maxWidth: '600px',
    margin: '2rem auto',
    height: '60vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: '2.5rem', // 40px
    fontWeight: '700',
    color: '#1f2937', // Gris oscuro
    marginBottom: '1rem',
  },
  paragraph: {
    fontSize: '1.125rem', // 18px
    color: '#4b5563', // Gris medio
  },
};

const Home = () => (
  // En lugar de 'className', se utiliza el atributo 'style' para aplicar los estilos en línea.
  <div style={styles.container}>
    <h1 style={styles.title}>Página de Inicio</h1>
    <p style={styles.paragraph}>
      ¡Bienvenido a nuestra aplicación de demostración!
    </p>
  </div>
);

export default Home;
