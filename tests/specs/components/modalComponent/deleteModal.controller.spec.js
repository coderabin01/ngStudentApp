(
    function(){
        'use strict';

        describe('Testing studentModal Controller', function(){
            beforeEach(module('MockApp'));
            var _$scope, _$controller, _$uibModalInstance ,_mockStudentService;

            beforeEach(inject(function($controller,$rootScope,$uibModalInstance, StudentService){
                _$scope=$rootScope.$new();
                _$uibModalInstance = $uibModalInstance;
                _mockStudentService= StudentService;
                _$controller = $controller('StudentModalController as stdModalCtrl',{
                    '$scope': _$scope
                });
            }));

            describe('testing the components',function(){
                it('should call ok function', function(){

                })


                it('should call cancel function', function(){

                });
            })
        })
    }
)();
