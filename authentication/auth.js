const jwt = require('jsonwebtoken');

const verificarLogin = (req, res, next ) => {
    try {         
    const token = req.headers['authorization']
        
    if(!token){
        throw new Error('No estas logueado');
    } 
    
    token = token.replace('Bearer', '')

    jwt.verify(token, 'Secret', (err, user) => { 
    if (err) {
        throw new Error('Token invalido');
    }
});

    next();
}
catch(e){
            console.error(e.message);
                res.status(500).send({'Error': e.message});
    };
}