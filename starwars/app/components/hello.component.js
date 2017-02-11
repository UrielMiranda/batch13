(function(){
    'use strict';

    var hello = {
        template: `<h1>{{$ctrl.initial}}</h1>
<h2>{{$ctrl.sw}}</h2>
`,controller: helloCtrl
    };

    angular
        .module("starApp")
        .component("hello",hello);

    function helloCtrl(){
        var hello = this;

        hello.$onInit = onInit;

        function onInit(){
            hello.initial = "welcome";
            hello.sw = "swapi";
        }

    }

})();