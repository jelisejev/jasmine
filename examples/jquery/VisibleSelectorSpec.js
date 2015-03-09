describe(':visible', function() {
    it('should return only visible elements', function() {
        var element = $('<ul><li></li><li style="display: none"></li></ul>');

        // to use the :visible selector, the element must be appended to the body
        element.appendTo(document.body);

        expect(element.find(':visible').length).toEqual(1);

        // the element must then be removed, so that it wouldn't interfere with other tests
        element.remove();
    });
});