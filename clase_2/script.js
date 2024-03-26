// const condicion = true;

// if (condicion) alert("dasdasd");

// if (condicion) {
//   // ...
// }

// if (condicion == true) {
//   alert("Dio true");
// } else {
//   alert("Dio false");
// }

// Ejemplo if anidado

// const diaSemana = prompt("Escribi un dia de la semana");

// if (diaSemana.toLowerCase() == "lunes") {
//   alert("Quiero que se termine");
// } else if (diaSemana == "Martes") {
//   alert("Lo bueno es que hay clase de JavaScript Flex");
// } else if (diaSemana == "Miercoles") {
//   alert("Ya casi fin de semana");
// } else if (diaSemana == "Jueves") {
//   alert("Se apoda juernes");
// } else if (diaSemana == "Viernes") {
//   alert("Al fin loco");
// } else {
//   alert("Cualquier otro dia");
// }

// Validaciones compuestas

// const diaSemana = prompt("Escribi un dia de la semana");
// const mes = prompt("Escribi un mes del año");

// if (diaSemana != "" || mes != "") {
//   alert(diaSemana + " " + mes);
// } else {
//   alert("No escribiste nada");
// }

// if (!diaSemana && !mes) {
//   alert("No se escribio nada");
// } else {
//   alert(diaSemana + " " + mes);
// }

// Ejemplo Switch
// const num1 = Number(prompt("Ingrese el primer numero"));
// const num2 = Number(prompt("Ingrese el segundo numero"));
// const operacion = prompt("Ingrese la operacion");

// let resultado;

// switch (operacion) {
//   case "+":
//     resultado = num1 + num2;
//     break;

//   case "-":
//     resultado = num1 - num2;
//     break;

//   case "*":
//     resultado = num1 * num2;
//     break;

//   default:
//     resultado = "Operacion invalida";
//     break;
// }

// alert(resultado);

// Ejemplo for

// const numero = Number(prompt("Ingrese un numero"));

// for (let i = 1; i <= 10; i++) {
//   let resultado = numero * i;

//   if (resultado > 30) {
//     alert("Es mayor a 30");
//     break;
//   }

//   alert(numero * i);
// }

// alert("El bucle termino");

// let contador = 1;

// while (contador <= 10) {
//   let resultado = numero * contador;

//   if (resultado > 30) {
//     alert("Es mayor a 30");
//     break;
//   }

//   alert(numero * contador);

//   contador++;
// }

// Ejemplo While

// let entrada = prompt("Ingrese un dato");

// while (entrada !== "") {
//   alert(entrada);

//   entrada = prompt("Ingrese un dato");
// }

// alert("El bucle termino");

// Ejemplo do while

let entrada;

do {
  entrada = prompt("Ingrese un dato");
  alert(entrada);
} while (entrada);
