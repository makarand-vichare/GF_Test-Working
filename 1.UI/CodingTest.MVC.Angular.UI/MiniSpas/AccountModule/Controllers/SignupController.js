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
        var SignupController = /** @class */ (function (_super) {
            __extends(SignupController, _super);
            function SignupController(_injectorService, authService, timeOutService, newsLetterService, localizationService) {
                var _this = _super.call(this, _injectorService) || this;
                _this.authService = authService;
                _this.timeOutService = timeOutService;
                _this.newsLetterService = newsLetterService;
                _this.localizationService = localizationService;
                _this.SignUp = function () {
                    var self = _this;
                    self.StartProcess();
                    self.signUpVM.NewsLetterIds = self.GetSelectedIds(self.signUpVM.NewsLetterList);
                    self.authService.SignUp(self.signUpVM)
                        .then(function (response) {
                        if (response.status == 400) {
                            if (response.data.modelState != null) {
                                var errors = new Array();
                                for (var key in response.data.modelState) {
                                    for (var i = 0; i < response.data.modelState[key].length; i++) {
                                        errors.push(response.data.modelState[key][i]);
                                    }
                                }
                                self.ProcessInfo.Message = "Failed to register user due to:" + errors.join(' ');
                            }
                            else {
                                self.ProcessInfo.Message = response.data.message;
                            }
                        }
                        else {
                            self.ProcessInfo.Message = response.data.message;
                            self.ProcessInfo.IsSucceed = true;
                            self.StartTimer();
                        }
                    })
                        .catch(function (response) {
                        self.ProcessInfo.Message = "Failed to register user due to:" + response.data.message;
                    })
                        .finally(function () {
                        self.ProcessInfo.Loading = false;
                    });
                    ;
                };
                _this.StartTimer = function () {
                    var self = _this;
                    var timer = self.timeOutService(function () {
                        self.timeOutService.cancel(timer);
                        self.locationService.path('/login');
                    }, 2000);
                };
                _this.GetLocalizedValue = function (key) {
                    var self = _this;
                    var result = (_this.fieldCaptions != null && _this.fieldCaptions[key] != null) ? _this.fieldCaptions[key] : '$' + key + '$';
                    return result;
                };
                _this.Initialize();
                return _this;
            }
            SignupController.prototype.GetSelectedIds = function (newsLetterIds) {
                var self = this;
                var output = '';
                angular.forEach(newsLetterIds, function (newsLetter, key) {
                    if (newsLetter.isSubscribed) {
                        output += newsLetter.id + ',';
                    }
                });
                return output;
            };
            SignupController.prototype.Initialize = function () {
                var self = this;
                self.signUpVM = {
                    Password: "",
                    Id: null,
                    UserName: "",
                    HeardAboutUsList: Common.AppConstants.HeardAboutUsList,
                    HeardAboutUs: Common.HeardAboutUsList.Advert,
                };
                self.newsLetterService.GetTopNewsLetters(0)
                    .then(function (response) {
                    self.signUpVM.NewsLetterList = response.data.viewModels;
                })
                    .catch(function (response) {
                    self.ProcessInfo.Message = response.data.message;
                })
                    .finally(function () {
                });
                self.localizationService.GetLocalizationData('SignUpPage')
                    .then(function (response) {
                    self.fieldCaptions = response.data;
                })
                    .catch(function (response) {
                })
                    .finally(function () {
                });
            };
            SignupController.$inject = ["$injector", "AccountModule.Services.AuthService", "$timeout", "NewsLetterModule.Services.NewsLetterService", "AccountModule.Services.LocalizationService"];
            return SignupController;
        }(Common.Controllers.BaseController));
        Controllers.SignupController = SignupController;
        MiniSpas.ModuleInitiator.GetModule("AccountModule").controller("AccountModule.Controllers.SignupController", SignupController);
    })(Controllers = AccountModule.Controllers || (AccountModule.Controllers = {}));
})(AccountModule || (AccountModule = {}));
//# sourceMappingURL=SignupController.js.map