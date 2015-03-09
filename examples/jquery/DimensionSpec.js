describe('jQuery', function() {
    it('height() should return the height of an element', function() {
        var element = $('<div>Some content</div>');

        // do retrieve the height or another dimension of an element, it needs to be appended to the body
        element.appendTo(document.body);

        expect(element.height()).not.toEqual(0);

        // the element must then be removed, so that it wouldn't interfere with other tests
        element.remove();
    });
});