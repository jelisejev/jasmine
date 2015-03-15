angular.module('test', [])
    .service('UserService', function($q) {
        return {
            // some function that fetches the information about a user from the backend
            getUser: function(name) {
                var deferred = $q.deferred();

                // perform an async request to fetch the user data and resolve the promise ...

                return deferred.promise;
            }
        }
    })
    .service('PermissionService', function(UserService) {
        return {
            // returns true if the given user has permissions to perform some operation
            hasPermissions: function(userName) {
                return UserService.getUser(userName).then(function(user) {
                    // assume that users with status 1 are admin users
                    return user.status == 1;
                });
            }
        }
    });

describe('PermissionService', function() {
    var UserService, PermissionService;

    // load the "test" module
    beforeEach(module('test'));

    describe('hasPermissions', function() {
        // provide some mock users
        function getMockUser(name) {
            var users = {
                'admin': {
                    name: 'admin',
                    status: 1
                },
                'user': {
                    name: 'user',
                    status: 0
                }
            }

            return users[name];
        }

        beforeEach(inject(function(_UserService_, _PermissionService_, _$q_, _$rootScope_) {
            UserService = _UserService_;
            PermissionService = _PermissionService_;
            $rootScope = _$rootScope_;
            var $q = _$q_;

            // set up a spy to return mock users instead of performing real requests
            spyOn(UserService, 'getUser').and.callFake(function(name) {
                var deferred = $q.defer();

                deferred.resolve(getMockUser(name));

                return deferred.promise;
            })
        }));

        it('should return true for admin users', function() {
            PermissionService.hasPermissions('admin').then(function(result) {
                expect(result).toEqual(true);
            });

            // calling $digest is required for the "then" function to be called
            $rootScope.$digest();
        });

        it('should return false for non-admin users', function() {
            PermissionService.hasPermissions('user').then(function(result) {
                expect(result).toEqual(false);
            });

            // calling $digest is required for the "then" function to be called
            $rootScope.$digest();
        });
    });
});