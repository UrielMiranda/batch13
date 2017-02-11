(function(){
    'use strict';

    var heroes = {
        templateUrl: './app/components/character.component.html',
        controller: marvelCtrl
    };

    angular
        .module("marvelApp")
        .component("myHeroes",heroes);

    marvelCtrl.$inject = ["apiMarvel"];
    function marvelCtrl(apiMarvel){
        var hero = this;

        hero.$onInit = onInit;
        hero.$onDestroy = onDestroy;

        function onDestroy(){
            console.log('chau');
        }

        function onInit(){
            hero.characters = null;
            hero.apiData = apiMarvel.get()
                .$promise.then(function (response) {
                    hero.characters = response.data.results;
                })
        }
    }

})();