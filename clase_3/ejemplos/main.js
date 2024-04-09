// function obtenerDatos(parametro) {
//   const nombre = prompt("Ingrese un nombre");
//   const edad = Number(prompt("Ingrese edad"));

//   // alert(dato);
//   console.log(`${nombre} ${edad}`);
// }

// const cantidadNombres = Number(
//   prompt("Ingrese la cantidad de nombres a ingresar")
// );

// if (!isNaN(cantidadNombres)) {
//   for (let i = 0; i < cantidadNombres; i++) {
//     obtenerDatos(argumento);
//   }
// }

// let resultado = 0;

// function sumar(num1, num2) {
//   let resultado = num1 + num2;
// }

// sumar(6, 8);

// console.log(resultado);

// Ejemplo calculadora
// function calculadora(primerNumero, segundoNumero, operacion) {
//   switch (operacion) {
//     case "+":
//       return primerNumero + segundoNumero;
//     case "-":
//       return primerNumero - segundoNumero;
//     case "*":
//       return primerNumero * segundoNumero;
//     case "/":
//       return primerNumero / segundoNumero;
//     default:
//       return 0;
//   }
// }
// console.log(calculadora(10, 5, "*"));

// Scope

// let datoGlobal = "Martes";

// if (true) {
//   let datoLocal = "Jueves";
//   let datoGlobal = "Sabado";

//   console.log(datoGlobal);
//   console.log(datoLocal);
// }

// console.log(datoLocal);

// Turnos médicos
// Number === parseInt
// const vecesFor = Number(prompt("Ingrese la cantidad de repeticiones"));

// function obtenerTurnos(times) {
//   console.log(`Los turnos disponibles son:`);
//   for (let i = 0; i < times; i++) {
//     console.log(`${obtenerHorario(i)} - ${obtenerMedico(obtenerHorario(i))}`);
//   }
// }

// function obtenerHorario(numero) {
//   // "0" + numero + ":" + numero
//   return `0${numero}:${numero + 1}0`;
// }

// function obtenerMedico(horario) {
//   switch (horario) {
//     case "00:10":
//       return "Doctora Esla";
//     case "01:20":
//     case "02:30":
//       return "Doctor Omar";
//   }

//   // if(horario === "01:20" || horario === "02:30"){}
// }

// if (!isNaN(vecesFor)) {
//   obtenerTurnos(vecesFor);
// }

// Función anónima

// const numeros = [1, 2, 3, 4, 5];

// numeros.forEach(function (numero) {
//   console.log(numero);
// });

// function funcion1(funcion2) {
//   funcion2("Hola mundo");
// }

// funcion1(console.log);

// Arrow Function

// return implicito
// const sumar = (a, b) => a + b;

// const multiplicar = (a, b) => {
//   let resultado = a * b;
//   return resultado;
// };

// console.log(sumar(5, multiplicar(1, 2)));

// Diferencias

// while(true) {}

// mostrarDato("Hola mundo");

// mostrarDatoArrow("Hola mundo todos");

// function mostrarDato(dato) {
//   alert(dato);
// }

// const mostrarDatoArrow = (dato) => alert(dato);

// Ejemplo iva

// const IVA = 1.21;

// const sumarIva = (precio) => {
//   return precio * IVA;
// };

// const obtenerPrecio = Number(prompt("Ingrese precio del producto"));

// if (!isNaN(obtenerPrecio)) {
//   console.log(sumarIva(obtenerPrecio));
// }

// Ejemplo return

// return
// 1. Devolver datos
// 2. Cortar la función

function obtenerDatos() {
  let dato = "Esto es un dato";

  return dato;
}

console.log(obtenerDatos());

function ejemploCortar() {
  // for (let i = 0; i < 5; i++) {
  //   console.log(i);

  //   if (i === 2) {
  //     console.log("Aca se corta la función");
  //     return;
  //   }
  // }

  let dato = prompt("Ingrese un dato");

  while (true) {
    if (dato === "dato") {
      return;
    }

    dato = prompt("Ingrese otro dato");
  }

  console.log("dasds");
}

ejemploCortar();

console.log("Se termino el código");

// Ejemplos para practicar
// - Calculadora modularizada
// - Menu interactivo
//    - Menu: Funcion
//    - Resolver opciones: Diferentes funciones

function menu() {
  let opcion = prompt("...");

  switch (opcion) {
    case "1":
      alert(obtenerDatos);
      // break;
      return;

    default:
      return;
  }

  console.log("adsda");
}

// Parametro: Es el que se recibe
// Ejemplo
function algo(parametro) {}

// Argumento: Es el que se envia
// Ejemplo
algo(argumento);
