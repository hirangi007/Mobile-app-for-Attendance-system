
app.controller('presentAbsentController', function ($scope, $location,submitService) {
    $scope.submitService = submitService;

    $scope.onClickPresent = function () {
        $location.path('/tab/listPresent');
    };
    $scope.onClickAbsent = function () {
        $location.path('tab/listAbsent');
    };
    $scope.onClickSelectPresentAbsentBackButton = function () {
        $scope.submitService.absent=[];
        $scope.submitService.present=[];
        $location.path('tab/selectGraduation');
    };
    $scope.onClickListPresentBackButton = function () {
        $location.path('tab/selectPresentOrAbsentList');
    };
    $scope.onClickListAbsentBackButton = function () {
        $location.path('tab/selectPresentOrAbsentList');
    };
});


