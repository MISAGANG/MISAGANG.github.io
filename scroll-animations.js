// Inicializa ScrollReveal
ScrollReveal({
    reset: false, // Cambia a true si quieres que las animaciones se repitan al volver a la posición inicial
    distance: '60px',
    duration: 800,
    delay: 200
});

// Anima el título principal
ScrollReveal().reveal('.main-title', { origin: 'bottom' });

// Anima la sección "Acerca de mí"
ScrollReveal().reveal('#about h2, .about-content p', { origin: 'left', interval: 200 });

// Anima la sección "Proyectos"
ScrollReveal().reveal('#projects h2', { origin: 'right' });
ScrollReveal().reveal('.project-item', { origin: 'bottom', interval: 200 });

// Anima la nueva sección "Habilidades"
ScrollReveal().reveal('#skills h2', { origin: 'bottom' });
ScrollReveal().reveal('.skill-item', { origin: 'bottom', interval: 100 });

// Anima la sección "Contacto"
ScrollReveal().reveal('#contact h2, #contact p, .social-links', { origin: 'top', interval: 200 });