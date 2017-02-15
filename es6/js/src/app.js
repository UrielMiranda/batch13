let hola = "hello";
console.log(hola);

function promedio(...numeros){
    const suma = numeros.reduce(function(acc,value){
        return acc + value;
    }, 0);
    console.log(suma/numeros.length);
    return suma / numeros.length;

}
promedio(9,10,7,5);