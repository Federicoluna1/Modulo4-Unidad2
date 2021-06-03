const express = require('express');

const router = express.Router()

const {jugadoresPost, jugadoresGet, jugadoresGetById, jugadoresGetByEquipos, jugadoresGetByEquiposAndId, jugadoresPutById, jugadoresDeleteById} = require('./routes/jugadores')

router.post('/', jugadoresPost);
router.get('/', jugadoresGet);
router.get('/:id', jugadoresGetById);
router.get('/:id/equipos', jugadoresGetByEquipos);
router.get('/:id/equipos/:id', jugadoresGetByEquiposAndId);
router.put('/:id', jugadoresPutById);
router.delete('/:id', jugadoresDeleteById);

module.exports = router