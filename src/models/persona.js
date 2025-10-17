// Modelos de Sequelize

const {DataTypes} = require('sequelize');
const sequelize = require('../config/database');


const Persona = sequelize.define('Persona', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nombre: {
        type: DataTypes.STRING(100),
        allowNull: false
    },
    apellido: {
        type: DataTypes.STRING(100),
        allowNull: false
    },
    cedula: {
        type: DataTypes.STRING(20),
        allowNull: false,
        unique: true
    },
    direccion: {
        type: DataTypes.STRING(200),
        allowNull: true
    },
    telefono: {
        type: DataTypes.STRING(15),
        allowNull: true
    },
    email: {
        type: DataTypes.STRING(100),
        allowNull: true,
        unique: true
    },
    fechaNacimiento: {
        type: DataTypes.DATEONLY,
        allowNull: true
    },
    genero:{
        type: DataTypes.ENUM('Masculino', 'Femenino', 'Otro'),
        allowNull: true
    },
    estadoCivil:{
        type: DataTypes.ENUM('Soltero', 'Casado', 'Divorciado', 'Viudo'),
        allowNull: true
    },
    nacionalidad:{
        type: DataTypes.STRING(50),
        allowNull: true
    },
    fechaDeRegistro: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW
    },
    foto: {
        type: DataTypes.STRING(255),
        allowNull: true
    }
}, {
    tableName: 'Personas',
    timestamps: false
});

module.exports = Persona;