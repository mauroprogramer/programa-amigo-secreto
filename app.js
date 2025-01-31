const amigos = [];

        function agregarAmigo() {
            const agregarNombre = document.getElementById('amigo');
            const nombre = agregarNombre.value.trim();
            if (nombre) {
                amigos.push(nombre);
                mostrarNombres();
                agregarNombre.value = '';
            } else {
                alert('No se ha agregado un nombre válido. Por favor, ingresa un nombre.');
            }
        }

        function mostrarNombres() {
            const nombresLista = document.getElementById('listaAmigos');
            nombresLista.innerHTML = '';
            amigos.forEach(nombre => {
                const li = document.createElement('li');
                li.textContent = nombre;
                nombresLista.appendChild(li);
            });
        }

        function sortearAmigo() {
            if (amigos.length === 0) {
                alert('Por favor, ingresa al menos un nombre.');
                return;
            }
            const sorteoAleatorio = Math.floor(Math.random() * amigos.length);
            const amigoSecreto = amigos[sorteoAleatorio];

            mostrarResultado(amigoSecreto);
        }

        function mostrarResultado(amigoSecreto) {
            const resultadoLista = document.getElementById('resultado');
            resultadoLista.innerHTML = '';
            const li = document.createElement('li');
            li.textContent = `Tu amigo secreto es ${amigoSecreto}`;
            resultadoLista.appendChild(li);
        }



