const isLogged = Boolean(localStorage.getItem("isLogged")) || false;

if (!isLogged) {
  alert("No podes entrar aca");
  location.href = "http://127.0.0.1:5500/after_class/index.html";
}

// Logica logout
const logout = document.getElementById("logout");

logout.addEventListener("click", () => {
  localStorage.setItem("isLogged", false);
  location.href = "http://127.0.0.1:5500/after_class/index.html";
});
