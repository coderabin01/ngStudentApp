(
    function () {
        'use strict';
        angular.module('MockApp')
            .service('TeacherService', TeacherService);

        TeacherService.$inject = ['$http','$q'];
        
        function TeacherService($http , $q) {
                var uid = 1;
                var vm = this;
                vm.teachers=[];

                this.list = function(){
                    var deferred = $q.defer();
                    $http({
                        method: 'GET',
                        url: 'https://jsonplaceholder.typicode.com/users'
                    }).then(function (response){
                        var results = response.data;
                        vm.teachers = response.data;
                        uid = vm.teachers.length;
                        deferred.resolve(results);
                    },function (error){
                        deferred.reject(error);
                    });
                    return deferred.promise;
                }

                this.save = function(newstudent){
                    if(newstudent.id == null) {
                        newstudent.id = ++uid;
                        vm.teachers.push(newstudent);
                    }
                    else{
                        angular.forEach(vm.teachers, function(eachTeacher, index){
                            if(eachTeacher.id == newstudent.id)
                                vm.teachers[index] = newstudent;
                        })
                    }
                }

                this.delete = function (id) {
                    angular.forEach(vm.teachers,function(eachTeacher,index){
                        if(eachTeacher.id == id)
                            vm.teachers.splice(index,1);
                    })
                }
        }
    }
)();