
angular
    .module('app.controllers')
    .controller('userListController', userListController);

userListController.$inject = [ '$state', '$stateParams', 'userListDAL', 'customStorage'];

function userListController( $state, $stateParams, userListDAL, customStorage){
    var userListCtrl = this;

    //vars
    userListCtrl.userProfiles = [];
    userListCtrl.fetchFromServer = $stateParams.fetchFromServer;
    //function defs
    userListCtrl.viewUserDetails = viewUserDetails;
    userListCtrl.createUser = createUser;
    userListCtrl.getUserList = getUserList;

    userListCtrl.getUserList();

    function getUserList(){
        if(userListCtrl.fetchFromServer){
            //fetch fresh from the server
            userListDAL.getUserList().then(function(data){
                userListCtrl.userProfiles = data;
                customStorage.setUserList(data);
            });
        }
        else{
            //fetch from local custom storage
            userListCtrl.userProfiles = customStorage.getUserList();
        }
    }

    function viewUserDetails(userDetails){
        customStorage.setUserDetails(userDetails);
        $state.go('userDetails');
    }

    function createUser(){
        $state.go('createUser');
    }
}
