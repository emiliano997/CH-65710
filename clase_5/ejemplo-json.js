// JSON

// const alumno = {
//   nombre: "Juan",
//   edad: 25,
//   correo: "g7zKj@example.com",
//   numerosFavoritos: [1, 5, 7, 10, 12],
//   direccion: {
//     calle: "Junin",
//     numero: 300,
//   },
// };

// localStorage.setItem("alumno", alumno);

// alumno.propiedad = "valor";

// JSON.parse(); // Convertir un JSON (string con formato JS) a un objeto
// JSON.stringify(); // Convertir un objeto a un JSON (string con formato JS)

// localStorage.setItem("alumno", JSON.stringify(alumno, null, "\t"));
// localStorage.setItem("alumno", "[]");

// console.log(localStorage.getItem("alumno"));
// console.log(typeof localStorage.getItem("alumno"));

// const alumnoLocal = JSON.parse(localStorage.getItem("alumno"));
// console.log(alumnoLocal);

// Mini sistema de alumnos
// const alumnos = JSON.parse(localStorage.getItem("alumnos")) || [];

// console.log(alumnos);

// const nombre = prompt("Ingrese nombre del alumno");
// const edad = Number(prompt("Ingrese la edad del alumno"));
// const nota = Number(prompt("Ingrese la nota del alumno"));

// const alumno = {
//   nombre,
//   edad,
//   nota,
// };

// alumnos.push(alumno);

// localStorage.setItem("alumnos", JSON.stringify(alumnos));

// console.log(localStorage.getItem("alumnos"));
