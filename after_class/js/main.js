// Utilizando prompts y alerts
function formaTradicional() {
  const users = JSON.parse(localStorage.getItem("users")) || [];

  alert("Bienvenido a nuestro sistema");

  const opcion = Number(
    prompt(
      "¿Qué desesas hacer? \n1. Iniciar Sesión \n2. Registrame \n3. Acerca del sistema \n4. Salir"
    )
  );

  if (isNaN(opcion)) {
    alert("Opción no válida \nPor favor, recargue la página");
    return;
  }

  switch (opcion) {
    case 1: {
      // Sistema Login
      const username = prompt("Ingrese su nombre de usuario");
      const password = prompt("Ingrese su password");

      const user = users.find((user) => user.username === username);

      if (!user) {
        alert("Usuario no registrado");
        return;
      }

      if (user.password !== password) {
        alert("Contraseña incorrecta");
        return;
      }

      alert(`Bienvenido a nuestro sistema ${username}`);
      break;
    }
    case 2: {
      // Sistema Register
      const username = prompt("Ingrese su nombre de usuario");
      const password = prompt("Ingrese su password");

      const userExists = users.find((user) => user.username === username);

      if (userExists) {
        alert("Nombre de usuario ya existe");
        return;
      }

      const user = {
        username,
        password,
      };

      users.push(user);

      localStorage.setItem("users", JSON.stringify(users));

      alert("Gracias por registrarte en nuestro sistema");
      break;
    }
    case 3:
      alert("Sistema desarrollado en un After Class");
      break;
    case 4:
      alert("Muchas gracias por tu visita");
      break;
    default:
      alert("Opción no válida");
      break;
  }
}

// formaTradicional();

// Obtener los datos
const users = JSON.parse(localStorage.getItem("users")) || [];

// Lógica
function loginLogic(username, password) {
  // Buscamos al usuario en nuestro array
  const user = users.find((u) => u.username === username);

  // Sino existe, devolvemos error y un mensaje detallado
  if (!user) {
    return {
      success: false,
      message: "Usuario no encontrado",
    };
  }

  // Sino coincide la contraseña existe, devolvemos error y un mensaje detallado
  if (user.password !== password) {
    return {
      success: false,
      message: "Contraseña incorrecta",
    };
  }

  // Si todo salió bien devolvemos true
  return {
    success: true,
  };
}

function registerLogic(username, password) {
  // Chequeamos que el usuario exista
  const userExists = users.find((user) => user.username === username);

  // Si existe, devuelve un error
  if (userExists) {
    // alert("Nombre de usuario ya existe");
    return {
      success: false,
      message: "Usuario ya existe",
    };
  }

  // Creamos el objeto de usuario
  const user = {
    username,
    password,
  };

  // Agregamos el usuario al array
  users.push(user);

  // Guardamos el usuario en el LocalStorage
  localStorage.setItem("users", JSON.stringify(users));

  return {
    success: true,
  };
}

function showMessage(message, type, element) {
  const sign = document.getElementById(element);

  sign.innerText = message;

  switch (type) {
    case "error":
      sign.classList.add("alert-danger");
      sign.classList.remove("alert-success");
      break;
    case "success":
      sign.classList.add("alert-success");
      sign.classList.remove("alert-danger");
      break;
  }
}

// Listeners (Escuchadores)
const login = document.getElementById("login");
const register = document.getElementById("register");

login.addEventListener("click", (e) => {
  // Evitamos que la página recargue
  e.preventDefault();

  // Obtener datos del formulario
  const username = document.getElementById("login-username");
  const password = document.getElementById("login-password");

  // Validamos que los campos contengan texto
  if (!username.value || !password.value) {
    // alert("Los campos no pueden estar vacios");
    // Enviamos un mensaje al DOM
    showMessage("Los campos no pueden estar vacíos", "error", "mensaje-login");
    return;
  }

  const result = loginLogic(username.value, password.value);

  if (!result.success) {
    // Si hubo un error, envia un mensaje detallado
    showMessage(
      `Hubo un error al iniciar sesión: ${result.message}`,
      "error",
      "mensaje-login"
    );
  } else {
    // Si salió todo bien, envía un mensaje de exito
    showMessage(`Se inició sesión correctamente`, "success", "mensaje-login");

    // Vaciamos el formulario
    username.value = "";
    password.value = "";

    localStorage.setItem("isLogged", true);

    // Espera unos segundos y redirige al usuario
    setTimeout(() => {
      location.href = "http://127.0.0.1:5500/after_class/auth.html";
    }, 2000);
  }
});

register.addEventListener("click", (e) => {
  // Evitamos que la página recargue
  e.preventDefault();
  // Obtener datos del formulario
  const username = document.getElementById("register-username");
  const password = document.getElementById("register-password");

  if (!username.value || !password.value) {
    // alert("Los campos no pueden estar vacios");
    showMessage(
      "Los campos no pueden estar vacíos",
      "error",
      "mensaje-register"
    );
    return;
  }

  const result = registerLogic(username.value, password.value);

  if (!result.success) {
    showMessage(
      `Hubo un error al registrar el usuario: ${result.message}`,
      "error",
      "mensaje-register"
    );
    return;
  } else {
    showMessage(
      "Usuario registrado satisfactoriamente",
      "success",
      "mensaje-register"
    );

    // Vaciamos el formulario
    username.value = "";
    password.value = "";
    return;
  }
});

// Logica login
const isLogged = localStorage.getItem("isLogged") || false;

if (isLogged === "true") {
  alert("Redirigiendo a la pagina correspondiente");
  location.href = "http://127.0.0.1:5500/after_class/auth.html";
}
