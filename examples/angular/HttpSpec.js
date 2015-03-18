describe('Http', function() {
    var $http, $httpBackend;

    beforeEach(inject(function(_$http_, _$httpBackend_) {
        $http = _$http_;
        $httpBackend = _$httpBackend_;
    }));

    it('should trigger a callback when the request is complete', function() {
        // expectGET will trigger an error if the request is not performed
        $httpBackend.expectGET('http://google.com').respond(200, '');

        var complete = false;
        $http.get('http://google.com').success(function() {
            complete = true;
        });

        // flush() returns the response
        $httpBackend.flush();

        expect(complete).toEqual(true);
    });
});