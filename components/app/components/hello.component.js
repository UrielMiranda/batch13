(function(){
    'use strict';

    var helloWorld = {
        bindings: {
            nombre: "<",
            apellido: "<"
        },
        templateUrl: "./app/components/hello.component.html",
        controller: helloCtrl
    };

    angular
        .module("myApp")
        .component("helloWorld",helloWorld)

    function helloCtrl(){
        var vm = this;

        vm.saludo = "Hola Mundo";
        // vm.nombre = "Uriel"
    }



})();