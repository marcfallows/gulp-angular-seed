(function(angular) {
    'use strict';

    angular.module('app', ['ui.router', 'app.sample'])
        .config(['$urlRouterProvider', function($urlRouterProvider){
            $urlRouterProvider.otherwise('sample');
        }]);

})(window.angular);