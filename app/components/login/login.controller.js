(
    function () {
        angular.module('MockApp')
            .controller('LoginController', LoginController);

        LoginController.$inject = ['$q'];

        function LoginController($q) {
            var vm = this;

            vm.mockText = '';
            vm.message = '';
            vm.mockClick = mockClick;
            vm.calculate = calculate;

            function mockClick() {
                var calc = vm.calculate();
                calc.then(
                    function (response) {
                        vm.message = response;
                        console.log(response);
                    },
                    function (error) {
                        vm.message = error;
                            console.log(error);
                    }
                )
            }

            function calculate() {
                var q= $q.defer();
                if(vm.mockText != ''){
                    q.resolve('The length is: '+vm.mockText.length);
                }
                else {
                    q.reject('Nothing to display');
                }
                return q.promise;
            }

        }
    }
)();