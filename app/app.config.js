(
    function () {
        angular.module('MockApp')
            .config(config);

        config.$inject = ['$stateProvider', '$urlRouterProvider','$qProvider'];

        function config($stateProvider, $urlRouterProvider ,$qProvider) {

            $qProvider.errorOnUnhandledRejections(false);

            //Route to home page.
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

                .state('user',{
                    url:'/user',
                    templateUrl:'components/user/user.html',
                    controller:'UserController as userCtrl'
                });

                // .state('test',{
                //     url:'/test',
                //     templateUrl:'components/jasmine/test.html',
                //     controller:'TestController as testCtrl'
                // });
        }
    }
)();