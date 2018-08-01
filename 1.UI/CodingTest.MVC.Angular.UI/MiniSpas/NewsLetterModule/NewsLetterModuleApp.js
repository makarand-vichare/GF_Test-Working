/// <reference path="../../scripts/typings/angularjs/angular.d.ts" />
(function () {
    var newsLetterModule = MiniSpas.ModuleInitiator.GetModule("NewsLetterModule");
    newsLetterModule.config(NewsLetterModule.NewsLetterModuleRoutes.configureRoutes);
    newsLetterModule.config(function ($httpProvider) {
        $httpProvider.defaults.withCredentials = true;
        $httpProvider.interceptors.push(Common.Interceptors.AuthenticationInterceptor.Factory);
    });
    newsLetterModule.run(['AccountModule.Services.AuthService', function (authService) {
            authService.GetAuthData();
        }]);
})();
//# sourceMappingURL=NewsLetterModuleApp.js.map