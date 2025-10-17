// Rutas para la entidad Persona

const express = require('express');
const router = express.Router();
const PersonaController = require('../controllers/personaController');

router.get('/', (req, res) => PersonaController.obtenerTodas(req, res));
router.get('/:id', (req, res) => PersonaController.obtenerPorId(req, res));
router.post('/', (req, res) => PersonaController.crear(req, res));
router.put('/:id', (req, res) => PersonaController.actualizar(req, res));
router.delete('/:id', (req, res) => PersonaController.eliminar(req, res));

module.exports = router;
