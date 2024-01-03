/*
Sintaxis de una funcion

function nombre (parametro, parametro, ...){
    //codigo a ejecutar
    console.log(algo); // No se toma como un valor retornado, esto sigue ocurriendo dentro de la funcion
    return algo; // Se toma como un valor retornado, significa que lo que haya llamado la funcion recibira 
                    respuesta lo que se retorne.
}
*/


function saludar (nombre, apellido){ //lo que una funcion recibe se le conoce como parametros
    console.log(`saludemos`);
    return (`hola ${concatenar(nombre, apellido)}`);
}

let hola = saludar("juan alberto", "luca Rodriguez") //lo que le paso algo a la funcion se le llama argumento

console.log(hola)

function concatenar (nombre, apellido) { //sin importar en que seccion del codigo se coloque la funcion
    return (`${nombre} ${apellido}`)     //el programa ejecutara la zona de codigo
}


//----------------------------------Funciones como variables---------------------------------------------------------

let saludar2 = function (nombre, apellido) { 
    console.log(`saludemos`);
    return (`hola ${concatenar(nombre, apellido)}`);
}//este tipo de funciones no tiene el beneficio de poder localizarse donde sea puesto que no se aloja en memoria


console.log(saludar2("david","perez"))