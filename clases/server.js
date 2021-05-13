// Modulo necesario para empezar a configurar el servidor.
const express = require("express");

// Inicialización del servidor, similar al createServer nativo.
const server = express();

// Sirve archivos estáticos, el primer parametro es la ruta donde lo va a servir, y el segundo donde se encuentran los archivos estáticos
server.use("/", express.static("public"));

// El método listen sirve para escuchar el servidor en un puerto determinado.
server.listen(4000);
