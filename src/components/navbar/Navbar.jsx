import React, { useState } from 'react';
import logo from "../../images/logogenerico.jpeg"
export default function Navbar() {
  // Estado para controlar si el menú desplegable está abierto o cerrado en móviles.
  const [isOpen, setIsOpen] = useState(false);

  // Lista de enlaces para generar la navegación dinámicamente.
  const navLinks = [
    { name: 'Inicio', href: '/', active: true },
    { name: 'Productos', href: '/productos', active: false },
    { name: 'Contacto', href: '/contact', active: false },
  ];

  // Determina si la clase 'show' debe aplicarse al menú colapsable.
  const collapseClass = isOpen ? 'show' : '';

  return (
    // Se utilizan las clases de Bootstrap y se reemplaza 'class' por 'className'.
    <nav className="navbar navbar-expand-lg navbar-light bg-light shadow-sm">
      <div className="container-fluid">
        <a className="navbar-brand fw-bold text-primary" href="/">
            <img src={logo} alt="Logo" style={{ height: '40px', marginRight: '10px' }} />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          // El clic en el botón ahora cambia el estado de React.
          onClick={() => setIsOpen(!isOpen)}
          aria-controls="navbarNav"
          aria-expanded={isOpen} // El estado ARIA se actualiza según el estado.
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        {/* La clase 'show' se añade dinámicamente para mostrar u ocultar el menú. */}
        <div className={`collapse navbar-collapse ${collapseClass}`} id="navbarNav">
          {/* ms-auto alinea los items a la derecha en pantallas grandes */}
          <ul className="navbar-nav ms-auto">
            {navLinks.map((link) => (
              <li className="nav-item" key={link.name}>
                <a
                  // La clase 'active' se añade condicionalmente.
                  className={`nav-link ${link.active ? 'active' : ''}`}
                  aria-current={link.active ? 'page' : undefined}
                  href={link.href}
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}
