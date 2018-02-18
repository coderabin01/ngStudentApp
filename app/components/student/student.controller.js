(
    function () {
        angular.module('MockApp')
            .controller('StudentController', StudentController);

        StudentController.$inject = ['$scope','$uibModal','StudentService'];

        function StudentController($scope, $uibModal , StudentService) {

                var vm = this;

                vm.$onInit = function () {
                    vm.students = StudentService.list();
                }

                vm.open = function (student) {
                    vm.message= '';
                    vm.messageType = '';

                    var modalInstance = $uibModal.open({
                        ariaLabelledBy: 'modal-title',
                        ariaDescribedBy: 'modal-body',
                        templateUrl: 'components/modalComponent/studentModal.html',
                        controller: 'StudentModalController as studentModalCtrl',
                        size: 'md',
                        resolve:{
                            newStudent:function(){
                                return student;
                            }
                        }
                    });

                    modalInstance.result.then(function (result) {
                        // console.log('result: ' + result.studentName);
                        // console.log('resulType: ' + result.actionType);
                        vm.message = result.studentName;
                        if(result.actionType == 'Add Student')
                            vm.messageType = 'add';
                        else
                            vm.messageType = 'edit';
                    }, function () {
                        console.info('Modal dismissed at: ' + new Date());
                    });

                }

            vm.openDelete = function (student) {
                vm.message = '';
                vm.messageType = '';

                var dmodalInstance = $uibModal.open({
                    ariaLabelledBy: 'modal-title',
                    ariaDescribedBy: 'modal-body',
                    templateUrl: 'components/modalComponent/deleteModal.html',
                    controller: 'DeleteModalController as delModalCtrl',
                    size: 'md',
                    resolve:{
                        stud:function(){
                            return student;
                        }
                    }
                });

                dmodalInstance.result.then(function (result) {
                    console.log('result: ' + result);
                    vm.message = result;
                    vm.messageType = 'delete';
                    // $scope.schedule = angular.fromJson(scheduleJSON);
                }, function () {
                    console.info('Modal dismissed at: ' + new Date());
                });
            }

                vm.delete = function(id){
                    vm.openDelete(id);
                }

                vm.edit = function(student){
                    vm.open(student);
                }

        }
    }
)();