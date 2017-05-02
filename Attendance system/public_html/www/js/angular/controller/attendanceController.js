app.controller('attendanceController', function($scope, $ionicPopup, attendanceService,$http,$location) {
    $scope.attendanceService = attendanceService;
    
    $scope.onClickAttend = function() {
        if ($scope.attendanceService.grad === 'M.tech')
        {
            if ($scope.attendanceService.sem === 'Sem 5' || $scope.attendanceService.sem === 'Sem 6' || $scope.attendanceService.sem === 'Sem 7' || $scope.attendanceService.sem === 'Sem 8')
            {
                
                console.log('Hii');
                $ionicPopup.alert({
                    title: 'Alert',
                    content: 'Select appropriate semester'
                }).then(function(res) {
                    console.log(res);
                });
            }
             if($scope.attendanceService.sem === 'Sem 1' || $scope.attendanceService.sem === 'Sem 2'){
        $http.get("json/attendance.json")
                .success(function(response) {
                    
            
                    $scope.attendanceService.names = response.attenrecords;
                    //var json= $scope.attendanceService.names;
                }
                );
        $location.path('/tab/present');

        }
        if($scope.attendanceService.sem === 'Sem 3' || $scope.attendanceService.sem === 'Sem 4'){
        $http.get("json/attendance.json")
                .success(function(response) {
                    
            
                    $scope.attendanceService.names = response.attenrecords;
                    
                }
                );
        $location.path('/tab/present');

        }
        }
       
         if ($scope.attendanceService.grad === 'B.tech')
        { 
        
         if($scope.attendanceService.sem === 'Sem 1' || $scope.attendanceService.sem === 'Sem 2'){
        $http.get("json/attendance.json")
                .success(function(response) {
                    
            
                    $scope.attendanceService.names = response.attenrecords;
                    
                }
                );
        $location.path('/tab/present');

        }
        if($scope.attendanceService.sem === 'Sem 3' || $scope.attendanceService.sem === 'Sem 4'){
        $http.get("json/attendance.json")
                .success(function(response) {
                    
            
                    $scope.attendanceService.names = response.attenrecords;
                    
                }
                );
        $location.path('/tab/present');

        }
        
        if($scope.attendanceService.sem === 'Sem 5' || $scope.attendanceService.sem === 'Sem 6'){
        $http.get("json/attendance.json")
                .success(function(response) {
                    
            
                    $scope.attendanceService.names = response.attenrecords;
                    
                }
                );
        $location.path('/tab/present');

        }
         if($scope.attendanceService.sem === 'Sem 7' || $scope.attendanceService.sem === 'Sem 8'){
        $http.get("json/attendance.json")
                .success(function(response) {
                    
            
                    $scope.attendanceService.names = response.attenrecords;
                    
                }
                );
        $location.path('/tab/present');

        }
        }
        };

});
   