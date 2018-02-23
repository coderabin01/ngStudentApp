(
    function () {
        'use strict';
        angular.module('MockApp')
            .service('UserService', UserService);

        UserService.$inject = ['$http','$q'];
        
        function UserService($http , $q) {
                //var vm= this;
                var uid = 1;
                var students=[];

                this.list = function(){
                    var deferred = $q.defer();
                    $http({
                        method: 'GET',
                        url: 'https://jsonplaceholder.typicode.com/users'
                    }).then(function (response){
                        var results = response.data;
                        // angular.forEach(results,function(eachResult){
                        //     uid++;
                        //     students.push(eachResult);
                        // })
                        // console.log(students);
                        // console.log(results);
                        students = angular.copy(results);
                        uid = students.length;
                        console.log(uid);
                        console.log(students);
                        deferred.resolve(students);
                    },function (error){
                        console.log(error);
                        deferred.reject(error);
                    });
                    return deferred.promise;

                    //return students;
                    //
                    // return students;

                    // return (
                    //     $http.get('https://jsonplaceholder.typicode.com/users').then(
                    //     function (response) {console.log(response);
                    //         var results = response.data;
                    //         angular.forEach(results,function(eachResult){
                    //           students.push(eachResult);
                    //         })
                    //         console.log(students);
                    //     },
                    //     function (error) {
                    //         console.log(error);
                    //     }
                    //     )
                    // )
                }

                this.save = function(newstudent){
                    if(newstudent.id == null) {
                        newstudent.id = ++uid;
                        students.push(newstudent);
                        console.log(uid);
                        console.log(students);
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