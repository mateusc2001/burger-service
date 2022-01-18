import app from "./app";
// const morgan = require("morgan");

// app.use();

const port = 2020;
app.listen(process.env.PORT || port);

app.get('/home', (req, res) => {
    res.sendFile(`/Users/testemtech/projetos/portifolio/index.html`);
});

app.get('/image/:fileName', (req, res) => {
    const fileName = req.params.fileName;
    res.sendFile(`/Users/testemtech/projetos/portifolio/assets/${fileName}`);
});
console.log(`Ambiente de desenvolvimento rodando: http://localhost:${port}`)