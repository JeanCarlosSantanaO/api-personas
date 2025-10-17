const PersonaRepository = require('../respositories/persona.repository');
const PersonaDTO = require('../dtos/personaDto');
//# Servicios para la lógica de negocio relacionada con Persona

class PersonaService {
    async obtenerTodas() {
        const personas = await PersonaRepository.obtenerTodas();
        return personas.map(persona => new PersonaDTO(persona));
    }

    async obtenerPorId(id) {
        const persona = await PersonaRepository.obtenerPorId(id);
        return persona ? new PersonaDTO(persona) : null;
    }

    async crear(persona) {
        const nuevaPersona = await PersonaRepository.crear(persona);
        return new PersonaDTO(nuevaPersona);
    }

    async actualizar(id, datosActualizados) {
        const personaActualizada = await PersonaRepository.actualizar(id, datosActualizados);
        return personaActualizada ? new PersonaDTO(personaActualizada) : null;
    }

    async eliminar(id) {
        const personaEliminada = await PersonaRepository.eliminar(id);
        return personaEliminada ? new PersonaDTO(personaEliminada) : null;
    }
}

module.exports = new PersonaService();