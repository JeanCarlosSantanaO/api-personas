 // Configuración (ej. conexión a BD)
require('dotenv').config();
const { Sequelize } = require('sequelize');
const tedious = require('tedious');



// Configuración de la base de datos con Sequelize
const sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASSWORD,
    {
        host: process.env.DB_HOST,
        port: process.env.DB_PORT || 1433, // Puerto para SQL Server
        dialect: 'postgres', // Usando PostgreSQL
        logging: false, // Desactivar logging para producción
    }
);

module.exports = sequelize;