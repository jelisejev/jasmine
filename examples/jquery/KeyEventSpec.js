describe('jQuery simulate', function() {

    function testKeyEvent(event) {
        var spy = jasmine.createSpy();

        $('<div></div>')
            .on(event, function() {
                spy();
            })
            .simulate(event, {
                keyCode: 84
            });

        expect(spy).toHaveBeenCalled();
    }

    it('should simulate a key event', function() {
        testKeyEvent('keydown');
        testKeyEvent('keypress');
        testKeyEvent('keyup');
    });
});
