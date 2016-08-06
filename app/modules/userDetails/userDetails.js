angular
    .module('app.controllers')
    .controller('userDetailsController', userDetailsController);

userDetailsController.$inject = ['$state', '$stateParams', 'userDetailsDAL', 'customStorage', 'userDetails'];

function userDetailsController($state, $stateParams, userDetailsDAL, customStorage, userDetails) {
    var userDetailsCtrl = this;

    userDetailsCtrl.userDetails = [];
    userDetailsCtrl.deleteUser = deleteUser;
    userDetailsCtrl.goBack = goBack;

    if (Object.keys(userDetails).length === 0) $state.go('userList', {fetchFromServer:true});

    userDetailsCtrl.userDetails = userDetails;

    function deleteUser() {
        //http call to backend for delete
        userDetailsDAL.deleteUser(userDetailsCtrl.userDetails.id)
            .then(function (data) {
                $state.go('userList');
            }, function (error) {
                console.log(error);
            })
    }

    function goBack(){
        $state.go('userList', {fetchFromServer:false})
    }
}
