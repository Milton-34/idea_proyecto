$(document).ready(function() {
    // Obtener el rol del localStorage
    let rol = localStorage.getItem("rol");
    console.log("Rol detectado:", rol);

    // Verificar si hay una sesión activa
    if (!rol) {
        window.location.href = 'login.html';
        return;
    }

    // Ocultar todas las secciones inicialmente
    $('.usuarios, .administradores').hide();

    // Configurar la visualización según el rol
    if (rol === 'admin') {
        $('.administradores').fadeIn(1000);
    } else if (rol === 'usuario') {
        $('.usuarios').fadeIn(1000);
        // Agregar mensaje de bienvenida para usuario
        $('body').prepend(`
        `);
    }
});