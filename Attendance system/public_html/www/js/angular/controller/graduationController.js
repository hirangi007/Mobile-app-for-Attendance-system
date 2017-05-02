app.controller('graduationController', function ($scope, $ionicActionSheet, btechStudentListService, mtechStudentListService, $location) {
    $scope.myActiveSlide = 1;
    $scope.btechStudentListService = btechStudentListService;
    $scope.mtechStudentListService = mtechStudentListService;

    $scope.onClickBtech = function () {
        $ionicActionSheet.show({
            titleText: 'Select Semester',
            buttons: [
                {text: '<i class="icon ion-share"></i> Semester 1'},
                {text: '<i class="icon ion-share"></i> Semester 2'},
                {text: '<i class="icon ion-share"></i> Semester 3'},
                {text: '<i class="icon ion-share"></i> Semester 4'},
                {text: '<i class="icon ion-share"></i> Semester 5'},
                {text: '<i class="icon ion-share"></i> Semester 6'},
                {text: '<i class="icon ion-share"></i> Semester 7'},
                {text: '<i class="icon ion-share"></i> Semester 8'}
            ],
            cancelText: 'Cancel',
            cancel: function () {
                console.log('CANCELLED');
            },
            buttonClicked: function (index) {
                btechStudentListService.index = index;
//                console.log("index : " + btechStudentListService.index);
                $location.path("/tab/btechStudentList");
                return true;
            }

        });
    };
    $scope.onClickMtech = function () {
        $ionicActionSheet.show({
            titleText: 'Select Semester',
            buttons: [
                {text: '<i class="icon ion-share"></i> Semester 1'},
                {text: '<i class="icon ion-share"></i> Semester 2'},
                {text: '<i class="icon ion-share"></i> Semester 3'},
                {text: '<i class="icon ion-share"></i> Semester 4'}

            ],
            cancelText: 'Cancel',
            cancel: function () {
                console.log('CANCELLED');
            },
            buttonClicked: function (index) {
                mtechStudentListService.index = index;
//                console.log("index : " + mtechStudentListService.index);
                $location.path("/tab/mtechStudentList");
                return true;
            }

        });
    };
});


