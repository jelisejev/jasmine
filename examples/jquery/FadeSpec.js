describe('jQuery', function() {
    beforeEach(function() {
        // this parameter globally disables jQuery animations
        // jQuery animations don't work with jasmine time mocking, so the only alternative seems to be
        // disabling animations completely.
        $.fx.off = true;
    });

    it('fadeOut() should hide an element', function() {
        var element = $('<div>');

        // the element must be appended to the body, otherwise the styles will not be applied correctly
        element.appendTo(document.body);

        element.fadeOut(100);
        expect(element.css('display')).toEqual('none');
    });

    it('fadeIn() should make the element visible', function() {
        var element = $('<div>').css('display', 'none');

        element.fadeIn();
        expect(element.css('display')).toEqual('block');
    })

    afterEach(function() {
        $.fx.off = false;
    });
});
