describe('ng-model directive', function() {
    var $compile, $rootScope;

    beforeEach(inject(function(_$compile_, _$rootScope_) {
        $compile = _$compile_;
        $rootScope = _$rootScope_;
    }));

    // The function compiles an HTML string against the given scope and returns the jQuery lite element.
    function compile(scope) {
        var elem = '<input type="text" ng-model="value" />';

        elem = $compile(elem)(scope);
        scope.$digest();

        return elem;
    }

    it('should update the input when the model changes', function() {
        var scope = $rootScope.$new();
        scope.value = 'One';
        var elem = compile(scope);

        expect(elem.val()).toEqual('One');

        scope.value = 'Two';

        // sync the element with the scope
        scope.$digest();

        expect(elem.val()).toEqual('Two');
    });
});