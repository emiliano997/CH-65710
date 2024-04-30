// forEach
// forEach no retorna nada

// const numeros = [1, 3, 5];

// const alumnos = [
//   { nombre: "Carlos", edad: 25, curso: "JavaScript" },
//   { nombre: "Uriel", edad: 28, curso: "JavaScript" },
//   { nombre: "Elsa", edad: 30, curso: "React" },
//   { nombre: "Gabriel", edad: 21, curso: "React" },
//   { nombre: "Julian", edad: 25, curso: "Desarrollo Web" },
// ];

// const nuevoArray = numeros.forEach((numero) => console.log(numero));

// console.log(nuevoArray); // Undefined

// find
// find devuelve el primero que encuentre segun una condicion

// const numeroPar = numeros.find((numero) => numero % 2 === 0);

// const alumnoDeReact = alumnos.find((alumno) => alumno.curso === "React");

// console.log(numeroPar);
// console.log(alumnoDeReact);

// filter
// filter nos devuelve un nuevo array segun una condicion

// const alumnosDeReact = alumnos.filter((alumno) => alumno.curso === "React 1");

// const alumnosMayores = alumnos.filter((alumno) => alumno.edad > 21);

// const nombresDeAlumnosDeJavaScript = alumnos.filter((alumno) => {
//   if (alumno.curso === "JavaScript") {
//     return alumno;
//   }
// });

// console.log(alumnosDeReact);
// console.log(alumnosMayores);
// console.log(nombresDeAlumnosDeJavaScript);

// some y every
// some devuelve true si al menos un elemento cumple con una condicion
// every devuelve tru si TODOS los elementos cumplen con una condicion

// const hayAlumnosDeReact = alumnos.some((alumno) => alumno.curso === "React");
// const hayAlumnosDeDW = alumnos.some(
//   (alumno) => alumno.curso === "Desarrollo Web"
// );

// const tienenTodosMasDe21 = alumnos.every((alumno) => alumno.edad > 21);

// const todosCursanJavaScript = alumnos.every(
//   (alumno) => alumno.curso === "JavaScript"
// );

// console.log(hayAlumnosDeDW);
// console.log(tienenTodosMasDe21);
// console.log(todosCursanJavaScript);

// map

// Alumnos DB
const alumnos = [
  { nombre: "Carlos", edad: 25, curso: "JavaScript" },
  { nombre: "Uriel", edad: 28, curso: "JavaScript" },
  { nombre: "Elsa", edad: 30, curso: "React" },
  { nombre: "Gabriel", edad: 21, curso: "React" },
  { nombre: "Julian", edad: 25, curso: "Desarrollo Web" },
];

// Filtro los alumnos del curso de JavaScript
// const alumnosDeJavaScript = alumnos.filter((alumno) => {
//   if (alumno.curso === "JavaScript") {
//     return alumno;
//   }
// });

// const nombresDeAlumnosDeJavaScript = alumnosDeJavaScript.map(
//   (alumno, index) => {
//     if (alumno.curso === "JavaScript") {
//       return {
//         id: index + 1,
//         nombre: alumno.nombre,
//       };
//     }
//   }
// );

// console.log(alumnosDeJavaScript);

// console.log(nombresDeAlumnosDeJavaScript);

// reduce
// reduce sirve como acumulador

const numeros = [1, 2, 3, 4, 5, 213, 123, 1, 2, 12];

// const total = numeros.reduce((acumulador, numero, index) => {
//   console.log(acumulador, numero, index);
//   return acumulador * numero;
// });

// const nombres = ["Thomas", "Elsa", "Beto"];

// const total = nombres.reduce((acumulador, nombre) => acumulador + " " + nombre);

// console.log(total);

// sort

// const nuevaLista = numeros.sort((a, b) => b - a);

// console.log(numeros);
// console.log(nuevaLista);

const alumnosSort = alumnos.sort((a, b) => {
  if (a.nombre < b.nombre) {
    return -1;
  }

  if (a.nombre > b.nombre) {
    return 1;
  }

  return 0;
});

console.log(alumnos);
console.log(alumnosSort);
