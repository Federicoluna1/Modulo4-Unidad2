const express = require('express');

const router = express.Router()

const {loginPost, registroPost} = require('./controllers/web');

router.post('/',loginPost);
router.get('/',registroPost);

module.exports = router
