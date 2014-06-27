(function(angular) {
    'use strict';

    angular.module('app.sample', ['ui.router'])
        .config(function($stateProvider){
            $stateProvider
                .state('sample', {
                    url: '/sample',
                    templateUrl: 'modules/sample/sample.html'
                });
        })
        .controller('SampleController', function($scope){
            $scope.name = "Seed";
        });

})(window.angular);