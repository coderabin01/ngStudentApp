(
    function(){
        'use strict';

        describe('Testing studentModal Controller', function(){
            beforeEach(module('MockApp'));
            var _$scope, _$controller ,_mockStudentService ,_newStudent;
            var _$uibModalInstance ={
                close: angular.noop,
                dismiss: angular.noop
            };

            beforeEach(inject(function($controller,$rootScope, StudentService ){
                _$scope=$rootScope.$new();
                _mockStudentService= StudentService;
                _newStudent = newStudent;
                _$controller = $controller('DeleteModalController as deleteModalCtrl',{
                    $scope: _$scope,
                    $uibModalInstance: _$uibModalInstance,
                    //newStudent = _newStudent,
                });
            }));

            describe('testing the components',function(){
                // it('should call ok function', function(){
                //     expect(true).toBeTruthy();
                // })


                it('should call cancel function', function(){
                    // spyOn(_$uibModalInstance,'dismiss').and.callThrough();
                    // _$controller.cancel();
                    // expect(_$uibModalInstance.dismiss).toHaveBeenCalled();
                });
            })
        })
    }
)();
