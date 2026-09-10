import express from "express"

const app = express();
const port = 3000;
app.use(express.json());


app.get('/api/lista', (req, res) => {

    const lista = ["Celsius para fahrenheit", "Fahrenheit para celsius", "Celsius para Kelvin"]

    res.send({ lista });
});

app.post('/api/cf', (req, res) => {

    const celsius = req.body.celsius;
    const fahrenheit = celsius * 9/5 + 32
    res.send( {fahrenheit} )

});

app.post('/api/fc', (req, res) => {

    const fahrenheit = Number(req.body.fahrenheit);
    const celsius = (fahrenheit - 32) * 5/9;
    res.send( {celsius} );


});

app.post('/api/ck', (req, res) => {

    const celsius = Number(req.body.celsius);
    const kelvin = celsius + 273.15;
    res.send( {kelvin} )

});


app.listen(port, (req, res) => {

    console.log(`Servidor rodando em http://localhost:${port}`)
    

});