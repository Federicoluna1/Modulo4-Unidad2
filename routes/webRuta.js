const express = require('express');

const router = express.Router()

const {loginPost, registroPost} = require('./controllers/web');

router.Post('/login',loginPost);
router.post('/registro',registroPost);

module.exports = router
