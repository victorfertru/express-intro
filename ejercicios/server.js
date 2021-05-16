console.log("Server File");

const express = require("express");

const server = express();

server.use(express.static("public"));

const { randomJoke } = require("./utils/randomJoke");
const fs = require("fs");

// jokes
const jokesList = [
  {
    id: 0,
    joke: "Me caen bien los submarinistas porque en el fondo son buena gente.",
  },
  {
    id: 1,
    joke: "Quiero morir dormido y tranquilo como mi abuelo, no como los pasajeros que gritaban en el autobús.",
  },
  {
    id: 2,
    joke: "No peleé mi camino a la cima de la cadena alimenticia para ser un vegetariano.",
  },
  {
    id: 3,
    joke: "La diferencia entre un medidor de temperatura oral y uno rectal es el sabor.",
  },
  {
    id: 4,
    joke: "Si Dios nos está mirando, lo menos que podemos hacer es ser graciosos.",
  },
  {
    id: 5,
    joke: "No he hablado con mi mujer en años, no he querido interrumpirla.",
  },
  {
    id: 6,
    joke: "Nunca, bajo ninguna circunstancia tomes una pastilla para dormir y un laxante al mismo tiempo.",
  },
  {
    id: 7,
    joke: "-Estás obsesionado con la comida. -No sé a qué te refieres croquetamente.",
  },
  {
    id: 8,
    joke: "Un mago después de comer siempre se queda 'magordito'.",
  },

  {
    id: 9,
    joke: "Una familia ocupó un terreno en Hawaii. Ahora a ver quién es el valiente que los desaloha.",
  },
];

// show all jokes list
server.get("/jokes/", (req, res) => {
  res.send(jokesList);
});

// show joke by id
server.get("/joke/:id", (req, res) => {
  const id = +req.params.id;
  const [joke] = jokesList.filter((chiste) => chiste.id === id);
  res.send(joke);
});

// show random joke
server.get("/random", (req, res) => {
  const randomJ = randomJoke(jokesList);
  res.send(randomJ);
});

server.listen(4000);
