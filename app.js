let amigos = [];

// Función que se ejecuta cuando se hace clic en "Añadir"
function agregarAmigo() {
  const input = document.querySelector("#amigo");
  const nombre = input.value.trim(); // Elimina espacios al inicio y al final

  // Validar que el campo no esté vacío
  if (nombre === "") {
    alert("Por favor, inserte un nombre.");
    return; 
  }

  // Agregar el nombre al arreglo
  amigos.push(nombre);

  input.value = "";

  // Llamar a la función para mostrar la lista actualizada
  renderizarLista();
}

// Función para mostrar la lista de amigos en el HTML
function renderizarLista() {
  const lista = document.querySelector("#listaAmigos");

  // Limpiar el contenido anterior de la lista para evitar duplicados
  lista.innerHTML = "";

  // Recorrer el arreglo amigos usando un bucle for
  for (let i = 0; i < amigos.length; i++) {
    // Crear un nuevo elemento <li> por cada amigo
    const li = document.createElement("li");

    // Asignar el nombre del amigo como texto del <li>
    li.textContent = amigos[i];

    // Agregar el <li> dentro del <ul> (lista)
    lista.appendChild(li);
  }
}

function sortearAmigo() {
  // Validar que haya al menos un amigo
  if (amigos.length === 0) {
    alert("No hay amigos para sortear.");
    return;
  }

  // Generar un índice aleatorio
  const indice = Math.floor(Math.random() * amigos.length);

  const nombreSorteado = amigos[indice];

  // Mostrar el nombre sorteado en pantalla
  document.getElementById("resultado").innerHTML = `<li>Amigo sorteado: ${nombreSorteado}</li>`;
}



