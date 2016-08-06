/**
 * Created by Prudhvi on 8/5/16.
 */
(function(){
    "use strict";

    angular
        .module('app.services')
        .service('customStorage', customStorage);

    customStorage.$inject = [];

    function customStorage(){
        this.userList = [];
        this.userDetails = {};

        this.setUserList = function(userList){
            this.userList = userList;
        };
        this.getUserList = function(){
          return this.userList;
        };

        this.setUserDetails = function(userDetails){
            this.userDetails = userDetails;
        };
        this.getUserDetails = function(){
            return this.userDetails;
        }
    }

})();