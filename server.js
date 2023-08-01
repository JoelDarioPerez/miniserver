const net = require("net");

function main() {
  // Configurar el servidor
  const host = "localhost";
  const port = 9000;

  // Crear el servidor TCP
  const server = net.createServer((socket) => {
    console.log(
      `Conexión entrante desde ${socket.remoteAddress}:${socket.remotePort}`
    );

    socket.on("data", (data) => {
      // Procesar los datos recibidos (aquí es donde se puede parsear los paquetes GPS)
      // En este ejemplo, solo mostramos los datos recibidos tal cual.
      console.log(
        `Datos recibidos desde ${socket.remoteAddress}:${
          socket.remotePort
        }: ${data.toString()}`
      );
    });

    socket.on("end", () => {
      console.log(
        `Cliente ${socket.remoteAddress}:${socket.remotePort} cerró la conexión.`
      );
    });

    socket.on("error", (err) => {
      console.log(
        `Error en la conexión con ${socket.remoteAddress}:${socket.remotePort}: ${err.message}`
      );
    });
  });

  server.on("error", (err) => {
    console.log(`Error en el servidor: ${err.message}`);
  });

  // Iniciar el servidor y escuchar en el puerto especificado
  server.listen(port, host, () => {
    console.log(`Servidor escuchando en ${host}:${port}...`);
  });
}

main();
