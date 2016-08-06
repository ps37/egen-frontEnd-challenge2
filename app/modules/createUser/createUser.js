
angular
    .module('app.controllers')
    .controller('createUserController', createUserController);

createUserController.$inject = ['$state', '$stateParams', 'createUserDAL', 'customStorage'];

function createUserController($state, $stateParams, createUserDAL, customStorage){
    var createUserCtrl = this;

    //vars
    createUserCtrl.details = {};
    //function defs
    createUserCtrl.create = create;
    createUserCtrl.goBack = goBack;

    function create(userFormIsValid){
        if(userFormIsValid){
            console.log(createUserCtrl.details);
            createUserDAL.createUser(createUserCtrl.details).then(function(data){
                console.log(data);
                $state.go('userList');
            },function(error){
                console.log(error);
            });
        }
        console.log(userFormIsValid);
    }

    function goBack(){
        (customStorage.getUserList().length>0) ? $state.go('userList', {fetchFromServer:false}) : $state.go('userList');
    }
}
