(
    function(){
        'use strict';

        describe('Testing the app controller',function(){
            beforeEach(module('MockApp'));
            var _$scope, _$controller , _$rootScope;

            beforeEach(inject(function($rootScope,$controller ){
                _$scope = $rootScope.$new();
                _$rootScope = $rootScope;
                _$controller = $controller('TestController as testCtrl',{
                   $scope : _$scope
                });
            }));

            describe('Testing controller components', function () {
                 it('should Return Hello World',function(){
                    var vm = _$controller;

                    vm.helloworld();
                    // call the function in the ctrl
                    spyOn(vm, 'helloworld').and.callThrough();

                    // type 1 using controller
                    expect(_$scope.testCtrl.name2).toBe('rabin');

                    vm.name2 = 'babin';
                    // type 2 using controller
                     expect(vm.name2).toBe('babin');

                    expect(vm.name).toEqual('helloworld');
                 });
             });
        })

    }
)();
