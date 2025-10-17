// Controladores para la entidad Persona(CRUD)

const PersonaService = require('../services/persona.service');

class PersonaController {
    async obtenerTodas(req, res) {
        try {
            const personas = await PersonaService.obtenerTodas();
            res.json(personas);
        } catch (error) {
            console.error('Error al obtener todas las personas:', error);
            res.status(500).json({ error: 'Error interno del servidor' });
        }
    }

    async obtenerPorId(req, res) {
        const { id } = req.params;
        try {
            const persona = await PersonaService.obtenerPorId(id);
            if (persona) {
                res.json(persona);
            } else {
                res.status(404).json({ error: 'Persona no encontrada' });
            }
        } catch (error) {
            console.error('Error al obtener la persona por ID:', error);
            res.status(500).json({ error: 'Error interno del servidor' });
        }
    }

    async crear(req, res) {
        const nuevaPersona = req.body;
        try {
            const personaCreada = await PersonaService.crear(nuevaPersona);
            res.status(201).json(personaCreada);
        } catch (error) {
            console.error('Error al crear la persona:', error);
            res.status(500).json({ error: 'Error interno del servidor' });
        }
    }

    async actualizar(req, res) {
        const { id } = req.params;
        const datosActualizados = req.body;
        try {
            const personaActualizada = await PersonaService.actualizar(id, datosActualizados);
            if (personaActualizada) {
                res.json(personaActualizada);
            } else {
                res.status(404).json({ error: 'Persona no encontrada' });
            }
        } catch (error) {
            console.error('Error al actualizar la persona:', error);
            res.status(500).json({ error: 'Error interno del servidor' });
        }
    }

    async eliminar(req, res) {
        const { id } = req.params;
        try {
            const personaEliminada = await PersonaService.eliminar(id);
            if (personaEliminada) {
                res.json(personaEliminada);
            } else {
                res.status(404).json({ error: 'Persona no encontrada' });
            }
        } catch (error) {
            console.error('Error al eliminar la persona:', error);
            res.status(500).json({ error: 'Error interno del servidor' });
        }
    }
}

module.exports = new PersonaController();
