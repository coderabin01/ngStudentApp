(
    function(){
        angular.module('MockApp')
            .controller('TeacherModalController', TeacherModalController);

        TeacherModalController.$inject = ['$uibModalInstance', 'TeacherService', 'newTeacher'];

        function TeacherModalController($uibModalInstance, TeacherService, newTeacher) {
            var vm = this;

            if(newTeacher)
                vm.modalTitle="Edit Teacher";
            else
                vm.modalTitle="Add Teacher";

            // vm.setModalTitle = function(newStudent){
            //     if(newTeacher)
            //         vm.modalTitle="Edit Teacher";
            //     else
            //         vm.modalTitle="Add Teacher";
            // }

            vm.nTeacher=angular.copy(newTeacher);

            vm.ok = function () {
                TeacherService.save(vm.nTeacher);
                vm.teacherName = vm.nTeacher.name;
                $uibModalInstance.close({teacherName:vm.teacherName,actionType:vm.modalTitle});
            };

            vm.cancel = function () {
                $uibModalInstance.dismiss('cancel');
            };
        }
    }
)();

