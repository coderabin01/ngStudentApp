(
    function () {
        angular.module('MockApp')
            .controller('UserController', UserController);

        UserController.$inject = ['$uibModal','UserService'];

        function UserController($uibModal , UserService) {

                var vm = this;
                vm.sortType = 'name';
                vm.sortReverse = false ;
                vm.message = '';


                //Function to show the list of students
                vm.$onInit = function () {

                    var getList = UserService.list();

                    getList.then(
                        function (response) {
                            vm.students = response;
                        },
                        function (error) {
                            console.log(error);
                        }
                    );
                }

                // Function to close the alert
                vm.closeThisAlert = function(){
                    vm.message = false;
                }

                //Function to reverse the sorting
                vm.reverseSortFunc = function(){
                    vm.sortReverse =! vm.sortReverse;
                }

                //open Add Student & Edit Student Modal
                vm.open = function (student) {
                    var modalInstance = $uibModal.open({
                        ariaLabelledBy: 'modal-title',
                        ariaDescribedBy: 'modal-body',
                        templateUrl: 'components/modalComponent/teacher/teacherModal.html',
                        controller: 'UserModalController as teacherModalCtrl',
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

                //open Delete Student Modal
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

                //Function to open Delete Modal on click of delete
                vm.delete = function(id){
                    vm.openDelete(id);
                }

                //Function to open Edit Modal on click of edit
                vm.edit = function(student){
                    vm.open(student);
                }

        }
    }
)();