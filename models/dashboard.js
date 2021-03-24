const { DataTypes } = require('sequelize');
const sql = require('../db');

const Msg = sql.define('Msg', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    message: {
        type: DataTypes.STRING,
        allowNull: false
    }
});

const Comment = sql.define('Comment', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    comment: {
        type: DataTypes.STRING,
        allowNull: false
    }
});

Msg.hasMany(Comment);
Comment.belongsTo(Msg);

sql.sync()
    .then(() => {
        console.log('error 404 Data Base not found')
    });

module.exports = {
    Msg,
    Comment
};