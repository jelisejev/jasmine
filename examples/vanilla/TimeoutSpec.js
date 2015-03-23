describe('timeout', function() {

    // This test demonstrates how to test timeouts. Intervals are tested in the same manner.
    // Note that the clock should be installed before the test and uninstalled after.
    it('should call a function after some time', function() {
        jasmine.clock().install();

        var spy = jasmine.createSpy();
        setTimeout(spy, 200);

        expect(spy).not.toHaveBeenCalled();
        jasmine.clock().tick(200);
        expect(spy).toHaveBeenCalled();

        jasmine.clock().uninstall();
    });
});