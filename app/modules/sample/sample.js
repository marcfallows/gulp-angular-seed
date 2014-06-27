(function(angular) {
    'use strict';

    angular.module('app.sample', ['ui.router'])
        .config(['$stateProvider', function($stateProvider){
            $stateProvider
                .state('sample', {
                    url: '/sample',
                    templateUrl: 'modules/sample/sample.html'
                });
        }])
        .controller('SampleController', ['$scope', function($scope){
            $scope.name = 'Seed';
        }]);

})(window.angular);