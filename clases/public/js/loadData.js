window.addEventListener("load", () => {
  loadData();
});

const loadData = () => {
  fetch("https://pokeapi.co/api/v2/pokemon?limit=100&offset=0")
    .then((response) => response.json())
    .then(({ results }) => {
      const container = document.querySelector("#data");
      const pokemons = results
        .map((pokemon) => {
          return `  <div>
                        <h3>${pokemon.name}</h3>
                    </div>`;
        })
        .join(" ");
      container.innerHTML = pokemons;
    });
};
