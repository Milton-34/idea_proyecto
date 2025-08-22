$(document).ready(function() {
    abrirModalDeCargue();

    // Obtener el rol del localStorage
    let rol = localStorage.getItem("rol");
    let username = localStorage.getItem("username");
    console.log("Rol detectado:", rol, "usuario detectado:", username);

    // Verificar si hay una sesión activa
    if (!rol) {
        window.location.href = 'login.html';
        return;
    }
    
    // Mostrar el rol y el nombre del usuario en la navbar.
    $("#nombreDeUsuario").text(username);
    $("#rolDeUsuario").text(rol);

    //Ocualtar contenedores
    $('#panelProductos, #AjustesContenedor, #panelNomina').hide();

     // Manejador de eventos para los botones del menú - Ajustes
    $('#btn-ajustes').click(function() {
        $('.navItem').removeClass('active');
        $(this).addClass('active');
        
        $('#AjustesContenedor').show();
        $('#panelProductos').hide();
        $('#panelNomina').hide();

    });
    // Manejador de eventos para los botones del menú - Productos
    $('#btn-productos').click(function() {
        $('.navItem').removeClass('active');
        $(this).addClass('active');

        $('#panelProductos').show();
        $('#AjustesContenedor').hide();
        $('#panelNomina').hide();

    });

    // Manejador de eventos para los botones del menú - Nómina
    $('#btn-nomina').click(function() {
        $('.navItem').removeClass('active');
        $(this).addClass('active');

        $('#panelNomina').show();
        $('#panelProductos').hide();
        $('#AjustesContenedor').hide();
    });

    setTimeout(() => {
        cerrarModalDeCargue();
    }, 300);
});