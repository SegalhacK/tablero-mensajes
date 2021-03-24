const Sequelize = require('sequelize');
const nkey = require('./secret');
const { Message } = require('./models/message');
const { Comment } = require('./models/comment');
const { Dashboard } = require('./models/dashboard')

// Creamos la conexión a la Base de Datos
const sql = new Sequelize('message_board', 'root', nkey.password, {
    host: 'localhost',
    dialect: 'mysql'
});
exports.sql = sql;

// Acá inicializamos los modelos
const Message = Message(sql, Sequelize);
const Comment = Comment(sql, Sequelize);
const Dashboard = Dashboard(sql, Sequelize);

//  después sincronizamos nuestro código con la base de datos
sql.sync()
    .then(() => {
        console.log('Tablas creadas (SI NO EXISTEN) ...');
});

// Con esto exportamos los modelos que queremos
module.exports = {
    Message,
    Comment,
};