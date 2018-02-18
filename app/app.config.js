(
    function () {
        angular.module('MockApp')
            .config(config);

        config.$inject = ['$stateProvider', '$urlRouterProvider'];

        function config($stateProvider, $urlRouterProvider) {
            //Route to login page.
            $urlRouterProvider.otherwise('/student');

            //States in the application
            $stateProvider
                .state('login',{
                    url:'/login',
                    templateUrl:'components/login/login.html',
                    controller:'LoginController as loginCtrl'
                })

                .state('student',{
                    url:'/student',
                    templateUrl:'components/student/student.html',
                    controller:'StudentController as studentCtrl'
                })

                // .state('test',{
                //     url:'/test',
                //     templateUrl:'components/jasmine/test.html',
                //     controller:'TestController as testCtrl'
                // });
        }
    }
)();