var HomeModule;
(function (HomeModule) {
    var HomeModuleRoutes = /** @class */ (function () {
        function HomeModuleRoutes() {
        }
        HomeModuleRoutes.ConfigureRoutes = function ($routeProvider) {
            $routeProvider
                .when("/", {
                controller: "AccountModule.Controllers.SignupController",
                templateUrl: "/MiniSpas/AccountModule/Views/signup.html",
                controllerAs: "signupCtrl"
            })
                .when("/home", {
                controller: "HomeModule.Controllers.HomeController",
                templateUrl: "/MiniSpas/HomeModule/Views/home.html",
                controllerAs: "homeCtrl"
            })
                .when("/login", {
                controller: "AccountModule.Controllers.LoginController",
                templateUrl: "/MiniSpas/AccountModule/Views/login.html",
                controllerAs: "loginCtrl"
            })
                .when("/signup", {
                controller: "AccountModule.Controllers.SignupController",
                templateUrl: "/MiniSpas/AccountModule/Views/signup.html",
                controllerAs: "signupCtrl"
            });
            $routeProvider.otherwise({ redirectTo: "/" });
        };
        HomeModuleRoutes.$inject = ["$routeProvider"];
        return HomeModuleRoutes;
    }());
    HomeModule.HomeModuleRoutes = HomeModuleRoutes;
})(HomeModule || (HomeModule = {}));
//# sourceMappingURL=HomeModuleRoutes.js.map