const {connection} = require('../app');
const util = require('util');

const qy = util.promisify(connection.query).bind(connection);

app.post ('/registro',  async (req, res) => {
    try {
        if(!req.body.usuario || req.body.clave || req.body.email) {
        throw new Error ('No enviaste todos los datos necesarios');
        }

        let query = 'SELECT * FROM suscriptores WHERE usuario = req.body.usuario';
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
},
app.listen (3000, ()=>{
    console.log ('Servidor escuchando en el puerto 3000')
}));