app.controller('signupController', function ($scope, $ionicPopup, $location, signupService, loginService) {
    $scope.signupService = signupService;
    $scope.loginService = loginService;
    $scope.onClickSubmit = function () {
        if ($scope.signupService.typedFirstName !== '' && $scope.signupService.typedPassword !== '' && $scope.signupService.typedConfirmPassword !== '') {
            //if ($scope.signupService.typedPassword.length < 8){

            if ($scope.signupService.typedPassword !== $scope.signupService.typedConfirmPassword) {
                $ionicPopup.alert({
                    title: 'Alert!',
                    template: 'password does not match'
                });
            }

            else {
                //$scope.loginService.i++;
                var newUser = new function () {
                    this.username = $scope.signupService.typedFirstName;
                    this.password = $scope.signupService.typedPassword;
                };
                var currentList = $scope.loginService.users;
                var newList = currentList.concat(newUser);
                $scope.loginService.users = newList;
                var alertPopup = $ionicPopup.alert({
                    title: 'Success!',
                    template: 'Registration successfull'
                });
                alertPopup.then(function (res) {
                    $location.path("/login");
                });
            }
        }
        else {
            $ionicPopup.alert({
                title: 'Alert!',
                template: 'Enter information'
            });
        }
    };
});