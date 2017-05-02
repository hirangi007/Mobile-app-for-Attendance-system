
app.controller('presentAbsentController', function ($scope, $location) {

    $scope.onClickPresent = function () {
        $location.path('/tab/listPresent');
    };
    $scope.onClickAbsent = function () {
        $location.path('tab/listAbsent');
    };
});


