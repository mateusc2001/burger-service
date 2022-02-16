import app from "./app";
// const morgan = require("morgan");

// app.use();
const HOST = true ? 'http://localhost:2020' : 'https://shrouded-meadow-91021.herokuapp.com';

const port = 2020;

app.listen(process.env.PORT || port);

app.get('/home', (req, res) => {
    res.sendFile(`${__dirname}/front/teste.html`);
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

app.post('/pagamento/condicoes', (req, res) => {
    const response = [{"primeiroPagamento":31,"descricaoParcelas":"1x de 15,99","codigoCondicaoPagamento":80,"sequenciaCondicaoPagamento":1,"tipoParcela":1,"quantidadeParcelas":1},{"primeiroPagamento":31,"descricaoParcelas":"2x: 1ª de 8,09 + 1x de 7,90","codigoCondicaoPagamento":85,"sequenciaCondicaoPagamento":1,"tipoParcela":4,"quantidadeParcelas":2},{"primeiroPagamento":31,"descricaoParcelas":"3x: 1ª de 5,39 + 2x de 5,30","codigoCondicaoPagamento":86,"sequenciaCondicaoPagamento":1,"tipoParcela":4,"quantidadeParcelas":3},{"primeiroPagamento":31,"descricaoParcelas":"4x: 1ª de 4,29 + 3x de 3,90","codigoCondicaoPagamento":87,"sequenciaCondicaoPagamento":1,"tipoParcela":4,"quantidadeParcelas":4},{"primeiroPagamento":31,"descricaoParcelas":"5x: 1ª de 3,59 + 4x de 3,10","codigoCondicaoPagamento":88,"sequenciaCondicaoPagamento":1,"tipoParcela":4,"quantidadeParcelas":5},{"primeiroPagamento":31,"descricaoParcelas":"6x: 1ª de 2,99 + 5x de 2,60","codigoCondicaoPagamento":89,"sequenciaCondicaoPagamento":1,"tipoParcela":4,"quantidadeParcelas":6},{"primeiroPagamento":31,"descricaoParcelas":"7x: 1ª de 2,79 + 6x de 2,20","codigoCondicaoPagamento":96,"sequenciaCondicaoPagamento":1,"tipoParcela":4,"quantidadeParcelas":7},{"primeiroPagamento":31,"descricaoParcelas":"8x: 1ª de 2,69 + 7x de 1,90","codigoCondicaoPagamento":97,"sequenciaCondicaoPagamento":1,"tipoParcela":4,"quantidadeParcelas":8},{"primeiroPagamento":31,"descricaoParcelas":"9x: 1ª de 2,39 + 8x de 1,70","codigoCondicaoPagamento":98,"sequenciaCondicaoPagamento":1,"tipoParcela":4,"quantidadeParcelas":9},{"primeiroPagamento":31,"descricaoParcelas":"10x: 1ª de 2,49 + 9x de 1,50","codigoCondicaoPagamento":99,"sequenciaCondicaoPagamento":1,"tipoParcela":4,"quantidadeParcelas":10},{"primeiroPagamento":31,"descricaoParcelas":"11x: 1ª de 1,99 + 10x de 1,40","codigoCondicaoPagamento":100,"sequenciaCondicaoPagamento":1,"tipoParcela":4,"quantidadeParcelas":11},{"primeiroPagamento":31,"descricaoParcelas":"12x: 1ª de 1,69 + 11x de 1,30","codigoCondicaoPagamento":101,"sequenciaCondicaoPagamento":1,"tipoParcela":4,"quantidadeParcelas":12}];
    res.json(response);
});

app.get('/teste', (req, res) => {
    res.status(412).json([
        {
            "code": null,
            "message": "Senha incorreta. 1 tentativa restante.",
            "detail": "INVALID_PASSWORD",
            "field": null
        }
    ]);
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