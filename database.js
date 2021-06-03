const mysql = require('mysql');
const util = require('util');

//Conexion con Base de datos
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password:'',
    database: 'planteles'
});


//Error en la conexion
connection.connect((error)=>{
    if(error) {
        throw error;
    }
    console.log ('Conexión con base de datos mysql establecida');
});;

const qy = util.promisify(connection.query).bind(connection);

module.exports = qy;