"use strict";

angular.module('app.directives')
    .directive('egenNavHeader', function () {
        return {
            restrict: 'AE',
            templateUrl: "directives/egenNavHeader/egenNavHeader.html",
            replace: true
        };//directive definition object
    });
