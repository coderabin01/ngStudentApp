(
    function(){
        angular.module('MockApp')
            .controller('UserModalController', UserModalController);

        UserModalController.$inject = ['$scope', '$uibModalInstance', 'UserService', 'newStudent'];

        function UserModalController($scope, $uibModalInstance, UserService, newStudent) {
            var vm = this;

            if(newStudent)
                vm.modalTitle="Edit Student";
            else
                vm.modalTitle="Add Student";

            vm.newstudent=angular.copy(newStudent);

            vm.ok = function () {
                UserService.save(vm.newstudent);
                vm.studentName = vm.newstudent.name;
                $uibModalInstance.close({studentName:vm.studentName,actionType:vm.modalTitle});
            };

            vm.cancel = function () {
                $uibModalInstance.dismiss('cancel');
            };
        }
    }
)();

