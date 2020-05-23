const usuario = {
    nombre: "Celeste",
    apellido: "Rueda",
    correo: "chele.rueda@gmail.com",
    edad: "28 años"
}

const mostrarDatos = ({nombre, ocupacion = "No especificado"}) => console.log(`${nombre} es ${ocupacion}`);

mostrarDatos(usuario);