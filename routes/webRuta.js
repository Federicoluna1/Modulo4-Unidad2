const express = require('express');

const router = express.Router()

const {loginPost, registroPost} = require('./controllers/web');

router.post('/login',loginPost);
router.post('/registro',registroPost);

module.exports = router
