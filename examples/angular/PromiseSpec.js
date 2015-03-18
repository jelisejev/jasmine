describe('Promise', function() {
    var $q, $rootScope;

    beforeEach(inject(function(_$q_, _$rootScope_) {
        $q = _$q_;
        $rootScope = _$rootScope_;
    }));

    it('should call then when it\'s resolved', function() {
        var deferred = $q.defer();

        var resolved = false;
        var promise = deferred.promise;
        promise.then(function() {
            resolved = true;
        });

        deferred.resolve();

        // $digest needs to be called for the "then" function to be executed
        $rootScope.$digest();

        expect(resolved).toEqual(true);
    });
});