const http = require("http");

const server = http.createServer((request, response) => {
  // console.log(request.headers) Cabeceras enviadas por el navegador.
  // console.log(request.method) Método utilizado en la petición.
  // console.log(request.url); Propiedad para obtener el path donde se ha realizado la consulta.

  // request.writeHead(200, { "Content-type": "application/json" })
  response.writeHead(
    200, // StatusCode
    { "Content-type": "application/json" } // Header Format
  );
  if (request.url.includes("hello")) {
    return response.end("Hello World");
  }
  if (request.url.includes("bye")) {
    return response.end("Bye World");
  }
  return response.end("Not path found");
});

server.listen(4000);
