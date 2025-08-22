$(document).ready(function() {
    $('#loginForm').on('submit', function(e) {
        e.preventDefault();
    
        const username = $('#username').val();
        const password = $('#password').val();

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
            // Mensaje de error con SweetAlert2
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'Pendejo que no supo su user y password o que?',
                confirmButtonText: 'Intentar de nuevo'
            });

            // Limpiar los campos de entrada
            $('#username').val('');
            $('#password').val('');
        }
    });
});