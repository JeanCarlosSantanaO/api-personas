// DTOs (Data Transfer Objects) para la entidad Persona

class PersonaDTO {
    constructor({id, nombre, apellido, cedula, direccion, telefono, email, fechaNacimiento, genero, estadoCivil, nacionalidad, fechaDeRegistro, foto}) {
        this.id = id;
        this.nombre = nombre;
        this.apellido = apellido;
        this.cedula = cedula;
        this.direccion = direccion;
        this.telefono = telefono;
        this.email = email;
        this.fechaNacimiento = fechaNacimiento;
        this.genero = genero;
        this.estadoCivil = estadoCivil;
        this.nacionalidad = nacionalidad;
        this.fechaDeRegistro = fechaDeRegistro;
        this.foto = foto;
    }
}

module.exports = PersonaDTO;