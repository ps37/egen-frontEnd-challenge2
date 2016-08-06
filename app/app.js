'use strict';

angular.module('app.directives', []);
angular.module('app.controllers', []);
angular.module('app.data', []);
angular.module('app.services', [
    'app.data'
]);

angular.module('app', [
    'ui.router',
    'app.directives',
    'app.controllers',
    'app.services'
])
.controller("mainController", ['$scope', '$state', function ($scope, $state) {
    var mainCtrl = this;

    $state.go('userList');

    mainCtrl.showMenu = false;
    mainCtrl.toggleMenu = toggleMenu;

    function toggleMenu(){
      mainCtrl.showMenu = !mainCtrl.showMenu;
    };

}]);
