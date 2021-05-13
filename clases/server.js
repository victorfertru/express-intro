// Modulo necesario para empezar a configurar el servidor.
const express = require("express");
const nerds = require("nerds");
const { capitalize } = require("./utils/stringUtils");

// Inicialización del servidor, similar al createServer nativo.
const server = express();

// Sirve archivos estáticos, el primer parametro es la ruta donde lo va a servir, y el segundo donde se encuentran los archivos estáticos
server.use(express.static("public"));

server.get("/home", (req, res) => {
  res.sendFile("./public/index.html", { root: __dirname });
});

server.get("/bookings", (req, res) => {
  res.sendFile("./public/bookings/bookings.html", { root: __dirname });
});

server.get("/data", (req, res) => {
  // Get all pokemons
  const pokemons = [
    { title: "Pikachu", description: "Es un pokemon de tipo electrico" },
    { title: "Charmander", description: "Es un pokemon de tipo fuego" },
    { title: "Bulbusaur", description: "Es un pokemon de tipo planta" },
    { title: "Squirtle", description: "Es un pokemon de tipo agua" },
  ];
  res.send(pokemons);
});

server.get("/movies/:type/:limit", (req, res) => {
  const { type, limit = 10 } = req.params;
  const capitalizedType = capitalize(type);

  const info = nerds.resolve(capitalizedType, +limit).asArray();
  res.send(info);
});

// El método listen sirve para escuchar el servidor en un puerto determinado.
server.listen(4000);
