const express = require('express');
const router = express.Router();

const qy = require('../../database');

//Login

const loginPost = async (req, res) => {
    try {
        if (!req.body.usuario || req.body.clave) {
            throw new Error ('No enviaste todos los datos necesarios');
        }
        
        let query = 'SELECT * FROM usuarios WHERE usuario = req.body.usuario';
        let respuesta = await qy (query, [req.body.usuario]);

        if (query == 0 ) {
            res.status(400).send ('El nombre de usuario no existe');
        }
        
        if (!bcrypt.compareSync(req.body.clave, respuesta[0].claveEncriptada)) {
            throw new Error ('Fallo el login');
        }
    }


    catch(e){
        console.error(e.message);
            res.status(500).send({'Error': e.message});
    }
};

//Registro

const registroPost = async (req, res) => {
    try {
        if(!req.body.usuario || req.body.clave) {
            throw new Error ('No enviaste todos los datos necesarios');
        }

        let query = 'SELECT * FROM usuarios WHERE usuario = req.body.usuario';
        let respuesta = await qy (query, [req.body.usuario]);

        if (respuesta > 0 ){
            res.status(400).send ('El nombre de usuario ya existe');
        };

        const claveEncriptada = await bcrypt.hash(req.body.clave , 10); 
        const usuarioNuevo  = {
            usuario : req.body.usuario,
            clave : claveEncriptada,
        }
    }
    catch(e){
        console.error(e.message);
            res.status(500).send({'Error': e.message});
    }
};

//Exporto las rutas
module.exports={
    loginPost, registroPost}
