const express = require('express');
const app = express();

const qy = require('../database')

const {jugadoresPost, jugadoresGet, jugadoresGetById, jugadoresGetByEquipos, jugadoresGetByEquiposAndId, jugadoresPutById, jugadoresDeleteById} = require('./routes/jugadores')

app.post('/jugadores', jugadoresPost);
app.get('/jugadores', jugadoresGet);
app.get('/jugadores/:id', jugadoresGetById);
app.get('/jugadores/:id/equipos', jugadoresGetByEquipos);
app.get('/jugadores/:id/equipos/:id', jugadoresGetByEquiposAndId);
app.put('/jugadores/:id', jugadoresPutById);
app.delete('/jugadores/:id', jugadoresDeleteById);

