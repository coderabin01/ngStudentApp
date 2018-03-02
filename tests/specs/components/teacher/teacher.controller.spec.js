(
    function(){
        'use strict'

        beforeEach(module('MockApp'));
        describe('Testing User Controller',function(){
            var _$scope, _$controller, _$uibModal , _mockUserService ,_$q ,$httpBackend;
            var url = 'https://jsonplaceholder.typicode.com/users';

            beforeEach(inject(function($uibModal, TeacherService, $rootScope, $controller ,$q ,_$httpBackend_){
                $httpBackend = _$httpBackend_;
                _$scope = $rootScope.$new(),
                _$uibModal = $uibModal,
                _mockUserService = TeacherService,
                _$q = $q,
                _$controller = $controller ('TeacherController as teacherCtrl',{
                    $scope: _$scope
                })
            }));

            describe('Testing the components',function(){
                it('Should run the $onInit function',function(){
                     // $httpBackend.when('GET', url).respond();
                   // var results = _mockUserService.list();
                   //  // console.log(result);
                   //  _$scope.$digest();
                   //  $httpBackend.flush();

                    var modalInstance = {};
                    var deferred = _$q.defer();
                    deferred.resolve(modalInstance);
                    var mockModalInstance = {response:deferred.promise};

                    var vm = _$controller;
                    // // vm.teachers = [{},{}];
                    // spyOn(vm.$onInit(),'then').and.callThrough();
                    // _mockUserService.list();
                    // // //expect(vm.teachers.length).toEqual();
                    // vm.$onInit();
                    // // _$scope.$apply();
                    // expect(vm.$onInit().list).toHaveBeenCalled();
                    //

                    //expect(vm.students).toBe(response);

                    vm.$onInit.then(function(){
                        console.log('success');
                    });
                })

                it('Should run $onInit function error case',function(){
                    var vm = _$controller;
                    spyOn(_mockUserService,'list').and.callThrough();
                    vm.teachers = [{},{}];
                    //expect(vm.teachers.length).toEqual(0);
                    vm.$onInit();
                    _$scope.$apply();
                    expect(_mockUserService.list).toHaveBeenCalled();
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
                    var modalInstance = {teacherName:'Rabin Naga',actionType:'Add Teacher'};
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
                    var modalInstance = {teacherName:'Rabin Naga',actionType:'Edit Teacher'};
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
