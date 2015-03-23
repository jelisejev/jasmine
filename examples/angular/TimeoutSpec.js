describe('$timeout service', function() {
    var $timeout;

    beforeEach(inject(function(_$timeout_) {
        $timeout = _$timeout_;
    }));

    it('should call the given function after the time runs out', function() {
        var spy = jasmine.createSpy();
        $timeout(spy, 500);

        expect(spy).not.toHaveBeenCalled();

        // jasmine's clock() mock doesn't work with Angular $timeout, we need to use $timeout.flush() instead
        $timeout.flush(500);

        expect(spy).toHaveBeenCalled();
    });
});