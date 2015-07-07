describe('radio buttons', function() {
    var $compile, $rootScope;

    beforeEach(inject(function(_$compile_, _$rootScope_) {
        $compile = _$compile_;
        $rootScope = _$rootScope_;
    }));

    function compile(scope) {
        var elem = '<input type="radio" name="test" ng-model="value" value="0" />'
            + '<input type="radio" name="test" ng-model="value" value="1" />';

        elem = $compile(elem)(scope);
        scope.$digest();

        return elem;
    }

    // When we select a radio button using jQuery.click() we expect it to update the value of ng-model.
    // Strangely, this doesn't happen.
    it('should update the model when clicking on one of them', function() {
        var scope = $rootScope.$new();
        scope.value = '0';
        var elem = compile(scope);

        // for some reason clicking on the second radio button selects it but doesn't update the model
        elem.eq(1).click();
        expect(elem.eq(1).prop('checked')).toEqual(true);
        expect(scope.value).toEqual('0');

        // triggering click once more update the model to the correct value
        elem.eq(1).click();
        expect(elem.eq(1).prop('checked')).toEqual(true);
        expect(scope.value).toEqual('1');
    });
});