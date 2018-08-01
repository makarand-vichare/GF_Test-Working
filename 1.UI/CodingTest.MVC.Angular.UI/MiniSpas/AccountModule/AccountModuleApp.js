/// <reference path="../../scripts/typings/angularjs/angular.d.ts" />
(function () {
    var accountModule = MiniSpas.ModuleInitiator.GetModule("AccountModule");
    accountModule.config(AccountModule.AccountModuleRoutes.ConfigureRoutes);
    accountModule.config(function ($httpProvider) {
        $httpProvider.defaults.withCredentials = true;
        $httpProvider.interceptors.push(Common.Interceptors.AuthenticationInterceptor.Factory);
    });
    accountModule.run(['AccountModule.Services.AuthService', function (authService) {
            authService.GetAuthData();
        }]);
})();
//# sourceMappingURL=AccountModuleApp.js.map