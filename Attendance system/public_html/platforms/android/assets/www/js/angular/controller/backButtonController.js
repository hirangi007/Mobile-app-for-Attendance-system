app.controller('backButtonController', function($scope, $location) {
    $scope.onClickCourseBackButton = function() {
        $location.path('/tab/selectInstitute');
    };
    $scope.onClickSignupBackButton = function() {
        $location.path('/login');
    };
    $scope.onClickGraduationBackButton = function() {
        $location.path('/tab/selectCources');
    };
    $scope.onClickBtechBackButton = function() {
        $location.path('/tab/selectGraduation');
    };
    $scope.onClickMtechBackButton = function() {
        $location.path('/tab/selectGraduation');
    };
});


