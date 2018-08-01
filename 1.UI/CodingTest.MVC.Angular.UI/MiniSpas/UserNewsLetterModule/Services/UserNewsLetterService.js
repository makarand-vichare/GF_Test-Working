var UserNewsLetterModule;
(function (UserNewsLetterModule) {
    var Services;
    (function (Services) {
        var UserNewsLetterService = /** @class */ (function () {
            function UserNewsLetterService(httpService) {
                this.httpService = httpService;
            }
            UserNewsLetterService.prototype.UpdateMyNewsLetters = function (newsLetterId, userId) {
                var self = this;
                var data = { newsLetterId: newsLetterId, userId: userId };
                return self.httpService.post(Common.AppConstants.BaseWebApiUrl + '/api/UserNewsLetter/UpdateMyNewsLetters', data);
            };
            UserNewsLetterService.prototype.GetUserNewsLetters = function (userId) {
                var config = {
                    params: { userId: userId },
                    headers: { 'Accept': 'application/json' }
                };
                return this.httpService.get(Common.AppConstants.BaseWebApiUrl + '/api/UserNewsLetter/GetUserNewsLetters', config);
            };
            UserNewsLetterService.$inject = ["$http"];
            UserNewsLetterService.GetInstance = function () {
                var instance = function ($http) { return new UserNewsLetterService($http); };
                return instance;
            };
            return UserNewsLetterService;
        }());
        Services.UserNewsLetterService = UserNewsLetterService;
        MiniSpas.ModuleInitiator.GetModule("UserNewsLetterModule").service("UserNewsLetterModule.Services.UserNewsLetterService", UserNewsLetterService);
    })(Services = UserNewsLetterModule.Services || (UserNewsLetterModule.Services = {}));
})(UserNewsLetterModule || (UserNewsLetterModule = {}));
//# sourceMappingURL=UserNewsLetterService.js.map