//Arreglo
const arreglo = ["Celeste", "Rueda", 28, "Argentina"];

//Funcion
const mostrarDatos = ([nombre, apellido, , pais, provincia = "No especificado"] = arreglo) => console.log(provincia);

mostrarDatos();