(
    function () {
        angular.module('MockApp')
            .controller('StudentController', StudentController);

        StudentController.$inject = ['$uibModal','StudentService'];

        function StudentController($uibModal , StudentService) {

                var vm = this;
                vm.value = 1;

                vm.$onInit = function () {
                    vm.students = StudentService.list();
                }

                vm.message= '';
                vm.closeThisAlert = function(){
                    vm.message = false;
                }

                vm.open = function (student) {

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
                        if(result.actionType == 'Add Student')
                            vm.message = result.studentName + " has been added";
                        else
                            vm.message = result.studentName + " has been edited";
                    }, function () {
                        console.info('Modal dismissed at: ' + new Date());
                    });

                }

            vm.openDelete = function (student) {
                var modalInstance = $uibModal.open({
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

                modalInstance.result.then(function (result) {
                    console.log('result: ' + result);
                    vm.message = result + " has been deleted";
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