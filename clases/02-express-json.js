const express = require("express");
const pkg = require("./package.json");

const server = express();

const users = [
  { id: 1, name: "Javier", age: 29, active: true },
  { id: 2, name: "Daniel", age: 22, active: true },
  { id: 3, name: "Maria", age: 27, active: false },
  { id: 4, name: "Almudena", age: 25, active: true },
  { id: 5, name: "Roberto", age: 42, active: false },
];

server.get("/user/:id", (req, res) => {
  /*console.log(req.params.id);
  console.log(typeof req.params.id);
  console.log(Number(req.params.id));
  console.log(typeof Number(req.params.id));
  console.log(+req.params.id);
  console.log(typeof +req.params.id); */
  const id = +req.params.id;
  const [user] = users.filter((user) => user.id === id);
  res.status(200).send(user);
});

server.delete("/user/:id", (req, res) => {
  const id = +req.params.id;
  const allUsers = users.filter((user) => user.id !== id);
  res.status(400).send(allUsers);
});

server.get("/health", (req, res) => {
  res.status(200).send({
    bd: "down",
    server: "up",
    version: pkg.version,
  });
});

server.listen(4000);
