const mensaje = "No completo el campo";
function nuevoUsuario (nombre = mensaje, apellido = mensaje, edad = mensaje){
    return `Nombre: ${nombre}, Apellido: ${apellido}, Edad: ${edad}`;
}
console.log(nuevoUsuario("Celeste","Rueda","28 años"));