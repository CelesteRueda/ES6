export const mensajeAlerta = (mensaje) => {
    alert(mensaje);
}

/*
Otras formas de exportar son:

-en vez de poner 'export' delante de lo que queremos exportar, colocar 'export default' 

-sino en vez de poner 'export' delante de lo que queremos exportar, poner al final del archivo por ejemplo:
export {mensajeAlerta};
export default Persona;

Se pueden exportar funciones(como en este caso), arreglos, variables, objetos,etc.

*/