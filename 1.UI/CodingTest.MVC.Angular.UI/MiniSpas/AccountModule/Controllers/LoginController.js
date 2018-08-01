var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var AccountModule;
(function (AccountModule) {
    var Controllers;
    (function (Controllers) {
        var LoginController = /** @class */ (function (_super) {
            __extends(LoginController, _super);
            function LoginController(_injectorService, authService, cookieStoreService) {
                var _this = _super.call(this, _injectorService) || this;
                _this.authService = authService;
                _this.cookieStoreService = cookieStoreService;
                _this.loginVM = {
                    Email: "",
                    Password: ""
                };
                _this.Initialize();
                return _this;
            }
            LoginController.prototype.Login = function (loginData) {
                var self = this;
                self.authService.Login(loginData).then(function (response) {
                    if (response.data != null) {
                        self.windowService.location.href = '/NewsLetter';
                    }
                })
                    .catch(function (response) {
                    self.ProcessInfo.Message = response.data;
                })
                    .finally(function () {
                    self.ProcessInfo.Loading = false;
                });
            };
            LoginController.prototype.OnLanguageChange = function () {
                var self = this;
                self.cookieStoreService.put('langCode', self.selectedLanguage);
            };
            LoginController.prototype.LogOut = function () {
                var self = this;
                self.authService.LogOut();
                self.windowService.location.href = '/Home/#/home';
            };
            LoginController.prototype.Initialize = function () {
                var self = this;
                self.authenticationVM = self.authService.authVM;
                self.selectedLanguage = self.cookieStoreService.get('langCode') != null ? self.cookieStoreService.get('langCode') : 'en-us';
            };
            LoginController.$inject = ["$injector", "AccountModule.Services.AuthService", "$cookieStore"];
            return LoginController;
        }(Common.Controllers.BaseController));
        Controllers.LoginController = LoginController;
        MiniSpas.ModuleInitiator.GetModule("AccountModule").controller("AccountModule.Controllers.LoginController", LoginController);
    })(Controllers = AccountModule.Controllers || (AccountModule.Controllers = {}));
})(AccountModule || (AccountModule = {}));
//# sourceMappingURL=LoginController.js.map