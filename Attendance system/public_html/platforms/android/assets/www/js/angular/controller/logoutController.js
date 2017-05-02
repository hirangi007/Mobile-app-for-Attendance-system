app.controller('logoutController', function($scope, loginService,signupService) {
    $scope.loginService=loginService;
    $scope.signupService=signupService;
    $scope.onClickLogout = function() {
        $scope.loginService.typedUserName='';
        $scope.loginService.typedPassword='';
        $scope.signupService.typedFirstName='';
        $scope.signupService.typedPassword='';
        $scope.signupService.typedConfirmPassword='';
    };
});


