const express = require('express');

const router = express.Router()

const {equiposPost, equiposGet, equiposGetById, equiposPutById, equiposDeleteById} = require('./controllers/equipos')

router.post('/',equiposPost);
router.get('/',equiposGet);
router.get('/:id',equiposGetById);
router.put('/:id', equiposPutById);
router.delete('/:id', equiposDeleteById);

module.exports = router
