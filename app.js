const express = require('express');
const app = express();
app.use(express.json());

const PORT = process.env.PORT ? process.env.PORT : 3000;

//Rutas importadas 
const {equiposPost, equiposGet, equiposGetById, equiposPutById, equiposDeleteById} = require('./routes/equipos')
const {jugadoresPost, jugadoresGet, jugadoresGetById, jugadoresGetByEquipos, jugadoresGetByEquiposAndId, jugadoresPutById, jugadoresDeleteById} = require('./routes/jugadores')
const {registroPost, loginPost} = require('./registroLogin/registroLogin');

//Request Login
app.post('/registro', registroPost);
app.post('/login', loginPost);

//Requests de Equipos
app.post('/equipos',equiposPost);
app.get('/equipos',equiposGet);
app.get('/equipos/:id',equiposGetById);
app.put('/equipos/:id', equiposPutById);
app.delete('/equipos/:id', equiposDeleteById);

//Requests de Jugadores
app.post('/jugadores', jugadoresPost);
app.get('/jugadores', jugadoresGet);
app.get('/jugadores/:id', jugadoresGetById);
app.get('/jugadores/:id/equipos', jugadoresGetByEquipos);
app.get('/jugadores/:id/equipos/:id', jugadoresGetByEquiposAndId);
app.put('/jugadores/:id', jugadoresPutById);
app.delete('/jugadores/:id', jugadoresDeleteById);

app.listen (PORT, ()=>{
    console.log ('Servidor escuchando en el puerto' + PORT)
});
        