(
    function () {
        'use strict';
        beforeEach(module('MockApp'));

        describe('Testing Student Controller',function(){
            var _$scope, _$controller ,_$uibModal ,_mockStudentService, _$q;

            beforeEach(inject(function($uibModal,StudentService, $rootScope, $controller, $q){
                _$scope = $rootScope.$new();
                _$q = $q;
                _$uibModal = $uibModal;
                _mockStudentService = StudentService;

                _$controller = function () {
                    return $controller('StudentController as studentCtrl',{
                        $scope : _$scope
                    });
                };
            }));

            describe('Testing controller components', function () {

                //$onInit function
                it('Test onInit function',function () {
                    spyOn(_mockStudentService, 'list').and.callThrough();
                    var vm = _$controller();
                    vm.$onInit();
                    expect(_mockStudentService.list).toHaveBeenCalled();
                });

                //open function success
                it('Test open function', function () {
                    var modalInstance = {actionType:'Add Student'};
                    var deferred = _$q.defer();
                    deferred.resolve(modalInstance);
                    var mockModalInstance = { result: deferred.promise};
                    spyOn(_$uibModal,'open').and.returnValue(mockModalInstance);
                    var vm = _$controller();
                    vm.open();
                    _$scope.$digest();
                    expect(_$uibModal.open).toHaveBeenCalled();
                });

                //open function success Edit Student
                it('Test open function', function () {
                    var modalInstance = {actionType:'Edit Student'};
                    var deferred = _$q.defer();
                    deferred.resolve(modalInstance);
                    var mockModalInstance = { result: deferred.promise};
                    spyOn(_$uibModal,'open').and.returnValue(mockModalInstance);
                    var vm = _$controller();
                    vm.open();
                    _$scope.$digest();
                    expect(_$uibModal.open).toHaveBeenCalled();
                });

                //open function failure
                it('Test open function', function () {
                    var modalInstance = {};
                    var deferred = _$q.defer();
                    deferred.reject(modalInstance);
                    var mockModalInstance = { result: deferred.promise};
                    spyOn(_$uibModal,'open').and.returnValue(mockModalInstance);
                    spyOn(console,'info').and.callThrough();
                    var vm = _$controller();
                    vm.open();
                    _$scope.$digest();
                    expect(_$uibModal.open).toHaveBeenCalled();
                    expect(console.info).toHaveBeenCalled();
                });

            });
        })
    }
)();