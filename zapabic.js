// Funcionalidad para el menú de navegación
document.addEventListener('DOMContentLoaded', function() {
    // Resaltar la página actual en el menú
    const currentPage = window.location.pathname.split('/').pop();
    const navLinks = document.querySelectorAll('nav a');
    
    navLinks.forEach(link => {
        if (link.getAttribute('href') === currentPage) {
            link.classList.add('active');
        }
    });
    
    // Funcionalidad para el catálogo (si existe en la página)
    if (document.getElementById('catalogo')) {
        // Aquí iría la lógica para filtrar productos, etc.
        console.log('Catálogo cargado');
    }
    
    // Efecto de desplazamiento suave para los enlaces
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});

// Función para cargar contenido dinámico (si se usa iframes o AJAX)
function cargarSeccion(url) {
    // Implementación para cargar contenido dinámico
    console.log('Cargando sección: ' + url);
    // Aquí iría la lógica para cargar el contenido
}

// Funcionalidad para el formulario de contacto (si existe)
function validarFormulario() {
    const nombre = document.getElementById('nombre').value;
    const email = document.getElementById('email').value;
    const mensaje = document.getElementById('mensaje').value;
    
    if (nombre === '' || email === '' || mensaje === '') {
        alert('Por favor complete todos los campos');
        return false;
    }
    
    if (!email.includes('@')) {
        alert('Por favor ingrese un email válido');
        return false;
    }
    
    return true;
}