const boton = document.getElementById("boton");

// boton.addEventListener("click", () => {
//   Swal.fire({
//     title: "Enter your username",
//     input: "text",
//     inputLabel: "Your username",

//     showCancelButton: true,
//     inputValidator: (value) => {
//       if (!value) {
//         return "You need to write something!";
//       }
//     },
//   }).then((resultado) => {
//     if (resultado.value) {
//       Swal.fire(
//         "User Register",
//         `Your username is ${resultado.value}`,
//         "success"
//       );
//     }
//   });
// });

Swal.fire({
  title: "¿Ya tienes cuenta?",
  icon: "question",
  confirmButtonText: "Si",
  cancelButtonText: "No",
  showCancelButton: true,
}).then((resultado) => {
  console.log(resultado);
  if (!resultado.isConfirmed) {
    Swal.fire({
      title: "Tenés que registrarte",
      icon: "info",
      showConfirmButton: true,
    });
    return;
  }

  Swal.fire({
    title: "Enter your username",
    input: "text",
    inputLabel: "Your username",

    showCancelButton: true,
    inputValidator: (value) => {
      if (!value) {
        return "You need to write something!";
      }
    },
  }).then((resultado) => {
    if (resultado.value) {
      Swal.fire(
        "Iniciaste sesión",
        `Tu nombre de usuario es ${resultado.value}`,
        "success"
      );
    }
  });
});

boton.addEventListener("click", () => {
  const username = document.getElementById("username");
  const password = document.getElementById("password");

  if (!username.value || !password.value) {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Todos los campos son obligatorios!",
      toast: true,
      position: "bottom-start",
      showConfirmButton: false,
      timer: 3000,
      background: "#f8d7da",
      timerProgressBar: true,
      width: 300,
      color: "#721c24",
    });
    return;
  }

  Swal.fire({
    title: "Register Complete",
    icon: "success",
    text: "Your username is: " + username.value,
  });
});
