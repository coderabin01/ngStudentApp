(
    function(){
        angular.module('MockApp')
            .controller('TestController',TestController);

        TestController.$inject = [];

        function TestController(){
            var vm = this;
            vm.name2 = "rabin";

            vm.helloworld = function(){
                vm.name = "helloworld";
            }
        }
    }
)();
