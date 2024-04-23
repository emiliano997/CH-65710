if (localStorage.getItem("nombre")) {
  const nombre = localStorage.getItem("nombre");
  alert(`Hola ${nombre}`);
} else {
  const nombre = prompt("¿Cual es tu nombre?");
  localStorage.setItem("nombre", nombre);
  alert(`Hola ${nombre}`);
}
