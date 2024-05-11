document.addEventListener('DOMContentLoaded', function() {
    const formularioRegistro = document.getElementById('formulario-registro');

    formularioRegistro.addEventListener('submit', async function(event) {
        event.preventDefault(); // Prevenir que el formulario se envíe automáticamente

        // Recolectar los datos del formulario
        const formData = new FormData(formularioRegistro);
        const datosUsuario = Object.fromEntries(formData.entries());

        // Imprimir los datos del usuario en la consola antes de enviar la solicitud POST
        console.log('Datos del usuario:', datosUsuario);

        // Enviar una solicitud POST al servidor
        try {
            const respuesta = await fetch('https://api-tecnm.onrender.com/registro', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(datosUsuario)
            });

            const data = await respuesta.json();

            if (respuesta.ok) {
                // Registro exitoso
                alert('¡Registro exitoso! Usuario registrado correctamente.');
                // Aquí podrías redirigir al usuario a otra página, mostrar un mensaje de éxito, etc.
            } else {
                // Error durante el registro
                alert('Error al registrar: ' + data.message);
            }
        } catch (error) {
            console.error('Error al enviar la solicitud de registro:', error);
            alert('Error interno del servidor. Por favor, inténtelo de nuevo más tarde.');
        }
    });
});
