(
    function() {
        'use strict';

        beforeEach(module('MockApp'));
        describe('Testing User Service', function () {
            var _$mockUserService,_$q, $httpBackend,_$scope , authRequestHandler;
            var url = 'https://jsonplaceholder.typicode.com/users';

            beforeEach(inject(function ($rootScope, UserService , _$httpBackend_, $q ) {
                $httpBackend = _$httpBackend_;
                //authRequestHandler = $httpBackend.when('GET', url).respond([{}]);
                _$mockUserService = UserService;
                _$q = $q;
                _$scope = $rootScope.$new();
            }));

            // afterEach(function() {
            //     $httpBackend.verifyNoOutstandingExpectation();
            //     $httpBackend.verifyNoOutstandingRequest();
            // });

            describe('Testing the components',function(){
                it('Should set result from api call', function(){
                    var url = 'https://jsonplaceholder.typicode.com/users';
                    $httpBackend.when('GET', url).respond({});
                    _$mockUserService.list();
                    _$scope.$digest();
                    $httpBackend.flush();
                })

                it('Should throw error from api call', function(){
                    var url = 'https://jsonplaceholder.typicode.com/users';
                    //var deferred = _$q.defer();
                    //deferred.reject();
                    //var result = {response:deferred.promise};
                    $httpBackend.reject('GET', url).respond({},404,{});
                    //spyOn(_$mockUserService,'list').and.returnValue(result);
                    _$mockUserService.list();
                    _$scope.$digest();
                    $httpBackend.flush();
                    //expect(_$mockUserService.list).toHaveBeenCalled();

                })

                // it('Should call Save function if newUser is passed',function(){
                //     spyOn(_$mockUserService,'save').and.callThrough();
                //     var newuser = {};
                //     _$mockUserService.save(newuser);
                //     expect(_$mockUserService.save).toHaveBeenCalled();
                // })
                //
                // it('Should call save function (edit) if oldUser is passed',function(){
                //     spyOn(_$mockUserService,'save').and.callThrough();
                //     var newuser = {'id':1};
                //     _$mockUserService.save(newuser);
                //     expect(_$mockUserService.save).toHaveBeenCalled();
                // })
                //
                // it('Testing delete function', function(){
                //     spyOn(_$mockUserService,'delete').and.callThrough();
                //     var id = 2;
                //     _$mockUserService.delete(id);
                //     expect(_$mockUserService.delete).toHaveBeenCalled();
                // })

                //it('should call list function', function(){
                    //var url = 'https://jsonplaceholder.typicode.com/users';

                    // $httpBackend.when('GET', url)
                    //     .respond(function(method, url, data, headers, params) {
                    //         return [401, {message: 'Unauthorized'}];
                    //     });
                   // _$scope.$digest();
                    //$httpBackend.flush();
                    //
                    // spyOn(_$mockUserService,'list').and.callThrough();
                    // _$mockUserService.list();
                    // expect(_$mockUserService.list).toHaveBeenCalled();
               // });

                // it('should set result from api call', function() {
                //     var response = {data: []};
                //     spyOn(_$http, 'get').and.returnValue(_$q.when(response));
                //
                //     _$mockUserService.list().then(function(res) {
                //         expect(res).toEqual(response.data);
                //     });
                //     _$scope.$apply();
                // });

            });

        })
    }
)();

