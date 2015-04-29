describe('Service mocks', function() {
    var $routeParams;

    // services need to be mocked before calling inject()
    beforeEach(module('test', function($provide) {
        $provide.value('$routeParams', {
            name: 'Jasmine'
        });
    }));

    beforeEach(inject(function(_$routeParams_) {
        $routeParams = _$routeParams_;
    }));

    it('can be injected using $provide', function() {
        expect($routeParams.name).toEqual('Jasmine');
    });
});