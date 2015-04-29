angular.module('ControllerViewSpec', [])
    .controller('TestCtrl', function($scope) {
        $scope.name = 'Jasmine';
    });

describe('Controllers and views', function() {
    var $rootScope;
    var $compile;
    var $controller;

    beforeEach(module('ControllerViewSpec'));

    beforeEach(inject(function(_$rootScope_, _$compile_, _$controller_) {
        $rootScope = _$rootScope_;
        $compile = _$compile_;
        $controller = _$controller_;
    }));

    it('should be tested together', function() {
        // run the controller with the given parent scope
        var scope = $rootScope.$new();
        $controller('TestCtrl', {
            '$scope': scope
        });

        expect(scope.name).toEqual('Jasmine');

        // compile the view against the scope
        // if view files in the applications are preloaded, they can be retrieved from $templateCache
        var elem = $compile('<div>{{name}}</div>')(scope);
        scope.$digest();

        expect(elem.html()).toEqual('Jasmine');
    });
});