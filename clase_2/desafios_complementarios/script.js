// Actividad 1
// Crea un algoritmo que le pida al usuario que ingrese un número y luego evalúe si ese número es par o impar.

// const numero = Number(prompt("Ingrese un numero"));

// if (numero % 2 === 0) {
//   alert("El numero es par");
// } else {
//   alert("El numero es impar");
// }

// Actividad 2
// Crea un algoritmo que le pida al usuario un número y luego utiliza while para evaluar
// cuántos números son pares y cuantos impares, hasta que el usuario ingrese "salir".

let entrada = prompt("Ingrese un numero");

let pares = 0;
let impares = 0;

while (entrada !== "" && entrada !== null) {
  if (entrada.toLowerCase() === "salir") {
    break;
  }

  if (Number(entrada) % 2 === 0) {
    alert("Es par");
    pares++;
  } else {
    alert("Es impar");
    impares++;
  }

  entrada = prompt("Ingrese un numero");
}

alert("Cantidad pares: " + pares + " Cantidad impares: " + impares);
