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
var NewsLetterModule;
(function (NewsLetterModule) {
    var Controllers;
    (function (Controllers) {
        var NewsLetterController = /** @class */ (function (_super) {
            __extends(NewsLetterController, _super);
            function NewsLetterController(_injectorService, newsLetterService, authService) {
                var _this = _super.call(this, _injectorService) || this;
                _this.newsLetterService = newsLetterService;
                _this.authService = authService;
                _this.GetTopNewsLetters = function () {
                    var self = _this;
                    self.StartProcess();
                    self.newsLetterService.GetTopNewsLetters(0)
                        .then(function (response) {
                        self.newsLetterList = response.data.viewModels;
                        self.ProcessInfo.IsSucceed = true;
                        self.ProcessInfo.Message = response.data.message;
                    })
                        .catch(function (response) {
                        self.ProcessInfo.Message = response.data.message;
                    })
                        .finally(function () {
                        self.ProcessInfo.Loading = false;
                    });
                };
                _this.GetNewsLetters = function () {
                    var self = _this;
                    self.StartProcess();
                    self.newsLetterService.GetNewsLetters(self.searchNewsLetterParamVM)
                        .then(function (response) {
                        self.newsLetterList = response.data.viewModels;
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
            NewsLetterController.prototype.Initialize = function () {
                var self = this;
                self.GetTopNewsLetters();
                self.authService.GetAuthData();
                self.authenticationVM = self.authService.authVM;
                self.searchNewsLetterParamVM = {
                    Publisher: "",
                    Author: "",
                    UserId: self.authService.authVM.Id
                };
            };
            NewsLetterController.$inject = ["$injector", "NewsLetterModule.Services.NewsLetterService", "AccountModule.Services.AuthService"];
            return NewsLetterController;
        }(Common.Controllers.BaseController));
        Controllers.NewsLetterController = NewsLetterController;
        MiniSpas.ModuleInitiator.GetModule("NewsLetterModule").controller("NewsLetterModule.Controllers.NewsLetterController", NewsLetterController);
    })(Controllers = NewsLetterModule.Controllers || (NewsLetterModule.Controllers = {}));
})(NewsLetterModule || (NewsLetterModule = {}));
//# sourceMappingURL=NewsLetterController.js.map