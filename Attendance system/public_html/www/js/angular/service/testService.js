/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
app.service('testService', function($http, $q) {
        return {
            getUserInfo: function() {
                var deferred = $q.defer();
 
                $http.get('http://192.168.137.213:8084/demo/test.htm?cmdAction=testData')
                    .then(function (response) {
                        if (response.status === 200) {
                            deferred.resolve(response.data);
                        }
                        else {
                            deferred.reject('Error retrieving user info');
                        }
                });
 
                return deferred.promise;
            }
        };
    });
