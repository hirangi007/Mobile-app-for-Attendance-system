
app.controller('submitController', function ($scope, $location, submitService, btechStudentListService,mtechStudentListService) {
    
    $scope.submitService = submitService;
    $scope.btechStudentListService = btechStudentListService;
    $scope.mtechStudentListService = mtechStudentListService;
    console.log($scope.btechStudentListService.names);
    $scope.onClickBSubmit = function () {
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
    $scope.onClickMSubmit = function () {
        for (var i = 0; i < $scope.mtechStudentListService.names.length; i++) {
            if ($scope.mtechStudentListService.names[i].Checked === true) {
                $scope.submitService.absent
                        .push($scope.mtechStudentListService.names[i]);
            }
            else{
                $scope.submitService.present
                        .push($scope.mtechStudentListService.names[i]);
            }
        }
        $location.path('/tab/selectPresentOrAbsentList');
    };
});


