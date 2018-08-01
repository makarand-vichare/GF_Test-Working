var AccountModule;
(function (AccountModule) {
    var Services;
    (function (Services) {
        var LocalizationService = /** @class */ (function () {
            function LocalizationService(_httpService, _localStorageService, _cookieStore) {
                var _this = this;
                this.GetLocalizationData = function (keyGroup) {
                    var self = _this;
                    var languageCode = self.cookieStoreService.get('langCode') != null ? self.cookieStoreService.get('langCode') : 'en-us';
                    var config = {
                        params: { keyGroup: keyGroup, languageCode: languageCode },
                        headers: { 'Accept': 'application/json' }
                    };
                    return self.httpService.get(Common.AppConstants.BaseWebApiUrl + '/api/Localizations/GetResourceKeys', config)
                        .then(function (response) {
                        return response;
                    })
                        .catch(function (response) {
                        return response;
                    });
                };
                this.httpService = _httpService;
                this.localStorageService = _localStorageService;
                this.cookieStoreService = _cookieStore;
            }
            LocalizationService.getInstance = function () {
                var instance = function ($http, _localStorageService) { return new Services.AuthService($http, _localStorageService); };
                return instance;
            };
            LocalizationService.$inject = ["$http", "localStorageService", "$cookieStore"];
            return LocalizationService;
        }());
        Services.LocalizationService = LocalizationService;
        MiniSpas.ModuleInitiator.GetModule("AccountModule").service("AccountModule.Services.LocalizationService", LocalizationService);
    })(Services = AccountModule.Services || (AccountModule.Services = {}));
})(AccountModule || (AccountModule = {}));
//# sourceMappingURL=LocalizationService.js.map