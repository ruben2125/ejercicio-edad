document.addEventListener("DOMContentLoaded", function () {
    document.querySelector("#formulario").addEventListener("submit", recogeDatos);
});

function recogeDatos(evento) {
    evento.preventDefault();
    var nombre = document.querySelector("#nombre").value.trim();
    var fechaNacimiento = document.querySelector("#fecha").value;
    var bienvenida = document.querySelector("#bienvenida");

    if (!nombre || !fechaNacimiento) {
        bienvenida.innerHTML = "<p>Por favor, completa todos los campos.</p>";
        return;
    }

    var fechaNac = new Date(fechaNacimiento);
    var hoy = new Date();

    // Calcular edad exacta
    var edad = hoy.getFullYear() - fechaNac.getFullYear();
    if (hoy.getMonth() < fechaNac.getMonth() || (hoy.getMonth() === fechaNac.getMonth() && hoy.getDate() < fechaNac.getDate())) {
        edad--;
    }

    // Validar edad lógica
    if (edad < 0 || edad > 120) {
        bienvenida.innerHTML = "<p>Introduce una fecha de nacimiento válida.</p>";
        return;
    }

    // Mensaje de edad
    var mensajeEdad = edad > 30 ? "¡abuelo!" : edad < 30 ? "¡jovenzuelo!" : "¡no me lo creo!";
    bienvenida.innerHTML = `<p>Hola, <strong>${nombre}</strong>, tienes <strong>${edad}</strong> años, ${mensajeEdad}</p>`;
}
