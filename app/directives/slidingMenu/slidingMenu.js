"use strict";

angular.module('app.directives')
    .directive('slidingMenu', function () {
        return {
            restrict: 'AE',
            templateUrl: "../app/directives/slidingMenu/slidingMenu.html",
            replace: true
        };//directive definition object
    });
