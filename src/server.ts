import app from "./app";
// const morgan = require("morgan");

// app.use();
const HOST = true ? 'http://localhost:2020' : 'https://shrouded-meadow-91021.herokuapp.com';

const port = 2020;

app.listen(process.env.PORT || port);

app.get('/home', (req, res) => {
    res.sendFile(`${__dirname}/front/index.html`);
});

app.get('/cadastro/promocoes', (req, res) => {
    res.sendFile(`${__dirname}/front/cadastro.html`);
});

app.get('/script/:fileName', (req, res) => {
    const fileName = req.params.fileName;
    res.sendFile(`${__dirname}/front/${fileName}`);
});

app.get('/image/:fileName', (req, res) => {
    const fileName = req.params.fileName;
    res.sendFile(`${__dirname}/assets/${fileName}`);
});

app.get('/promocoes', (req, res) => {
    res.json([
        {
            img: `${HOST}/image/hamburger.jpg`,
            description: "Nessa quarta-feira, hemburger 65% off",
            value: 20.90
        },
        {
            img: `${HOST}/image/suco.jpg`,
            description: "Nessa sexta-feira 25% off",
            value: 10.90
        },
        {
            img: `${HOST}/image/dog.jpg`,
            description: "Nessa sexta-feira 25% off",
            value: 10.90
        },
    ]);
});

console.log(`Ambiente de desenvolvimento rodando: http://localhost:${port}`)