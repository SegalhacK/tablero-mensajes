const message = require('./message')

module.exports = (sql, type) => sql.define('Comment', {
    id: {
        type: type.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: type.STRING,
        allowNull: false
    },
    content: {
        type: type.TEXT,
        allowNull: false
    }
});

Comment.belongsTo(message);