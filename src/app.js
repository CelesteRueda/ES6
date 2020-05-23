import {mensajeAlerta} from './modulos/mensajeAlerta';
import {Persona} from './modulos/clasePersona';

mensajeAlerta('Hola mundo!'); 

const celeste = new Persona ('Celeste Rueda', 28);
celeste.mostrarInfo();

/*
Cuando exportamos colocando 'export default' al momento de importar se pueden omitir las llaves y tambien
se puede llamar la clase de cualquier otra manera, no hace falta respetar el nombre de origen 
*/