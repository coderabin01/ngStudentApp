(
    function () {
        'use strict';
        angular.module('MockApp')
            .service('StudentService', StudentService);

        StudentService.$inject = [];
        
        function StudentService() {
                var uid = 2;

                var students = [{
                    'id': 1,
                    'fname': 'Rabin',
                    'lname':'Naga',
                    'email': 'naga.rabin01@gmail.com',
                    'address': 'Bhaktapur'
                }];

                this.list= function(){
                    return students;
                }

                this.save = function(newstudent){
                    if(newstudent.id == null) {
                        newstudent.id = uid++;
                        students.push(newstudent)
                        //sessionStorage.setItem("SavedString",1);
                    }
                    else{
                        for(var i in students){
                            if(students[i].id == newstudent.id)
                                students[i] = newstudent;
                                //sessionStorage.setItem("EditString",1);
                        }
                    }
                }

                this.delete = function (id) {
                    //console.log(id);
                    for (var i in students) {
                        if (students[i].id == id) {
                            students.splice(i, 1);
                        }
                    }
                }

                // this.get = function (id){
                //     for(var i in students){
                //         if(students[i].id == id)
                //             return students[i];
                //     }
                // }
        }
    }
)();