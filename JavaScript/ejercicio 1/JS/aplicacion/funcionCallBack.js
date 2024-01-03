function sumar(a,b) {
    return a+b;
}

const mensaje = resultado => console.log(`el resultado de la suma de las sumas es ${resultado}`);

function sumaDeSumas(valor1, valor2, valor3, valor4, funcion, imprimir){
    suma1=funcion(valor1,valor2);
    suma2=funcion(valor3,valor4);
    imprimir(funcion(suma1,suma2));
}



sumaDeSumas(5, 64, 38, 67, sumar, mensaje);



function sumaArray(array) {
    return array.reduce((a, b) => a + b, 0);
}

console.log(sumaArray([8,9,10,15,20]))