const {connection} = require('../app');
const util = require('util');

const qy = util.promisify(connection.query).bind(connection);

app.post ('/login', (req, res) => {
    try {
        if (!req.body.usuario || req.body.clave) {
            throw new Error ('No enviaste todos los datos necesarios');
        }
        
        let query = 'SELECT * FROM suscriptores WHERE usuario = req.body.usuario';
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
},
app.listen (3000, ()=>{
        console.log ('Servidor escuchando en el puerto 3000')
}));