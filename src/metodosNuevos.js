//Nuevos Metodos con ECMASCRIPT 6 

const texto = 'Hola Mundo';

console.log(texto, 'empieza con a:', texto.startsWith('a'));

console.log(texto, 'termina con o:', texto.endsWith('o'));

console.log(texto, 'incluye la palabra Mundo:', texto.includes('Mundo'));

const amigas = ['Carlu', 'Belenis', 'Rolanda'];

console.log(amigas.includes('Francis'));

console.log(amigas.find(amiga => amiga.length>5));

console.log(amigas.findIndex(amiga => amiga === 'Rolanda'));