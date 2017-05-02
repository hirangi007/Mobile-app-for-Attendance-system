app.controller('btechStudentController', function ($scope, btechStudentListService, $http) {
    $scope.btechStudentListService = btechStudentListService;
    if ($scope.btechStudentListService.index === 0 || $scope.btechStudentListService.index === 1)
    {
//        console.log($scope.btechStudentListService.index);
        $http.get("json/firstyearstudents.json")
                .success(function(response) {
                    $scope.btechStudentListService.names = response.custrecords;

                }
                );
    }
    if ($scope.btechStudentListService.index === 2 || $scope.btechStudentListService.index === 3)
    {
        $http.get("json/secondyearstudents.json")
                .success(function(response) {
                    $scope.btechStudentListService.names = response.custrecords;

                }
                );
    }
    if ($scope.btechStudentListService.index === 4 || $scope.btechStudentListService.index === 5)
    {
        console.log($scope.btechStudentListService.index);
        $http.get("json/thirdyearstudents.json")
                .success(function(response) {
                    $scope.btechStudentListService.names = response.custrecords;
                }
                );
    }
    if ($scope.btechStudentListService.index === 6 || $scope.btechStudentListService.index === 7)
    {
        console.log($scope.btechStudentListService.index);
        $http.get("json/fourthyearstudents.json")
                .success(function(response) {
                    $scope.btechStudentListService.names = response.custrecords;
                }
                );
    }
});