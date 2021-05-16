const loadData = () => {
  fetch("http://localhost:4000/random")
    .then((response) => response.json())
    .then((randomJoke) => {
      const container = document.querySelector("#jokes");
      container.innerHTML = `  <div>
                        <h3>${randomJoke.joke}</h3>
                    </div>`;
    });
};
