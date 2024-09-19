// Envío del formulario.
document.getElementById('contactForm').addEventListener('submit', function(event) {
    // Prevenir el envío por defecto del formulario.
    event.preventDefault();
    
    // Mostrar un mensaje de éxito al usuario al ser enviado con exito.
    alert('Su mensaje ha sido enviado con éxito.');
});