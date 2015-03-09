describe('Dropdown', function() {
    /**
     * Bootstrap elements need to be initialized manually before testing.
     */
    it('should open when clicking on the button', function() {
        var dropdown = '<div class="dropdown">'
            + '<button href="#" class="btn dropdown-toggle" data-toggle="dropdown">Dropdown</button>'
            + '<ul class="dropdown-menu">'
            + '<li><a href="#">Option 1</a></li>'
            + '<li><a href="#">Option 2</a></li>'
            + '</ul>'
            + '</div>';

        dropdown = $(dropdown);
        dropdown.find('[data-toggle="dropdown"]').dropdown().click();
        expect(dropdown.hasClass('open')).toEqual(true);
    });
});
