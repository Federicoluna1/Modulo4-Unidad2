const express = require('express');
const jwt = require('jsonwebtoken');
const unless = require('express-unless');

const app = express();
app.use(express.json());

const verificarLogin = (req, res, next ) => {
    try {         
    const token = req.headers['authorization']
        
    if(!token){
        throw new Error('No estas logueado');
    } 
    
    token = token.replace('Bearer', '')

    jwt.verify(token, 'Secret', (err, user) => { 
    if(err) {
        throw new Error('Token invalido');
    }
})
    next();
}
catch(e){
            console.error(e.message);
                res.status(500).send({'Error': e.message});
    }
};

verificarLogin.unless = unless;

app.use(verificarLogin.unless( {
    path: [
    {url: '/login', methods: ['POST']},
    {url: '/registro', methods: ['POST']}
    ]
    }));
