(function () {
    'use strict';

    beforeEach(module('MockApp'));

    describe('Testing the home controller', function () {
        var _$scope , _$controller, _$q, _$rootScope;

        beforeEach(inject(function ($rootScope , $controller, $q, $httpBackend) {
            _$q = $q;
            _$controller = $controller;
            _$rootScope = $rootScope;

            _$scope = $rootScope.$new();

            $controller("LoginController as loginCtrl", {
                '$scope': _$scope
            });
            $httpBackend.whenGET(/components\/.*/).respond({});
        }));

        describe('check the controller components', function () {
            // it('check password strength', function () {
            //     spyOn(_$scope.loginCtrl,'calculate').and.callThrough();
            //     _$scope.loginCtrl.mockText = 'hello';
            //     _$scope.loginCtrl.mockClick();
            //     // _$scope.$apply();
            //   expect(_$scope.loginCtrl.calculate).toHaveBeenCalled();
            //     expect(_$scope.loginCtrl.message).toBe('Nothing to display');
            // });

            it('should do something', function() {
                var deferred = _$q.defer();
                spyOn(_$scope.loginCtrl,'calculate').and.returnValue(deferred.promise);

                _$scope.loginCtrl.mockClick();

                deferred.resolve('Test1');
                _$rootScope.$digest();

                expect(_$scope.loginCtrl.message).toEqual('Test1');
            });
            //
            //
            // it('should do something', function() {
            //     var deferred = _$q.defer();
            //     spyOn(_$scope.loginCtrl,'calculate').and.returnValue(deferred.promise);
            //
            //     _$scope.loginCtrl.mockClick();
            //
            //     deferred.reject('Rejected');
            //     // _$scope.$apply();
            //
            //     expect(_$scope.loginCtrl.message).toEqual('Rejected');
            // });
        })
    })
})();