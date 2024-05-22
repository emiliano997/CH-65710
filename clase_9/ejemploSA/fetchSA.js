async function getUsers() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await response.json();

  const app = document.getElementById("app");

  data.forEach((user) => {
    const div = document.createElement("div");
    div.innerHTML = `
      <h3>${user.name}</h3>
      <p>${user.email}</p>
    `;
    div.className = "card";
    app.appendChild(div);
  });

  Toastify({
    text: "Usuarios cargados",
    duration: 3000,
    close: true,
    gravity: "bottom", // `top` or `bottom`
    position: "right", // `left`, `center` or `right`
    stopOnFocus: true, // Prevents dismissing of toast on hover
    style: {
      background: "#585c99",
    },
  }).showToast();
}

Swal.fire({
  icon: "question",
  title: "¿Deseas obtener la lista de usuarios?",

  showCancelButton: true,
  confirmButtonText: "Si, quiero ver los usuarios",
  cancelButtonText: "No, gracias",
  background: "#fff url(./img/fondo.jpg)",
  color: "#fff",
}).then((result) => {
  if (result.isConfirmed) {
    getUsers();
  }
});
