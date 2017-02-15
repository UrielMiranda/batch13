"use strict";

var hola = "hello";
console.log(hola);

function promedio() {
    for (var _len = arguments.length, numeros = Array(_len), _key = 0; _key < _len; _key++) {
        numeros[_key] = arguments[_key];
    }

    var suma = numeros.reduce(function (acc, value) {
        return acc + value;
    }, 0);
    console.log(suma / numeros.length);
    return suma / numeros.length;
}
promedio(9, 10, 7, 5);