app.config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
            .state('login', {
                url: "/login",
                templateUrl: "partials/login.html"
            })
            
            .state('signup', {
                url: "/signup",
                templateUrl: "partials/signup.html"
            })
            .state('tabs', {
                url: "/tab",
                abstract: true,
                templateUrl: "partials/tabs.html"
            })
            .state('tabs.selectCources', {
                url: "/selectCources",
                views: {
                    'home-tab': {
                        templateUrl: "partials/selectCources.html"
                    }
                }
            })
            .state('tabs.btechStudentList', {
                url: "/btechStudentList",
                views: {
                    'home-tab': {
                        templateUrl: "partials/btechStudentList.html"
                    }
                }
            })
            .state('tabs.selectPresentOrAbsentList', {
                url: "/selectPresentOrAbsentList",
                views: {
                    'home-tab': {
                        templateUrl: "partials/selectPresentOrAbsentList.html"
                    }
                }
            })
            .state('tabs.mtechStudentList', {
                url: "/mtechStudentList",
                views: {
                    'home-tab': {
                        templateUrl: "partials/mtechStudentList.html"
                    }
                }
            })
            .state('tabs.listAbsent', {
                url: "/listAbsent",
                views: {
                    'home-tab': {
                        templateUrl: "partials/listAbsent.html"
                    }
                }
            })
            .state('tabs.present', {
                url: "/present",
                views: {
                    'home-tab': {
                        templateUrl: "partials/present.html"
                    }
                }
            })
            .state('tabs.listPresent', {
                url: "/listPresent",
                views: {
                    'home-tab': {
                        templateUrl: "partials/listPresent.html"
                    }
                }
            })
            .state('tabs.selectGraduation', {
                url: "/selectGraduation",
                views: {
                    'home-tab': {
                        templateUrl: "partials/selectGraduation.html"
                    }
                }
            })
            .state('tabs.selectInstitute', {
                url: "/selectInstitute",
                views: {
                    'home-tab': {
                        templateUrl: "partials/selectInstitute.html"
                    }
                }
            })
            .state('tabs.selectCgbhaktaGraduation', {
                url: "/selectCgbhaktaGraduation",
                views: {
                    'home-tab': {
                        templateUrl: "partials/selectCgbhaktaGraduation.html"
                    }
                }
            })
            .state('tabs.selectMaliba', {
                url: "/selectMaliba",
                views: {
                    'home-tab': {
                        templateUrl: "partials/selectMaliba.html"
                    }
                }
            })
            .state('tabs.selectBvpatel', {
                url: "/selectBvpatel",
                views: {
                    'home-tab': {
                        templateUrl: "partials/selectBvpatel.html"
                    }
                }
            })
            .state('tabs.selectSrimka', {
                url: "/selectSrimka",
                views: {
                    'home-tab': {
                        templateUrl: "partials/selectSrimka.html"
                    }
                }
            })
            .state('tabs.attendanceManager', {
                url: "/attendanceManager",
                views: {
                    'about-tab': {
                        templateUrl: "partials/attendanceManager.html"
                    }
                }
            });
    $urlRouterProvider.otherwise('login');
});
