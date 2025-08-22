$(document).ready(function() {
    $('#loginForm').on('submit', function(e) {
        e.preventDefault();
    
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Lista de usuarios con sus roles
    const usuarios = [
        { username: 'matt', password: '123456', rol: 'admin' },
        { username: 'juan', password: 'user123', rol: 'usuario' },
        { username: 'maria', password: 'user456', rol: 'usuario' },
        { username: 'supervisor', password: 'super789', rol: 'admin' }
    ];
    
    // Buscar el usuario en la lista
    const usuarioEncontrado = usuarios.find(user => 
        user.username === username && user.password === password
    );    

    //Guardar rol y el usuario en localStorage y redirigir al index.html
    if (usuarioEncontrado) {
        let rolUsuario = usuarioEncontrado.rol;
        let nombreUsuario = usuarioEncontrado.username;

        localStorage.setItem('rol', rolUsuario);
        localStorage.setItem('username', nombreUsuario);
        window.location.href = 'index.html';

    } else {
        console.log("que cosas");
    }

    });
});