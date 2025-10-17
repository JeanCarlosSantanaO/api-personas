//# Repositorios para interactuar con la BD

const Persona = require('../models/persona');

class PersonaRepository {
    async obtenerTodas() {
        return await Persona.findAll();
    }

    async obtenerPorId(id) {
        return await Persona.findByPk(id);
    }

    async crear(persona) {
        return await Persona.create(persona);
    }

    async actualizar(id, datosActualizados) {
        const persona = await this.obtenerPorId(id);
        if (!persona) return null;
        return await persona.update(datosActualizados);
    }

    async eliminar(id) {
        const persona = await this.obtenerPorId(id);
        if (!persona) return null;
        await persona.destroy();
        return persona;
    }


}

module.exports = new PersonaRepository();