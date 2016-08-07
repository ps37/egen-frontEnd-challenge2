(function () {
    "use strict";

    angular
        .module('app')
        .config(routesConfig);

    routesConfig.$inject = ['$stateProvider'];

    function routesConfig($stateProvider) {

        $stateProvider
            .state('userList', {
                url: '/userList',
                templateUrl: 'modules/userList/userList.html',
                controller: 'userListController',
                controllerAs: 'userListCtrl',
                params: {fetchFromServer: true}
            })
            .state('userDetails', {
                url: '/userDetails',
                templateUrl: 'modules/userDetails/userDetails.html',
                controller: 'userDetailsController',
                controllerAs: 'userDetailsCtrl',
                resolve:{
                    userDetails: function(customStorage){
                        return customStorage.getUserDetails();
                    }
                }
            })
            .state('createUser', {
                url: '/createUser',
                templateUrl: 'modules/createUser/createUser.html',
                controller: 'createUserController',
                controllerAs: 'createUserCtrl'
            });
    }
})();
