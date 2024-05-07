// Obtenemos el formulario
const formulario = document.getElementById("formulario");
const tareasContainer = document.getElementById("tareas");

// "Base de datos"
const tareas = [];

// Controlamos el envio del formulario

formulario.addEventListener("submit", (event) => {
  // Evitamos que se recargue la pagina
  event.preventDefault();

  const titulo = document.getElementById("titulo");
  const descripcion = document.getElementById("descripcion");

  if (
    String(titulo.value).trim() === "" ||
    String(descripcion.value).trim() === ""
  ) {
    alert("Todos los campos son obligatorios");
    return;
  }

  const tarea = {
    titulo: titulo.value,
    descripcion: descripcion.value,
  };

  tareas.push(tarea);

  const tareaElement = generarTarea(tarea);

  tareasContainer.appendChild(tareaElement);

  // Limpiamos el formulario
  formulario.reset();
});

// Generador de tareas
function generarTarea(tarea) {
  const div = document.createElement("div");

  div.innerHTML = `
    <h3>${tarea.titulo}</h3>
    <p>${tarea.descripcion}</p>
  `;

  // div.classList.add("card")
  div.className = "card";

  return div;
}
