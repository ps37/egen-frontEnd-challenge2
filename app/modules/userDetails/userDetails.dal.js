(function(){
    "use strict";

    angular
        .module('app.data')
        .factory('userDetailsDAL', userDetailsDAL);

    userDetailsDAL.$inject = ['$http', '$q'];

    function userDetailsDAL($http, $q){
        var baseUrl = 'http://mocker.egen.io/';
        return {
            deleteUser: function(userId){
                var deferred = $q.defer();

                var req = {
                    method:'DELETE',
                    url: baseUrl + 'users/' + userId,
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
