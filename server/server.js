require('./config/config');
const express = require('express');
const mongoose = require('mongoose');
const path = require('path');

const app = express();
const bodyParser = require('body-parser');


// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

// Habilitar Public
app.use(express.static(path.resolve(__dirname, '../public')));

// Configuración Global de Rutas
app.use(require('./routes/index'));

mongoose.connect(process.env.URLDB, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
}, (err) => {

    if (err) throw err;
    console.log('Basde de datos ONLINE');

});

app.listen(process.env.PORT, () => {
    console.log('Escuchando puerto', process.env.PORT);
});