var UserNewsLetterModule;
(function (UserNewsLetterModule) {
    var UserNewsLetterModuleRoutes = /** @class */ (function () {
        function UserNewsLetterModuleRoutes() {
        }
        UserNewsLetterModuleRoutes.configureRoutes = function ($routeProvider) {
            $routeProvider
                .when("/", {
                controller: "UserNewsLetterModule.Controllers.UserNewsLetterController",
                templateUrl: "/MiniSpas/UserNewsLetterModule/Views/userNewsLetters.html",
                controllerAs: "userNewsLetterCtrl"
            });
            $routeProvider.otherwise({ redirectTo: "/" });
        };
        UserNewsLetterModuleRoutes.$inject = ["$routeProvider"];
        return UserNewsLetterModuleRoutes;
    }());
    UserNewsLetterModule.UserNewsLetterModuleRoutes = UserNewsLetterModuleRoutes;
})(UserNewsLetterModule || (UserNewsLetterModule = {}));
//# sourceMappingURL=UserNewsLetterModuleRoutes.js.map