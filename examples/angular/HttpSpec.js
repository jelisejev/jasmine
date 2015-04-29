describe('Http', function() {
    var $http, $httpBackend;

    beforeEach(inject(function(_$http_, _$httpBackend_) {
        $http = _$http_;
        $httpBackend = _$httpBackend_;
    }));

    it('should trigger a callback when the request is complete', function() {
        // expectGET will trigger an error if the request is not performed
        $httpBackend.expectGET('http://google.com').respond(200, '');

        var spy = jasmine.createSpy();
        $http.get('http://google.com').success(function() {
            spy();
        });

        // flush() returns the response
        $httpBackend.flush();

        expect(spy).toHaveBeenCalled();
    });

    afterEach(function() {
        // make sure that no expectation was left unsatisfied
        $httpBackend.verifyNoOutstandingExpectation();

        // make sure there are no requests that haven't been flushed
        $httpBackend.verifyNoOutstandingRequest();
    })
});