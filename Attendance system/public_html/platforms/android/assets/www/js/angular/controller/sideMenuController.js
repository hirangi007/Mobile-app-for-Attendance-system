app.controller('sideMenuController', function ($scope, $ionicSideMenuDelegate) {

    $scope.opensidemenu = function () {

        $ionicSideMenuDelegate.toggleRight();
//       // console.log("hi");
//        $ionicSideMenuDelegate.isOpen(false);
    };
});

