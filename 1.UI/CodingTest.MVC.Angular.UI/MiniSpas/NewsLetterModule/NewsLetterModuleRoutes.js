var NewsLetterModule;
(function (NewsLetterModule) {
    var NewsLetterModuleRoutes = /** @class */ (function () {
        function NewsLetterModuleRoutes() {
        }
        NewsLetterModuleRoutes.configureRoutes = function ($routeProvider) {
            $routeProvider
                .when("/", {
                controller: "NewsLetterModule.Controllers.NewsLetterController",
                templateUrl: "/MiniSpas/NewsLetterModule/Views/newsLetters.html",
                controllerAs: "newsLetterCtrl"
            });
            $routeProvider.otherwise({ redirectTo: "/" });
        };
        NewsLetterModuleRoutes.$inject = ["$routeProvider"];
        return NewsLetterModuleRoutes;
    }());
    NewsLetterModule.NewsLetterModuleRoutes = NewsLetterModuleRoutes;
})(NewsLetterModule || (NewsLetterModule = {}));
//# sourceMappingURL=NewsLetterModuleRoutes.js.map