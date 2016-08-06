"use strict";

angular.module('app.directives')
    .directive('egenNavHeader', function () {
        return {
            restrict: 'AE',
            scope: {},
            templateUrl: "../app/directives/egenNavHeader/egenNavHeader.html",
            replace: true,
            link: function (scope, element, attrs) {}//link

        }//directive definition object

    });
