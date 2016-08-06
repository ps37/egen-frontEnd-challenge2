'use strict';

angular.module('app.directives', []);
angular.module('app.controllers', []);
angular.module('app.data', []);
angular.module('app.services', [
    'app.data'
]);

// Declare app level module which depends on views, and components
angular.module('app', [
    'ui.router',
    'app.directives',
    'app.controllers',
    'app.services'
])

    .config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
        //$urlRouterProvider.otherwise('/userList');
    }])

    .controller("mainController", ['$scope', '$state', function ($scope, $state) {
        var mainCtrl = this;

        $state.go('userList');
    }]);
