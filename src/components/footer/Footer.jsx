import React from 'react';

// Estilos en línea para los íconos SVG para no depender de librerías externas.
const iconStyle = {
  width: '24px',
  height: '24px',
  fill: 'currentColor'
};

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-light text-center text-lg-start mt-auto shadow-sm">
      <div className="container p-4">
        <div className="row">
          {/* Columna de descripción */}
          <div className="col-lg-6 col-md-12 mb-4 mb-md-0">
            <h5 className="text-uppercase fw-bold text-primary">MiEmpresa</h5>
            <p>
              Comprometidos con ofrecer la mejor calidad y servicio a nuestros clientes.
              Innovación y confianza desde {currentYear}.
            </p>
          </div>

          {/* Columna de enlaces rápidos */}
          <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
            <h5 className="text-uppercase">Enlaces</h5>
            <ul className="list-unstyled mb-0">
              <li>
                <a href="#!" className="text-dark text-decoration-none">Preguntas Frecuentes</a>
              </li>
              <li>
                <a href="#!" className="text-dark text-decoration-none">Política de Privacidad</a>
              </li>
              <li>
                <a href="#!" className="text-dark text-decoration-none">Términos de Servicio</a>
              </li>
            </ul>
          </div>

          {/* Columna de redes sociales */}
          <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
            <h5 className="text-uppercase">Síguenos</h5>
            <div className="d-flex justify-content-center justify-content-lg-start">
              {/* Ícono de Facebook */}
              <a href="#!" className="text-dark me-3">
                <svg style={iconStyle} role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Facebook</title><path d="M22.675 0h-21.35C.59 0 0 .59 0 1.325v21.35C0 23.41.59 24 1.325 24H12.82v-9.29h-3.128V11.21h3.128V8.65c0-3.1 1.893-4.788 4.658-4.788 1.325 0 2.463.099 2.795.143v3.24h-1.918c-1.504 0-1.795.715-1.795 1.763v2.31h3.587l-.467 3.5h-3.12V24h5.698c.735 0 1.325-.59 1.325-1.325V1.325C24 .59 23.41 0 22.675 0z"/></svg>
              </a>
              {/* Ícono de Twitter */}
              <a href="#!" className="text-dark me-3">
                <svg style={iconStyle} role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>X</title><path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z"/></svg>
              </a>
              {/* Ícono de Instagram */}
              <a href="#!" className="text-dark">
                <svg style={iconStyle} role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Instagram</title><path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.148-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.314.935 20.644.522 19.854.218 19.09.08 18.22.059 16.947.003 15.667 0 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.06 1.17-.249 1.805-.413 2.227-.217.562-.477.96-.896 1.382-.419.419-.819.679-1.381.896-.422.164-1.057.36-2.227.413-1.266.057-1.646.07-4.85.07s-3.585-.015-4.85-.074c-1.17-.06-1.805-.249-2.227-.413-.562-.217-.96-.477-1.382-.896-.419-.419-.679-.819-.896-1.381-.164-.422-.36-1.057-.413-2.227-.057-1.266-.07-1.646-.07-4.85s.015-3.585.074-4.85c.06-1.17.249-1.805.413-2.227.217-.562.477-.96.896-1.382.419-.419.819-.679 1.381-.896.422-.164 1.057-.36 2.227-.413C8.415 2.18 8.797 2.16 12 2.16zm0 9.045c-2.42 0-4.38 1.96-4.38 4.38s1.96 4.38 4.38 4.38 4.38-1.96 4.38-4.38-1.96-4.38-4.38-4.38zm0 7.162c-1.53 0-2.78-1.25-2.78-2.78s1.25-2.78 2.78-2.78 2.78 1.25 2.78 2.78-1.25 2.78-2.78 2.78zm4.965-7.722c0 .795-.645 1.44-1.44 1.44-.795 0-1.44-.645-1.44-1.44s.645-1.44 1.44-1.44c.795 0 1.44.645 1.44 1.44z"/></svg>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center p-3" style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
        © {currentYear} Copyright:
        <a className="text-dark text-decoration-none fw-bold" href="#"> MiEmpresa.com</a>
      </div>
    </footer>
  );
}