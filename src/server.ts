import app from "./app";
// const morgan = require("morgan");

// app.use();

const port = 2020;
app.listen(port);
console.log(`Ambiente de desenvolvimento rodando: http://localhost:${port}`)