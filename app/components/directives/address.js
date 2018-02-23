(
    function(){
        angular.module('MockApp')
            .component('address',{
                template:
                    'Street: {{$ctrl.model.street}}<b>,</b> '+
                    '   City: {{$ctrl.model.city}}<b>,</b> '+
                    '   Zipcode: {{$ctrl.model.zipcode}} ',
                bindings:{
                    model: '=',
                }
            });
    }
)();
