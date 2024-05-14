// Fetch
// .then
// async await

// .then y .catch
// Esto lo puedo ejecutar en cualquier parte de mi archivo
// fetch("https://jsonplaceholder.typicode.com/posts")
//   .then((response) => response.json()) // Respuesta de la funcion fetch
//   .then((posts) => console.log(posts)) // Resultado del response.json()
//   .catch((error) => console.log(error)); // Capturamos los errores

// async await
// Necesito un entorno de ejecución asincrono
// const getData = async () => {}

function createPostElement(post) {
  const postElement = document.createElement("div");
  postElement.innerHTML = `
    <h3>${post.title}</h3>
    <p>${post.body}</p>
  `;
  postElement.className = "post";
  return postElement;
}

async function createPokemonElement(pokemon) {
  const pokemonElement = document.createElement("div");

  const pokemonResponse = await fetch(pokemon.url);
  const pokemonData = await pokemonResponse.json();
  console.log(pokemonData);

  pokemonElement.innerHTML = `
    <h3>${pokemon.name}</h3>
    <p>Peso: ${pokemonData.weight}</p>
    <img src="${pokemonData.sprites.front_default}" />
  `;
  pokemonElement.className = "pokemon";
  return pokemonElement;
}

async function getData() {
  try {
    // const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    // const posts = await response.json();

    // // Limitar cantidad de posts
    // const postsLimit = posts.slice(0, 15);

    // const postsElement = document.getElementById("posts");

    // postsLimit.forEach((post) => {
    //   const postElement = createPostElement(post);
    //   postsElement.appendChild(postElement);
    // });

    // console.log(postsLimit);

    // Pokeapi
    const pokeResponse = await fetch(
      "https://pokeapi.co/api/v2/pokemon?limit=10"
    );
    const pokemons = await pokeResponse.json();

    const pokemonsElement = document.getElementById("pokemons");

    pokemons.results.forEach(async (pokemon) => {
      const pokemonElement = await createPokemonElement(pokemon);
      pokemonsElement.appendChild(pokemonElement);
    });

    // console.log(pokemons);
    console.log(pokemons.results);
  } catch (error) {
    // Controlo cualquier error que pueda ocurrir
    console.log(error);
  }
}

getData();
