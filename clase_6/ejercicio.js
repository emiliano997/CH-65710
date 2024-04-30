class Hamburguesa {
  nombre;
  precio;
  ingredientes;
  numeroCombo;

  constructor(nombre, precio, ingredientes, numeroCombo) {
    this.nombre = nombre;
    this.precio = precio;
    this.ingredientes = ingredientes;
    this.numeroCombo = numeroCombo;
  }
}

// Metodo alternativo
// const hamburguesas = []
// hamburguesas.push(new Hamburguesa("Krusty Burger", 150.0, ["Carne", "Queso"], 1)

const hamburguesas = [
  new Hamburguesa("Krusty Burger", 150.0, ["Carne", "Queso"], 1),
  new Hamburguesa(
    "Krusty Burger Doble",
    225.0,
    ["Carne", "Queso", "Panceta"],
    2
  ),
  new Hamburguesa("Krusty Pollo", 150.0, ["Pollo", "Queso"], 3),
  new Hamburguesa(
    "Krusty Mega balde de Pollo",
    140.0,
    ["Pollo", "Queso", "Aderezo"],
    4
  ),
  new Hamburguesa("Super Krusty", 150.0, ["Carne", "Queso", "huevo"], 5),
  new Hamburguesa("Super Krusty Doble", 180.0, ["Carne", "Queso", "huevo"], 6),
  new Hamburguesa("Super Krusty Triple", 205.0, ["Carne", "Queso", "huevo"], 7),
  new Hamburguesa("Krusty Vegan", 125.0, ["Espinaca", "Soja"], 8),
];

// Hamburguesas millonarias

const hamburguesasMasCaras = hamburguesas.filter((hamb) => hamb.precio > 200);

// console.table(hamburguesasMasCaras);

// Aguante el pollo

// const resultadoPollo = hamburguesas.filter((hamb) =>
//   hamb.nombre.includes("Pollo")
// );

const resultadoPollo = hamburguesas.filter((hamb) =>
  hamb.ingredientes.includes("alitas")
);

if (resultadoPollo.length === 0) {
  console.log(resultadoPollo);
  alert("No coincide");
} else {
  resultadoPollo.forEach((res) => {
    alert(res.nombre);

    console.log(res.precio);
  });
}
