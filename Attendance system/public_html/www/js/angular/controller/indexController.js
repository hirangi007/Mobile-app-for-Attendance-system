app.controller('indexController', function($scope, utilService) {
    $scope.utilService = utilService;
    document.addEventListener("deviceready", onDeviceReady, true);
    function onDeviceReady() {
        alert("hii");
        document.addEventListener("backbutton", handleBackButtonOfMobile, false);
    }
    ;
    function handleBackButtonOfMobile() {
        alert("hii");
        angular.element('*[ng-app]').injector().get("utilService").handleBackButton();
    }
    ;
});