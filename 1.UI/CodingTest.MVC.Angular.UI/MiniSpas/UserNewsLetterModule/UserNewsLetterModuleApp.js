/// <reference path="../../scripts/typings/angularjs/angular.d.ts" />
(function () {
    var userNewsLetterModule = MiniSpas.ModuleInitiator.GetModule("UserNewsLetterModule");
    userNewsLetterModule.config(UserNewsLetterModule.UserNewsLetterModuleRoutes.configureRoutes);
    userNewsLetterModule.config(function ($httpProvider) {
        $httpProvider.defaults.withCredentials = true;
        $httpProvider.interceptors.push(Common.Interceptors.AuthenticationInterceptor.Factory);
    });
    userNewsLetterModule.run(['AccountModule.Services.AuthService', function (authService) {
            authService.GetAuthData();
        }]);
})();
//# sourceMappingURL=UserNewsLetterModuleApp.js.map