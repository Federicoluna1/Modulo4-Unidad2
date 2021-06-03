const express = require('express');
const app = express();

const qy = require('../database')

const {equiposPost, equiposGet, equiposGetById, equiposPutById, equiposDeleteById} = require('./routes/controllers/equipos')

app.post('/equipos',equiposPost);
app.get('/equipos',equiposGet);
app.get('/equipos/:id',equiposGetById);
app.put('/equipos/:id', equiposPutById);
app.delete('/equipos/:id', equiposDeleteById);

