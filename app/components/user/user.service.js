(
    function () {
        'use strict';
        angular.module('MockApp')
            .service('UserService', UserService);

        UserService.$inject = ['$http','$q'];
        
        function UserService($http , $q) {
                var uid = 1;
                var students=[];

                this.list = function(){
                    var deferred = $q.defer();
                    $http({
                        method: 'GET',
                        url: 'https://jsonplaceholder.typicode.com/users'
                    }).then(function (response){
                        var results = response.data;
                        students = angular.copy(results);
                        uid = students.length;
                        deferred.resolve(students);
                    },function (error){
                        deferred.reject(error);
                    });
                    return deferred.promise;
                }

                this.save = function(newstudent){
                    if(newstudent.id == null) {
                        newstudent.id = ++uid;
                        students.push(newstudent);
                    }
                    else{
                        angular.forEach(students, function(eachStudent, index){
                            if(eachStudent.id == newstudent.id)
                                students[index] = newstudent;
                        })
                    }
                }

                this.delete = function (id) {
                    angular.forEach(students,function(eachStudent,index){
                        if(eachStudent.id == id)
                            students.splice(index,1);
                    })
                }
        }
    }
)();