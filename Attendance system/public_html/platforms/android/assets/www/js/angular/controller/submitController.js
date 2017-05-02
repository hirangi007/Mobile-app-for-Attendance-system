
app.controller('submitController', function ($scope, $location, submitService, btechStudentListService) {
    
    $scope.submitService = submitService;
    $scope.btechStudentListService = btechStudentListService;
    console.log($scope.btechStudentListService.names);
    $scope.onClickSubmit = function () {
        for (var i = 0; i < $scope.btechStudentListService.names.length; i++) {
            if ($scope.btechStudentListService.names[i].Checked === true) {
                $scope.submitService.absent
                        .push($scope.btechStudentListService.names[i]);
            }
            else{
                $scope.submitService.present
                        .push($scope.btechStudentListService.names[i]);
            }
        }
        $location.path('/tab/selectPresentOrAbsentList');
    };
});


