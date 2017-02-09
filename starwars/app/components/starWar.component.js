(function(){
    'use strict';

    //Object

    var starWars = {
        templateUrl: './app/components/starWars.component.html',
        controller: starCtrl
    };

    angular
        .module("starApp")
        .component("starWars",starWars);

    starCtrl.$inject = ["starApi"];
    function starCtrl(starApi){
        var star = this;

        star.people = null;
        star.data = starApi.get()
                    .$promise
                    .then(
                        function(response){
                        console.log(response);
                        star.people = response;
        });
    }

})();
