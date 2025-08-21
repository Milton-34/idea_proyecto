$(document).ready(function() {
    $('#loginForm').on('submit', function(e) {
        e.preventDefault();
    
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const errorMessage = $('#errorMessage');

    // Lista de usuarios con sus roles
    const usuarios = [
        { username: 'admin', password: '123456', rol: 'admin' },
        { username: 'juan', password: 'user123', rol: 'usuario' },
        { username: 'maria', password: 'user456', rol: 'usuario' },
        { username: 'supervisor', password: 'super789', rol: 'admin' }
    ];
    
    // Buscar el usuario en la lista
    const usuarioEncontrado = usuarios.find(user => 
        user.username === username && user.password === password
    );

    let rolUsuario = usuarioEncontrado.rol;
    //alert('el usuario si exite con el rol: ' + rolUsuario);

    //Guardar rol en localStorage y redirigir al index.html
    if (usuarioEncontrado) {
        localStorage.setItem('rol', rolUsuario);
        window.location.href = 'index.html';

    } else {
        alert('Tas pndjo si crees que vas a entrar asi');
        return
    }

    

    /*
    if (usuarioEncontrado) {
        alert(`¡Bienvenido ${username}! Rol: ${usuarioEncontrado.rol}`);
        errorMessage.style.display = 'none';
        
        // Redirigir según el rol
        if (usuarioEncontrado.rol === 'admin') {
            window.location.href = '../Pestañas/admin.html';
        } else {
            window.location.href = '../Pestañas/productos.html';
        }
    } else {
        errorMessage.style.display = 'block';
    }
    */
    });
});