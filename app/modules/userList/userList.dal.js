(function(){
    "use strict";

    angular
        .module('app.data')
        .factory('userListDAL', userListDAL);

    userListDAL.$inject = ['$http', '$q'];

    function userListDAL($http, $q){
        var baseUrl = 'http://mocker.egen.io/';
        return {
            getUserList: function(){
                var deferred = $q.defer();

                var req = {
                    method:'GET',
                    url: baseUrl + 'users'
                };
                $http(req).success(function(data){
                    deferred.resolve(data);
                })
                .error(function(error){
                    console.log(error);
                    deferred.reject(error);
                });
                return deferred.promise;
            }
        };
    }

})();
