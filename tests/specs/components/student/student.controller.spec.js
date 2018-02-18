(
    function () {
        'use strict';

        describe('Testing Student Controller',function(){
            beforeEach(module('MockApp'));
            var _$scope, _$controller ,_$uibModal ,_mockStudentService;

            beforeEach(inject(function($uibModal,StudentService, $rootScope, $controller){
                _$scope = $rootScope.$new();
                _$uibModal = $uibModal;
                _mockStudentService = StudentService;
                _$controller = $controller('StudentController as studentCtrl',{
                   '$scope' : _$scope
                });
            }));

            describe(',testing the Components',function(){
                it('should call delete function',function(){
                    spyOn(_mockStudentService,'delete').and.callThrough();
                    _$controller.delete(1);
                    expect(_mockStudentService.delete).toHaveBeenCalledWith(1);
                })

                it('should call open function', function(){
                   spyOn(_$uibModal, 'open').and.callThrough();
                    _$controller.open();
                   expect(_$uibModal.open).toHaveBeenCalled();
                })

                it('should call edit function', function(){
                    spyOn(_$controller,'open').and.callThrough();
                    _$controller.edit();
                    expect(_$controller.open).toHaveBeenCalled();
                });
            })
        })
    }
)();