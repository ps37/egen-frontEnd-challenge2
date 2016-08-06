
angular
    .module('app.controllers')
    .controller('userListController', userListController);

userListController.$inject = ['$state', '$stateParams', 'userListDAL', 'customStorage'];

function userListController($state, $stateParams, userListDAL, customStorage){
    var userListCtrl = this;

    //vars
    userListCtrl.userProfiles = [];
    //function defs
    userListCtrl.viewUserDetails = viewUserDetails;
    userListCtrl.createUser = createUser;

    if($stateParams.fetchFromServer){
        //fetch fresh from the server
        userListDAL.getUserList().then(function(data){
            userListCtrl.userProfiles = data;
            console.log(userListCtrl.userProfiles);
            customStorage.setUserList(data);
        });
    }
    else{
        //fetch from local custom storage
        userListCtrl.userProfiles = customStorage.getUserList();
        console.log(userListCtrl.userProfiles);
    }

    function viewUserDetails(userDetails){
        customStorage.setUserDetails(userDetails);
        console.log(customStorage.getUserDetails());
        $state.go('userDetails');
    }

    function createUser(){
        $state.go('createUser');
    }
}
