document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const errorMessage = document.getElementById('errorMessage');
    
    // Ejemplo de credenciales (en un caso real, esto se validaría contra un servidor)
    const validUsername = 'admin';
    const validPassword = '123456';
    
    if (username === validUsername && password === validPassword) {
        alert('¡Inicio de sesión exitoso!');
        errorMessage.style.display = 'none';
        // Aquí podrías redirigir al usuario a otra página
        window.location.href = 'Pestañas/productos.html'; // Cambia la ruta según sea necesario
    } else {
        errorMessage.style.display = 'block';
    }
});