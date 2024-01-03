/* funciones anteriores
let nombre = function(Parametros){
    //   codigo a ejecutar
}

*/

let funcionFlecha = () => {
    //codigo a ejecutar
    console.log("esto es una funcion flecha");
    return 8<=8;
}

console.log(funcionFlecha());

/*
const NOMBRE = (Parametros) =>{
    //   codigo a ejecutar
}
cuando se declara una funcion como constante lo que implica es que la funcion
una vez cargada en la memoria no cambiara de posicion en esta
*/


//calcular el Area de un circulo 

let areaCirculo = (radio) => {
    return 3.1416*(radio**2)
}

console.log(areaCirculo(8));

const funcion1 = texto => console.log(texto);
funcion1("holaaaaaaaaaa");

const funcion2 = (a,b) => a+b;
console.log(funcion2(25,10));

const funcion3 = () => ({nombre1: "Georgina", nombre2: "victor"});
console.log(funcion3());