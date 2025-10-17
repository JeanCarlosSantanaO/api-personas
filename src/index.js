// Importaciones y configuración general de la aplicación.
require('dotenv').config();// Para cargar variables de entorno desde un archivo .env
const express = require('express');
const sequelize = require('./config/database'); // Importar la configuración de la base de datos
const personaRoutes = require('./routes/personaRoutes'); // Importar las rutas de Persona


const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json()); // Middleware para parsear JSON


// Probar conexión y sincronizar modelos antes de iniciar el servidor
sequelize.authenticate()
    .then(() => {
        console.log('Conexión a la base de datos establecida exitosamente.');
        return sequelize.sync();
    })
    .then(() => {
        console.log('Modelos sincronizados con la base de datos.');

        // Definición de rutas
        app.use('/api/personas', personaRoutes);

        // Ruta de prueba
        app.get('/', (req, res) => {
            res.send('La API está funcionando.');
        });

        // Iniciar el servidor
        app.listen(PORT, () => {
            console.log(`Servidor escuchando en http://localhost:${PORT}`);
        });
    })
    .catch(err => {
        console.error('Error al conectar o sincronizar la base de datos:', err);
    });


