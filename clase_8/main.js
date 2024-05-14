// setTimeout
// Ejecuta una función despues de cierto tiempo

// Manera Sincronica
// console.log("Tarea 1");
// console.log("Tarea 2");
// console.log("Tarea 3");

// Manera asincronica
// const tarea2 = () => console.log("Tarea 2");
// function operacionAsincronica() {
//   setTimeout(tarea2, 2000);
//   // setTimeout(() => {
//   //   console.log("Tarea 2");
//   // }, 2000);
// }

// console.log("Tarea 1");
// operacionAsincronica();
// console.log("Tarea 3");

// Ejemplo setTimeout
// setTimeout(() => {
//   alert("Bienvenido a mi sitio");
// }, 2000);

// setInterval
// Ejecuta una función todo el tiempo en un intervalo de tiempo
// Si queremos cortar la ejecución podemos utilizar clearInterval

// let intervalo = setInterval(() => {
//   console.log("Hola desde setInterval");
// }, 2000);

// setTimeout(() => {
//   clearInterval(intervalo);
// }, 6000);

// Ejemplo setInterval

let intentos = 0;

const getData = () => {
  // console.log("Obteniendo datos");
  if (intentos < 2) {
    throw new Error("Error"); // Devuelve un error
  } else {
    console.log("Obteniendo datos");
  }
};

// let intervalo = setInterval(() => {
//   try {
//     getData(); // Devuelve un error

//     clearInterval(intervalo);
//   } catch (error) {
//     console.log("Hubo un error");
//     intentos++;
//   } finally {
//     console.log("Intentos: ", intentos);
//   }

//   if (intentos === 3) {
//     clearInterval(intervalo);
//     console.log("Hubo un problema que no se pudo resolver");
//   }
// }, 2000);

// Try Catch Finally
// function mostrarError(error) {
//   document.getElementById("error").textContent = error.message;
// }

// function limpiarMensajeDeError() {
//   setTimeout(() => {
//     document.getElementById("error").textContent = "";
//   }, 2000);
// }

// try {
//   const ingreseUnNumero = Number(prompt("Ingrese un numero"));

//   if (isNaN(ingreseUnNumero)) {
//     throw new Error("Numero no valido");
//   }

//   mostrarResultado(ingreseUnNumero * 5);
// } catch (error) {
//   mostrarError(error); // Manipular el DOM para mostrar el mensaje
//   console.log("Hubo un error");
//   console.log(error);
// } finally {
//   limpiarMensajeDeError();
// }
