const qy = require('../database/database');
const bcrypt = require('bcrypt');

//Registro

const registroPost = async (req, res) => {
    try {
        if(!req.body.usuario || !req.body.clave) {
            throw new Error ('No enviaste todos los datos necesarios');
        }

        let query = 'SELECT * FROM usuarios WHERE usuario = ?';
        let respuesta = await qy(query, [req.body.usuario]);

        if (respuesta > 0 ){
            res.status(400).send ('El nombre de usuario ya existe');
        };
        
        const claveEncriptada = await bcrypt.hash(req.body.clave , 10); 

        query = 'INSERT INTO usuarios (usuario, clave) VALUES (?, ?)';
        respuesta = await qy(query, [req.body.usuario, claveEncriptada]);
            res.send({message: 'Usted se ha registrado satisfactoriamente'});
    }

    catch(e){
        console.error(e.message);
            res.status(500).send({'Error': e.message});
    }
};

//Login

const loginPost = async (req, res) => {
    try {
        if (!req.body.usuario || !req.body.clave) {
            throw new Error ('No enviaste todos los datos necesarios');
        }
        
        let query = 'SELECT * FROM usuarios WHERE usuario =?';
        let respuesta = await qy(query, [req.body.usuario]);

        if (respuesta == 0 ) {
            res.status(400).send ('El nombre de usuario no existe');
        }
        
        if (!bcrypt.compareSync(req.body.clave, respuesta[0].claveEncriptada)) {
            throw new Error ('Fallo el login') 
    };

        const tokenData =  {
        nombre: "Federico", 
        apellido: "Luna",
        usuarioId: 1
    }

        const token = jwt.sign(tokenData, 'Secret', {
        expiresIn: 60*60*24
    })
        res.send({token});
    }
    catch(e){
        console.error(e.message);
            res.status(500).send({'Error': e.message});
    }
};

//Exporto las rutas
module.exports={
    loginPost, registroPost}