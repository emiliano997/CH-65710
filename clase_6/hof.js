// hof -> High Order Functions

// function mayorQue(n) {
//   return (m) => m > n;
// }

// const mayorQueDiez = mayorQue(10);

// console.log(mayorQueDiez(12));
// console.log(mayorQueDiez(5));
// console.log(mayorQueDiez(0));

// function imprimirNombre(nombre, imprimir) {
//   imprimir(nombre);
// }

// // imprimirNombre("Juan López", console.log);
// imprimirNombre("Juan López", (nombre) => {
//   const mensaje = `Hola, soy ${nombre}`;
//   console.log(mensaje);
// }); // Le pasamos la definicion de una funcion

// ForEach casero

// const numeros = [1, 2, 3, 4, 5];

// function porCadaUno(lista, funcion) {
//   // funcion(lista);
//   for (let i = 0; i < lista.length; i++) {
//     funcion(lista[i]);
//   }
// }

// porCadaUno(numeros, (elemento) => console.log(elemento * 2));

// // Map casero
// function mapear(lista, funcion) {
//   const listaNueva = [];

//   for (let i = 0; i < lista.length; i++) {
//     listaNueva.push(funcion(lista[i]));
//   }

//   return listaNueva;
// }

// const numerosNuevos = mapear(numeros, (elemento) => elemento * 5);

// console.log(numerosNuevos);
