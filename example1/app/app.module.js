(function(){
    'use strict';

    angular
        .module("myApp",[])
        .controller("myCtrl",myCtrl);

    function myCtrl(){
        var vm = this;

        vm.movies = [
            {"title": "StarWars", "age" : 1970 },
            {"title": "StarWarsII", "age" : 1980 }
        ]

    }

})();
