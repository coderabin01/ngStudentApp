/**
 * Created by maddog on 3/4/2018.
 */

(
    function(){
        angular.module('MockApp')
            .directive('teacherModal',teacherModal);

        function teacherModal(){
            var directive = {
                restrict: 'EA',
                scope:{
                    'type': '@modalType',
                    'title': '@buttonTitle',
                    'class': '@buttonClass',
                    'fileName': '@fileName',
                    modalValue: '=',
                    message: '=',

                },
                template:'<a type="button" class="{{class}}" ng-click="modalDCtrl.open(modalValue,fileName)">{{title}}</a>',
                controller:'modalDirectiveController as modalDCtrl'
            }

            return directive;
        }

        angular.module('MockApp')
            .controller('modalDirectiveController', modalDirectiveController);

        modalDirectiveController.$inject = ['$uibModal','TeacherService','$scope', '$rootScope'];

        function modalDirectiveController($uibModal , TeacherService , $scope, $rootScope){

            var vm = this;

            vm.open = function(teacher,fileName){
                var msg ='';

                console.log('open function of teacher modal ctrl' + fileName);
                var modalInstance = $uibModal.open({
                    ariaLabelledBy: 'modal-title',
                    ariaDescribedBy: 'modal-body',
                    templateUrl: 'components/modalComponent/teacher/'+fileName+'.html',
                    controller: 'TeacherModalController as teacherModalCtrl',
                    size: 'md',
                    resolve:{
                        newTeacher:function(){
                            return teacher;
                        }
                    }
                });

                modalInstance.result.then(function (result) {
                    console.log('result of directive controller');
                    $scope.message = result.teacherName;
                    if(result.actionType == 'Add Teacher')
                        $scope.message = result.teacherName + " has been added";
                    else
                        $scope.message = result.teacherName + " has been edited";

                    //$rootScope.$broadcast("updateMessage", msg);
                }, function () {
                    console.info('Modal dismissed at: ' + new Date());
                });

                // setTimeout(function () {
                //     $scope.$apply(function () {
                //         if(msg){
                //             $scope.message = "Timeout called!";
                //             console.log('apply');
                //         }
                //     });
                // });
                // $scope.message = 'hello from teacher-modalnn.js';
            }
        }

    }
)();

