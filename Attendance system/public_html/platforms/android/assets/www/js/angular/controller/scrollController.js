
app.controller('scrollController', function($scope, $ionicScrollDelegate) {
    $scope.scrollTop = function() {
        $ionicScrollDelegate.scrollTop();
    };
});

