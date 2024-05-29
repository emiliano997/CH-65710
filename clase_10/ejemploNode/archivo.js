// console.log("Hola mundo desde node.js");

// const user = [
//   { name: "Juan", age: 25 },
//   { name: "Maria", age: 30 },
//   { name: "Luis", age: 35 },
// ];

// console.table(user);

// Paquete de matematicas
// math.js -> Se convierte en un paquete en node
// function sumar(a, b) {
//   return a + b;
// }

// function restar(a, b) {
//   return a - b;
// }

// function multiplicar(a, b) {
//   return a * b;
// }

// function dividir(a, b) {
//   return a / b;
// }

// Uso de la libreria
const luxon = require("luxon");

const fecha = luxon.DateTime.fromISO("2023-04-01T00:00:00.000Z");

console.log(fecha.toFormat("dddd, LLLL d, yyyy"));
