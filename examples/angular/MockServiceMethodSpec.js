angular.module('MockServiceMethodSpec', [])
    .factory('navigator', function($location) {
        return {
            goTo: function(url) {
                $location.url(url);
            }
        }
    });

describe('navigator service', function() {
    var navigator;
    var $location;

    beforeEach(module('MockServiceMethodSpec'));

    beforeEach(inject(function(_navigator_, _$location_) {
        navigator = _navigator_;
        $location = _$location_;
    }));

    it('goTo() method should perform a redirect to the given page', function() {
        spyOn($location, 'url');

        navigator.goTo('http://google.com');

        // make sure the navigator service performs the corrected redirect
        expect($location.url).toHaveBeenCalledWith('http://google.com');
    });
});