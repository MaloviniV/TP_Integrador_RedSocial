import app from "../app.js";

import dotenv from "dotenv";
const envFile = process.env.NODE_ENV === "production" ? ".env.production" : ".env";
dotenv.config({ path: envFile });

const port = normalizePort(process.env.PORT || 3000);

app.set("port", port); //Configuracion de informacion de la app

const server = app.listen(port);

server.on("error", onError);
server.on("listening", onListening);

function normalizePort(val) {
  const port = parseInt(val, 10);
  if (isNaN(port)) {
    // named pipe
    return val;
  }
  if (port >= 0) {
    // port number
    return port;
  }
  return false;
}

function onError(error) {
  if (error.syscall !== "listen") {
    throw error;
  }
  const bind = typeof port === "string" ? "Pipe " + port : "Port " + port;
  switch (error.code) {
    case "EACCES":
      console.error(bind + " requiere privilegios elevados");
      process.exit(1);
      break;
    case "EADDRINUSE":
      console.error(bind + " ya está en uso");
      process.exit(1);
      break;
    default:
      throw error;
  }
}

function onListening() {
  console.log(`Servidor escuchando en http://localhost:${port}`);
}
