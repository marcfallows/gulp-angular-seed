(function(angular) {
    'use strict';

    angular.module('app', ['ui.router', 'app.sample'])
        .config(function($urlRouterProvider){
            $urlRouterProvider.otherwise('sample');
        });

})(window.angular);