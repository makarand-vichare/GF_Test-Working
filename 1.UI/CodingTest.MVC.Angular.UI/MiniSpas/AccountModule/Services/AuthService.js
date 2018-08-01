var AccountModule;
(function (AccountModule) {
    var Services;
    (function (Services) {
        var AuthService = /** @class */ (function () {
            function AuthService($http, _localStorageService) {
                var _this = this;
                this.isAuth = false;
                this.authVM = {
                    IsAuth: this.isAuth,
                    Email: "",
                    Id: 0
                };
                this.Login = function (loginData) {
                    var self = _this;
                    var data = "grant_type=password&username=" + loginData.Email + "&password=" + loginData.Password;
                    return self.httpService.post(Common.AppConstants.BaseWebApiUrl + '/token', data, { headers: { 'Content-Type': 'application/x-www-form-urlencoded' } })
                        .then(function (response) {
                        self.localStorageService.set('authorizationData', {
                            Token: response.data.access_token,
                            Email: loginData.Email,
                            Id: response.data.id
                        });
                        self.authVM.IsAuth = !self.isAuth;
                        self.authVM.Email = loginData.Email;
                        self.authVM.Id = response.data.id;
                        return response;
                    }).catch(function (response) {
                        self.LogOut();
                        return response;
                    });
                };
                this.LogOut = function () {
                    var self = _this;
                    self.localStorageService.remove('authorizationData');
                    self.authVM.IsAuth = self.isAuth;
                    self.authVM.Id = 0;
                    self.authVM.Email = "";
                };
                this.GetAuthData = function () {
                    var self = _this;
                    var authData = self.localStorageService.get('authorizationData');
                    if (authData != null) {
                        self.authVM.IsAuth = !self.isAuth;
                        self.authVM.Email = authData.Email;
                        self.authVM.Id = authData.Id;
                    }
                };
                this.GetAntiForgeryToken = function () {
                    var self = _this;
                    return self.httpService.get(Common.AppConstants.BaseWebApiUrl + '/api/Antiforgerytoken/GetAntiForgeryToken')
                        .then(function (response) {
                        return response;
                    })
                        .catch(function (response) {
                        return response;
                    });
                };
                this.httpService = $http;
                this.localStorageService = _localStorageService;
            }
            AuthService.prototype.SignUp = function (registration) {
                var self = this;
                return self.httpService.post(Common.AppConstants.BaseWebApiUrl + '/api/Account/Register', registration)
                    .then(function (response) {
                    return response;
                }).catch(function (response) {
                    return response;
                });
            };
            AuthService.getInstance = function () {
                var instance = function ($http, _localStorageService) { return new AuthService($http, _localStorageService); };
                return instance;
            };
            AuthService.$inject = ["$http", "localStorageService"];
            return AuthService;
        }());
        Services.AuthService = AuthService;
        MiniSpas.ModuleInitiator.GetModule("AccountModule").service("AccountModule.Services.AuthService", AuthService);
    })(Services = AccountModule.Services || (AccountModule.Services = {}));
})(AccountModule || (AccountModule = {}));
//# sourceMappingURL=AuthService.js.map