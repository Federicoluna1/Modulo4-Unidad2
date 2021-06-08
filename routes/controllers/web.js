const express = require('express');
const router = express.Router();

const qy = require('../../database');

const bcrypt = require('bcrypt');

//Login

const loginPost = async (req, res) => {
    try {
        if (!req.body.usuario || req.body.clave) {
            throw new Error ('No enviaste todos los datos necesarios');
        }
        
        let query = 'SELECT * FROM usuarios WHERE usuario =?';
        let respuesta = await qy(query, [req.body.usuario]);

        if (respuesta == 0 ) {
            res.status(400).send ('El nombre de usuario no existe');
        }
        
        if (!bcrypt.compareSync(req.body.clave, respuesta[0].claveEncriptada)) {
            throw new Error ('Fallo el login');
        }
        res.redirect('/login');
    }

    catch(e){
        console.error(e.message);
            res.status(500).send({'Error': e.message});
    }
};

//Registro

const registroPost = async (req, res) => {
    try {
        if(req.body.usuario.lenght || req.body.clave.lenght == 0) {
            throw new Error ('No enviaste todos los datos necesarios');
        }

        let query = 'SELECT * FROM usuarios WHERE usuario = ?';
        let respuesta = await qy(query, [req.body.usuario]);

        if (respuesta > 0 ){
            res.status(400).send ('El nombre de usuario ya existe');
        };
    
        const usuario = req.body.usuario;
        const clave = req.body.clave;
        
        const claveEncriptada = await bcrypt.hash(req.body.clave , 10); 
        const usuarioNuevo  = {
            usuario : req.body.usuario,
            clave : claveEncriptada,
        }

        query = 'INSERT INTO usuarios (usuario, clave) VALUE (?, ?)';
        respuesta = await qy(query, [usuario, claveEncriptada]);
            res.redirect('/login');
    }

    catch(e){
        console.error(e.message);
            res.status(500).send({'Error': e.message});
    }
};

//Exporto las rutas
module.exports={
    loginPost, registroPost}
