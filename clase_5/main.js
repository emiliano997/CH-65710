// Objeto literal
const personaLiteral = {
  nombre: "Carlos",
  edad: 30,
  calle: "Junin 300",
  // numerosFavoritos: [1, 5, 7, 10, 12],
  // familiares: [
  //   {
  //     nombre: "Maria",
  //     edad: 40,
  //     parentezco: "madre",
  //   },
  // ],
  // trabajo: {
  //   nombre: "Programador",
  //   empresa: "Coderhouse",
  //   experiencia: 10,
  // },
  // saludar: () => console.log("Hola"),
};

// console.log(personaLiteral);

// // console.log(persona1.nombre);
// // console.log(persona1["edad"]);

// persona1.banco = "BBVA";
// persona1.esSoltero = true;

// // console.log(persona1.banco);
// // console.log(persona1.esSoltero);

// // persona1.numerosFavoritos.forEach((num) => console.log(num));
// // persona1.familiares.forEach((familiar) => console.log(familiar));

// persona1.saludar();

// Funcion constructora
// function Persona(nombre, edad, direccion, numerosFavoritos) {
//   // this -> En este objeto creado
//   this.nombre = nombre;
//   this.edad = edad;
//   this.direccion = direccion;
//   this.numerosFavoritos = numerosFavoritos;
// }

// Persona.prototype.saludar = function () {
//   console.log(`Hola ${this.nombre}`);
// };

// // new -> Creo un nuevo objeto
// // Persona -> Tipo del nuevo objeto
// const persona1 = new Persona("Carlos", 30, "Junin 300", [1, 5, 7, 10, 12]);

// console.log(persona1);
// persona1.saludar();

// Class
// class Persona {
//   constructor(nombre, edad, direccion, numerosFavoritos) {
//     this.nombre = nombre;
//     this.edad = edad;
//     this.direccion = direccion;
//     this.numerosFavoritos = numerosFavoritos;
//   }

//   saludar() {
//     console.log(`Hola ${this.nombre}`);
//   }
// }

// const persona1 = new Persona("Carlos", 30, "Junin 300", [1, 5, 7, 10, 12]);
// const persona2 = new Persona("Maria", 40, "Junin 300", [1, 5, 7, 10, 12]);

// // console.log(persona1);

// persona1.saludar();
// persona2.saludar();
