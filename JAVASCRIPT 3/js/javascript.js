function recogeDatos(evento) {
            evento.preventDefault();
            var nombre = document.querySelector("#nombre").value.trim();
            var fecha = document.querySelector("#fecha").value.trim();
            var bienvenida = document.querySelector("#bienvenida");
            var mensaje = "";
            
            if (nombre === "" || fecha === "") {
                mensaje = "<p>Por favor, completa todos los campos.</p>";
            } else {
                var edad = 2025 - parseInt(fecha);
                var mensajeEdad;

                if (isNaN(edad) || edad <= 0 || edad > 120) {
                    mensaje = "<p>Introduce un año de nacimiento válido.</p>";
                } else {
                    if (edad > 30) {
                        mensajeEdad = "¡abuelo!";
                    } else if (edad < 30) {
                        mensajeEdad = "¡jovenzuelo!";
                    } else {
                        mensajeEdad = "¡no me lo creo!";
                    }
                    mensaje = `<p>Hola, <strong>${nombre}</strong>, tienes <strong>${edad}</strong> años, ${mensajeEdad}</p>`;
                }
            }
            bienvenida.innerHTML = mensaje;
        }
        
        var miForm = document.querySelector("#formulario");
        miForm.addEventListener("submit", recogeDatos);