var AccountModule;
(function (AccountModule) {
    var AccountModuleRoutes = /** @class */ (function () {
        function AccountModuleRoutes() {
        }
        AccountModuleRoutes.ConfigureRoutes = function ($routeProvider) {
            //$routeProvider
            //    .when( "/account",
            //    {
            //        controller: "AccountModule.Controllers.LoginController",
            //        templateUrl: "/MiniSpas/AccountModule/Views/login.html",
            //        controllerAs: "loginCtrl"
            //    })
            $routeProvider.otherwise({ redirectTo: "/" });
        };
        AccountModuleRoutes.$inject = ["$routeProvider"];
        return AccountModuleRoutes;
    }());
    AccountModule.AccountModuleRoutes = AccountModuleRoutes;
})(AccountModule || (AccountModule = {}));
//# sourceMappingURL=AccountModuleRoutes.js.map