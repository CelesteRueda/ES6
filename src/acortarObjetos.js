const crearObjeto = (nombre, edad) => {
    return {
        nombre,
        edad,
        mostrarDatos(){
            return `${nombre} tiene ${edad} años`;
        }
    }
   
}

console.log(crearObjeto("Celeste", 28).mostrarDatos());
