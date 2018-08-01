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
var UserNewsLetterModule;
(function (UserNewsLetterModule) {
    var Controllers;
    (function (Controllers) {
        var UserNewsLetterController = /** @class */ (function (_super) {
            __extends(UserNewsLetterController, _super);
            function UserNewsLetterController(_injectorService, userNewsLetterService, authService) {
                var _this = _super.call(this, _injectorService) || this;
                _this.userNewsLetterService = userNewsLetterService;
                _this.authService = authService;
                _this.GetUserNewsLetters = function () {
                    var self = _this;
                    self.StartProcess();
                    self.userNewsLetterService.GetUserNewsLetters(self.authService.authVM.Id)
                        .then(function (response) {
                        self.myNewsLetterList = response.data.viewModels;
                        self.ProcessInfo.Message = response.data.message;
                        self.ProcessInfo.IsSucceed = true;
                    })
                        .catch(function (response) {
                        self.ProcessInfo.Message = response.data;
                    })
                        .finally(function () {
                        self.ProcessInfo.Loading = false;
                    });
                };
                _this.UpdateMyNewsLetters = function (newsLetterId) {
                    var self = _this;
                    self.StartProcess();
                    self.userNewsLetterService.UpdateMyNewsLetters(newsLetterId, self.authService.authVM.Id)
                        .then(function (response) {
                        self.ProcessInfo.Message = response.data.message;
                        self.ProcessInfo.IsSucceed = true;
                    })
                        .catch(function (response) {
                        self.ProcessInfo.Message = response.data.message;
                    })
                        .finally(function () {
                        self.ProcessInfo.Loading = false;
                    });
                };
                return _this;
                // this.Initialize();
            }
            UserNewsLetterController.prototype.Initialize = function () {
                var self = this;
                self.authService.GetAuthData();
                self.GetUserNewsLetters();
            };
            UserNewsLetterController.$inject = ["$injector", "UserNewsLetterModule.Services.UserNewsLetterService", "AccountModule.Services.AuthService"];
            return UserNewsLetterController;
        }(Common.Controllers.BaseController));
        Controllers.UserNewsLetterController = UserNewsLetterController;
        MiniSpas.ModuleInitiator.GetModule("UserNewsLetterModule").controller("UserNewsLetterModule.Controllers.UserNewsLetterController", UserNewsLetterController);
    })(Controllers = UserNewsLetterModule.Controllers || (UserNewsLetterModule.Controllers = {}));
})(UserNewsLetterModule || (UserNewsLetterModule = {}));
//# sourceMappingURL=UserNewsLetterController.js.map