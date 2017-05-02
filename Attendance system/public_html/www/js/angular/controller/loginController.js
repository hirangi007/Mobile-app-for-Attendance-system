app.controller('loginController', function ($scope, $ionicPopup, $location, loginService) {
    $scope.loginService = loginService;
    $scope.navigation = false;

    $scope.onClickLogin = function () {
        if ($scope.loginService.typedUserName !== '' && $scope.loginService.typedPassword !== '') {
            for (var i = 0; i < $scope.loginService.users.length; i++) {
             //$http.get("http://192.168.137.213:8084/demo/test.htm?cmdAction=testData&userName=" + $scope.loginService.typedUserName).success(function (response) {
 //               $scope.names = response.records;
               // console.log('Found Employee which contains - ' );
           // });
            //var emp = $scope.employees]();
//               var temp=[{username:$scope.loginService.typedUserName,password:$scope.loginService.typedPassword}];
//                console.log('Found Employee which contains - ' + temp);
   //         $ionicPopup.alert({
     //           title: 'Alert!',
       //         template: 'test:'
         //   });

                if ($scope.loginService.users[i].username === $scope.loginService.typedUserName) {
                    if ($scope.loginService.users[i].password === $scope.loginService.typedPassword) {
                        $location.path('/tab/selectInstitute');
                        $scope.navigation = true;
                    }
                    else
                        $scope.navigation = false;
                }
      }
            if ($scope.navigation === false) {
                $ionicPopup.alert({
                    title: 'Alert!',
                    template: 'Invalid username or password'
                });
            }
        }
       else
        {
            $ionicPopup.alert({
                title: 'Alert!',
                template: 'Enter username and password'
            });
    };
    };
//    $scope.employees = function () {
//        console.log("hello");
//        return $http.get("http://192.168.137.213:8084/demo/test.htm?cmdAction=testData")
//                .then(function (response) {
//                    console.log('which contains - ' + response.data);
//                    return serviceResp.data;
//                }).catch(function (response) {
//            console.error('Gists error', response.status, response.data);
//        })
//                .finally(function () {
//                    console.log("finally finished gists");
//                });
//
//    };
});