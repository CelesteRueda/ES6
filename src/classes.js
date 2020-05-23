class Usuario {
    constructor(nombre, correo, edad){
        this.nombre = nombre,
        this.correo = correo,
        this.edad = edad
    }
    mostrarDatos(){
        return `
        Nombre: ${this.nombre} <br/>
        Correo: ${this.correo} <br/>
        Edad: ${this.edad} <br/>
        <hr/>
        `;
    }
}

const celeste = new Usuario ("Celeste", "chele.rueda@gmail.com", "28 años");
document.write(celeste.mostrarDatos());

const facundo = new Usuario ("Facundo", "bla bla", "30 años");
document.write(facundo.mostrarDatos()); 
