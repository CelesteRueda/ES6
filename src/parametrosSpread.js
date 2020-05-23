//parametro Rest recibe los argumentos
const mostrarDatos = (...datos) => {
    console.log(datos);
}

//parametro Spread envia los argumentos (apartir de un arreglo por ejemplo)
const arregloDatos = ["Celeste Rueda", "28 años", "Estudiante de programación", "Mamá"];
mostrarDatos(...arregloDatos);