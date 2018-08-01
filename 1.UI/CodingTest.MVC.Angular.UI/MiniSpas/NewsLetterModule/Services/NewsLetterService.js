var NewsLetterModule;
(function (NewsLetterModule) {
    var Services;
    (function (Services) {
        var NewsLetterService = /** @class */ (function () {
            function NewsLetterService(httpService) {
                this.httpService = httpService;
            }
            NewsLetterService.prototype.GetTopNewsLetters = function (userId) {
                var config = {
                    params: { userId: userId },
                    headers: { 'Accept': 'application/json' }
                };
                return this.httpService.get(Common.AppConstants.BaseWebApiUrl + '/api/NewsLetters/GetTopNewsLetters', config);
            };
            NewsLetterService.prototype.GetNewsLetters = function (searchParam) {
                var config = {
                    params: searchParam,
                    headers: { 'Accept': 'application/json' }
                };
                return this.httpService.get(Common.AppConstants.BaseWebApiUrl + '/api/NewsLetters/GetNewsLetters', config);
            };
            NewsLetterService.$inject = ["$http"];
            NewsLetterService.GetInstance = function () {
                var instance = function ($http) { return new NewsLetterService($http); };
                return instance;
            };
            return NewsLetterService;
        }());
        Services.NewsLetterService = NewsLetterService;
        MiniSpas.ModuleInitiator.GetModule("NewsLetterModule").service("NewsLetterModule.Services.NewsLetterService", NewsLetterService);
    })(Services = NewsLetterModule.Services || (NewsLetterModule.Services = {}));
})(NewsLetterModule || (NewsLetterModule = {}));
//# sourceMappingURL=NewsLetterService.js.map