app.service('utilService', function ($state,
        $timeout, $ionicSideMenuDelegate, $location) {
    this.handleBackButton = function () {
        switch ($state.current.name.toString().toLowerCase().trim()) {

            case "login":
                alert("hii")
                navigator.app.exitApp();
                
                break;

//            case "tabs.customerlist":
//                alert("list");
//                if (sessionService.isAlertOpen === true) {
//                    console.log("if");
//                    sessionService.isAlertOpen = false;
//                    sessionService.alertPopup.close();
//                    $location.path('/tab/customerList');
//                }
//                else if ($ionicSideMenuDelegate.isOpen(true)) {
//                    alert("else");
//                    $ionicSideMenuDelegate.isOpen(false);
//                }
//                else {
//                    $timeout(function () {
//                        console.log("final else");
//                        customerListService.printTenCustomers = [];
//                        $location.path('login');
//                    }, 100);
//                }
//                break;
//
//            case "tabs.detailcustomer":
//                alert("detail");
//                if ($ionicSideMenuDelegate.isOpen(true)) {
//                    alert("if");
//                    $ionicSideMenuDelegate.isOpen = false;
//                }
//                else {
//                    alert("else");
//                    $location.path('/tab/customerList');
//                }
//                break;
//
//            case "tabs.facts2":
//                alert("fact");
//                break;
//
//            case "tabs.changepassword":
//                alert("change");
//                $location.path('/tab/customerList');
//                break;

            default :
                break;
        }
    };
});