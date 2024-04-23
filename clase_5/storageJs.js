// console.log(Storage);

// localStorage -> Objeto global
// .length -> Cantidad de elementos dentro de localStorage
// console.log(localStorage.length);

// setItem(clave, valor)
// El valor tiene que ser string
// localStorage.setItem("nombre", "[1, 2, 3]");
// localStorage.setItem("clase", 5);

// const usuario = prompt("Ingrese su nombre de usuario");
// const password = prompt("Ingrese su password");

// localStorage.setItem("usuario", usuario);
// localStorage.setItem("password", password);

// getItem(clave)
// console.log(localStorage.getItem("password"));

// removeItem(clave)
// localStorage.removeItem("password");

// clear() -> Borra todo del localStorage
// localStorage.clear();

// key()
// console.log(localStorage.key(0));

// Mini login
// if (localStorage.getItem("usuario") && localStorage.getItem("password")) {
//   alert("Ya hay una cuenta creada");

//   const iniciarSesion = confirm("¿Desea iniciar sesion?");
//   if (iniciarSesion) {
//     // Logica de inicio de sesion
//     // El usuario ingresa sus credenciales
//     // Se compara con las guardadas en localStorage
//   }
// } else {
//   alert("Crea una cuenta");
//   const usuario = prompt("Ingrese su nombre de usuario");
//   const password = prompt("Ingrese su password");

//   localStorage.setItem("usuario", usuario);
//   localStorage.setItem("password", password);
// }

// -------------------
// sessionStorage

// const usuario = prompt("Ingrese su nombre de usuario");
// sessionStorage.setItem("usuario", usuario);
