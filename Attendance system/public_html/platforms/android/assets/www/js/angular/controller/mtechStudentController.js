app.controller('mtechStudentController', function ($scope, mtechStudentListService, $http) {
    $scope.mtechStudentListService = mtechStudentListService;
    console.log('ctrl');
    if ($scope.mtechStudentListService.index === 0 || $scope.mtechStudentListService.index === 1)
    {
        console.log($scope.mtechStudentListService.index);
        $http.get("json/mtechfirstyearstudents.json")
                .success(function(response) {
                    $scope.mtechStudentListService.names = response.custrecords;

                }
                );
    }
    if ($scope.mtechStudentListService.index === 2 || $scope.mtechStudentListService.index === 3)
    {
        console.log($scope.mtechStudentListService.index);
        $http.get("json/mtechsecondyearstudents.json")
                .success(function(response) {
                    $scope.mtechStudentListService.names = response.custrecords;

                }
                );
    }
});