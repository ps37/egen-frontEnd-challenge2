describe('app.controllers userListController', function () {
    var scope, $location, state, createController, userListCtrl, customstorage;
    var ulDAL;

    beforeEach(module('app'));

    beforeEach(inject(function ($state, $controller, $rootScope, $q, _$location_, customStorage) {
        $location = _$location_;
        scope = $rootScope.$new();
        state = $state;
        customstorage = customStorage;

        ulDAL = {
            getUserList: function () {
                var deferred = $q.defer();
                deferred.resolve(USER_LIST_MOCK_DATA.USERS);
                return deferred.promise;
            }
        };

        createController = function () {
            return $controller('userListController', {
                $state:state,
                userListDAL: ulDAL,
                customStorage: customstorage
            });
        };
    }));

    beforeEach(function () {
        userListCtrl = createController();
    });

    describe('When newing up a controller', function () {
        it('the controller should exist', function () {
            expect(userListCtrl).toBeDefined();
        });
    });

    describe('User List functions', function () {
        var userList;

        beforeEach(function () {
            userListCtrl.userProfiles = null;
            userListCtrl.fetchFromServer = true;
            ulDAL.getUserList().then(function (data) {
                userList = data;
            });
            scope.$apply();
        });

        it('should call to get the user list', function () {
            spyOn(userListCtrl, 'getUserList');
            userListCtrl.getUserList();
            expect(userListCtrl.getUserList).toHaveBeenCalled();
        });

        it('should set the user profiles after getting the user list', function () {
            spyOn(userListCtrl, 'getUserList').and.callThrough();
            userListCtrl.getUserList();
            scope.$apply();
            expect(userListCtrl.userProfiles).not.toBeNull();
            expect(userListCtrl.userProfiles).toEqual(jasmine.any(Array));
            expect(userListCtrl.userProfiles.length).toEqual(userList.length);
        });

        it('should call to go to create user state', function () {
            spyOn(userListCtrl, 'createUser');
            userListCtrl.createUser();
            expect(userListCtrl.createUser).toHaveBeenCalled();
        });

        it('should go to create user state', function () {
            spyOn(userListCtrl, 'createUser').and.callThrough();
            spyOn(state, 'go').and.callThrough();
            userListCtrl.createUser();
            //console.log($location.path());
            expect(state.go).toHaveBeenCalledWith('createUser');
        });

        it('should call to go to create user state', function () {
            spyOn(userListCtrl, 'viewUserDetails');
            userListCtrl.viewUserDetails();
            expect(userListCtrl.viewUserDetails).toHaveBeenCalled();
        });

        it('should go to create user state', function () {
            spyOn(customstorage, 'setUserDetails').and.callThrough();
            userListCtrl.viewUserDetails();
            //console.log($location.path());
            expect(customstorage.setUserDetails).toHaveBeenCalled();
        });

        it('should go to create user state', function () {
            spyOn(state, 'go').and.callThrough();
            userListCtrl.viewUserDetails();
            //console.log($location.path());
            expect(state.go).toHaveBeenCalledWith('userDetails');
        });
    });
});