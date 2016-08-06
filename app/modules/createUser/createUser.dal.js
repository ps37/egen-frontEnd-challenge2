(function(){
    "use strict";

    angular
        .module('app.data')
        .factory('createUserDAL', createUserDAL);

    createUserDAL.$inject = ['$http', '$q'];

    function createUserDAL($http, $q){
        var baseUrl = 'http://mocker.egen.io/';
        return {
            createUser: function(user){
                var deferred = $q.defer();

                var req = {
                    method:'POST',
                    url: baseUrl + 'users',
                    data: user
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
