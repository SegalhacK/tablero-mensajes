const Comment = require('./comment');

module.exports = (sql, type) => sql.define('Message', {
    id: {
        type: type.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: type.STRING,
        allowNull: false
    },
    continent: {
        type: type.STRING,
        allowNull: false
    }
});

Message.hasMany(Comment)