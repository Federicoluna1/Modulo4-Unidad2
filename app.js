const express = require('express');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const unless = require('express-unless');

const app = express();
const port = process.env.PORT ? process.env.PORT : 3000;
        
app.use(express.json());

const equiposRuta = require('./routes/equiposRuta');
const jugadoresRuta = require('./routes/jugadoresRuta');

app.use('/api/equipos', equiposRuta);
app.use('/api/jugadores', jugadoresRuta);

app.use((req, res, next)=>{
    const error = new Error('No se encontro la pagina');
    error.status = 404;
    next(error)
})

app.use((err, req, res, next)=>{
    if(err){consolé.log(err)}
    res.json({'Error': e.message});
    });

app.listen (port, ()=>{
    console.log ('Servidor escuchando en el puerto port')
});


