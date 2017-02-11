(function(){
    'use strict';

    angular
        .module("starApp")
        .factory("starApi",starApi);

    // injectar dependencia
    starApi.$inject = ["$resource"];
    function starApi($resource){
        return $resource('http://swapi.co/api/:category/:id');

    }


})();