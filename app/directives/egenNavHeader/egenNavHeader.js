"use strict";

angular.module('app.directives')
    .directive('egenNavHeader', function () {
        return {
            restrict: 'AE',
            templateUrl: "../app/directives/egenNavHeader/egenNavHeader.html",
            replace: true
        };//directive definition object
    });
