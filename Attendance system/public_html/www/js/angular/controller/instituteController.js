app.controller('instituteController', function($scope, $location) {
    
    $scope.onClickCgpitInstitute = function() {
            $location.path('/tab/selectCources');
        };
        $scope.onClickCgbhaktaInstitute = function() {
            $location.path('/tab/selectCgbhaktaGraduation');
        };
  
         $scope.onClickMalibaInstitute = function() {
            $location.path('/tab/selectMaliba');
        };
        $scope.onClickShrimkaInstitute = function() {
            $location.path('/tab/selectSrimka');
        };
         $scope.onClickBvpatelInstitute = function() {
            $location.path('/tab/selectBvpatel');
        };
//         $scope.onClickNursingInstitute = function() {
//            $location.path('/tab/selectNursing');
//        };
});


