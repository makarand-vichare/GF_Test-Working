var HomeModule;
(function (HomeModule) {
    var Services;
    (function (Services) {
        var TestApiService = /** @class */ (function () {
            function TestApiService(httpService) {
                this.httpService = httpService;
            }
            TestApiService.prototype.GetTestValuesList = function () {
                return this.httpService.get(Common.AppConstants.BaseWebApiUrl + '/api/TestApi');
            };
            TestApiService.$inject = ["$http", "$location"];
            TestApiService.GetInstance = function () {
                var instance = function ($http) { return new TestApiService($http); };
                return instance;
            };
            return TestApiService;
        }());
        Services.TestApiService = TestApiService;
        MiniSpas.ModuleInitiator.GetModule("HomeModule").service("HomeModule.Services.TestApiService", TestApiService);
    })(Services = HomeModule.Services || (HomeModule.Services = {}));
})(HomeModule || (HomeModule = {}));
//# sourceMappingURL=TestApiService.js.map