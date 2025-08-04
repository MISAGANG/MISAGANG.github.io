document.addEventListener('DOMContentLoaded', () => {

    // --- LÓGICA PARA EL MODO OSCURO/CLARO ---
    const themeToggleBtn = document.getElementById('theme-toggle');
    const body = document.body;

    // Función para cambiar el tema
    const toggleTheme = () => {
        body.classList.toggle('light-mode');
        const isLightMode = body.classList.contains('light-mode');
        
        // Actualizar el ícono del botón
        const icon = themeToggleBtn.querySelector('i');
        if (isLightMode) {
            icon.classList.remove('fa-sun');
            icon.classList.add('fa-moon');
        } else {
            icon.classList.remove('fa-moon');
            icon.classList.add('fa-sun');
        }

        // Guardar la preferencia en localStorage
        localStorage.setItem('theme', isLightMode ? 'light' : 'dark');
    };

    // Cargar la preferencia al iniciar
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'light') {
        toggleTheme(); // Llama a la función para establecer el tema claro
    }

    // Agregar el evento al botón
    themeToggleBtn.addEventListener('click', toggleTheme);


    // --- LÓGICA PARA EL EFECTO DE "TYPING" ---
    const typingElement = document.getElementById('typing-text');
    const textToType = "> Hello World! Coder Misael Toscano here.";
    let charIndex = 0;

    const typeText = () => {
        if (charIndex < textToType.length) {
            typingElement.textContent += textToType.charAt(charIndex);
            charIndex++;
            setTimeout(typeText, 70); // Velocidad de escritura
        }
    };

    typeText();
});