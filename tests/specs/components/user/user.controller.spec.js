(
    function(){
        'use strict'

        beforeEach(module('MockApp'));
        describe('Testing User Controller',function(){
            var _$scope, _$controller, _$uibModal , _mockUserService ,_$q;

            beforeEach(inject(function($uibModal, UserService, $rootScope, $controller ,$q){
                _$scope = $rootScope.$new(),
                _$uibModal = $uibModal,
                _mockUserService = UserService,
                _$q = $q,
                _$controller = $controller ('UserController as userCtrl',{
                    $scope: _$scope
                })
            }));

            describe('Testing the components',function(){
                it('Should run the $onInit function',function(){
                    var vm = _$controller;
                    spyOn(_mockUserService,'list').and.callThrough();
                    vm.$onInit();
                    expect(_mockUserService.list).toHaveBeenCalled();
                    //expect(vm.students).toBe(response);

                    //vm.$onInit.getList()
                    //     .then(function(response) {
                    //     expect(response.length).toEqual(0);
                    // });
                })

                it('Should run the closeThisAlert function',function(){
                    var vm = _$controller;
                    vm.closeThisAlert();
                    expect(vm.message).toBe(false);
                })

                it('Should run the reverseSortFunc function',function(){
                    var vm = _$controller;
                    vm.reverseSortFunc();
                    expect(vm.sortReverse).toBe(true);
                })

                it('Should run the open function for Add', function(){
                    var vm = _$controller;
                    var modalInstance = {studentName:'Rabin Naga',actionType:'Add Student'};
                    var deferred = _$q.defer();
                    deferred.resolve(modalInstance);
                    var mockModalInstance = {result:deferred.promise};
                    spyOn(_$uibModal,'open').and.returnValue(mockModalInstance);
                    vm.open();
                    _$scope.$digest();
                    expect(_$uibModal.open).toHaveBeenCalled();
                })

                it('Should run the open function for Edit',function(){
                    var vm = _$controller;
                    var deferred = _$q.defer();
                    var modalInstance = {studentName:'Rabin Naga',actionType:'Edit Student'};
                    deferred.resolve(modalInstance);
                    var mockModalInstance = {result: deferred.promise};
                    spyOn(_$uibModal,'open').and.returnValue(mockModalInstance);
                    vm.open();
                    _$scope.$digest();
                    expect(_$uibModal.open).toHaveBeenCalled();
                })

                it('Should run the open function for Reject',function(){
                    var vm = _$controller;
                    var deferred = _$q.defer();
                    deferred.reject();
                    var mockModalInstance = {result: deferred.promise};
                    spyOn(_$uibModal,'open').and.returnValue(mockModalInstance);
                    vm.open();
                    _$scope.$digest();
                    expect(_$uibModal.open).toHaveBeenCalled();
                })

                it('Should run the open delete modal for success',function(){
                    var deferred = _$q.defer();
                    var vm = _$controller;
                    var modalInstance = {};
                    deferred.resolve(modalInstance);
                    var mockModalInstance = {result:deferred.promise};
                    spyOn(_$uibModal,'open').and.returnValue(mockModalInstance);
                    vm.openDelete();
                    _$scope.$digest();
                    expect(_$uibModal.open).toHaveBeenCalled();
                })

                it('Should run the open delete modal for reject',function(){
                    var deferred = _$q.defer();
                    var vm = _$controller;
                    deferred.reject();
                    var mockModalInstance = {result:deferred.promise};
                    spyOn(_$uibModal,'open').and.returnValue(mockModalInstance);
                    vm.openDelete();
                    _$scope.$digest();
                    expect(_$uibModal.open).toHaveBeenCalled();
                })

                it('Should run the delete function', function(){
                    var vm = _$controller;
                    spyOn(_$uibModal,'open').and.callThrough();
                    vm.delete();
                    expect(_$uibModal.open).toHaveBeenCalled();

                })

                it('Should run the edit function',function(){
                    var vm = _$controller;
                    spyOn(vm,'open').and.callThrough();
                    vm.edit({});
                    expect(vm.open).toHaveBeenCalled();
                })
            })

        })
    }
)();
