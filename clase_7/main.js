// Obtener un elemento por el Id
// const app = document.getElementById("app");
// const title = document.getElementById("title");

// Obtener elementos por nombre de clase
// const cards = document.getElementsByClassName("card");

// Obtener elementos por nombre de etiqueta
// const cards = document.getElementsByTagName("li");

// const listas = document.getElementsByTagName("ul");

// console.log(app.innerHTML);
// console.log(title.innerHTML);
// console.log(cards);
// console.log(listas);

// // For of
// for (const card of cards) {
//   console.log(card.innerHTML);
// }

// Modificar el title
// title.innerHTML = `<b>Coderhouse</b> - <i>Clase 7</i> | <u> Aguante JavaScript</u>`;

// console.log(title.innerText);

// Modificar las cards
// for (const card of cards) {
//   // console.log(card);
//   // card.className = "bg-orange";
//   // card.innerHTML = `<i> ${card.innerHTML} </i> - Coderhouse`;
// }

// Plantillas literales

// app.innerHTML = `<h3>${title.innerText}</h3>
//                 <i> Coderhouse </i>
// `;

// App Dinamica

// const app = document.getElementById("app-dinamica");

// Selecciona el primer elemento que coincida con el selector
const app = document.querySelector("#app-dinamica");

// Selecciona todos los elementos que coincidan con el selector
// const cards = document.querySelectorAll(".card");

const alumnos = [
  { nombre: "Carlos", edad: 25, curso: "JavaScript" },
  { nombre: "Uriel", edad: 28, curso: "JavaScript" },
  { nombre: "Elsa", edad: 30, curso: "React" },
  { nombre: "Gabriel", edad: 21, curso: "React" },
  { nombre: "Julian", edad: 25, curso: "Desarrollo Web" },
  { nombre: "Rodrigo", edad: 25, curso: "Desarrollo Web" },
  { nombre: "Maria", edad: 25, curso: "Desarrollo Web" },
  { nombre: "Luis", edad: 25, curso: "React" },
];

// for (const alumno of alumnos) {
//   const card = document.createElement("div");
//   card.className = "card";
//   card.innerHTML = `
//     <h3>${alumno.nombre}</h3>
//     <p>${alumno.edad}</p>
//     <p>${alumno.curso}</p>
//   `;
//   app.appendChild(card);
// }

// Eventos
const boton = document.getElementById("obtener-usuarios");

// boton.addEventListener("click", () => {
//   // console.log("Click");
//   for (const alumno of alumnos) {
//     const card = document.createElement("div");
//     card.className = "card";
//     card.innerHTML = `
//     <h3>${alumno.nombre}</h3>
//     <p>${alumno.edad}</p>
//     <p>${alumno.curso}</p>
//   `;
//     app.appendChild(card);
//   }
// });

function obtenerUsuarios() {
  for (const alumno of alumnos) {
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `
    <h3>${alumno.nombre}</h3>
    <p>${alumno.edad}</p>
    <p>${alumno.curso}</p>
  `;
    app.appendChild(card);
  }
}

const searchInput = document.getElementById("search");

// searchInput.addEventListener("keyup", () => {
//   console.log(searchInput.value);
// });

// Otra forma de utilizar eventos del DOM
// searchInput.onkeyup = () => {
//   console.log(searchInput.value);
// };

// searchInput.onkeydown = () => {
//   console.log(searchInput.value);
// };

// searchInput.oninput = () => {
//   console.log(searchInput.value);
// };

// Obtener datos de un formulario

const formulario = document.getElementById("formulario");

formulario.addEventListener("submit", (event) => {
  // Evita que recargue la pagina
  event.preventDefault();

  const nombre = document.getElementById("nombre");
  const edad = document.getElementById("edad");
  const curso = document.getElementById("curso");

  const card = document.createElement("div");
  card.className = "card";
  card.innerHTML = `
    <h3>${nombre.value}</h3>
    <p>${edad.value}</p>
    <p>${curso.value}</p>
  `;
  app.appendChild(card);

  // Limpia el formulario
  nombre.value = "";
  edad.value = "";
  curso.value = "";
});
