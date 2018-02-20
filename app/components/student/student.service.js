(
    function () {
        'use strict';
        angular.module('MockApp')
            .service('StudentService', StudentService);

        StudentService.$inject = [];
        
        function StudentService() {
                var uid = 3;

                var students = [{
                    'id': 1,
                    'fname': 'Rabin',
                    'lname':'Naga',
                    'email': 'naga.rabin01@gmail.com',
                    'address': 'Bhaktapur'
                },
                    {
                        'id': 2,
                        'fname': 'xyz',
                        'lname':'abc',
                        'email': 'naga.babin01@gmail.com',
                        'address': 'Kathmandu'
                    }
                ];

                this.list= function(){
                    return students;
                }

                this.save = function(newstudent){
                    if(newstudent.id == null) {
                        newstudent.id = uid++;
                        students.push(newstudent)
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