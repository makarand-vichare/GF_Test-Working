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
    var ViewModels;
    (function (ViewModels) {
        var IAuthenticationVM = /** @class */ (function (_super) {
            __extends(IAuthenticationVM, _super);
            function IAuthenticationVM() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            return IAuthenticationVM;
        }(Common.ViewModels.IBaseVM));
        ViewModels.IAuthenticationVM = IAuthenticationVM;
    })(ViewModels = AccountModule.ViewModels || (AccountModule.ViewModels = {}));
})(AccountModule || (AccountModule = {}));
//# sourceMappingURL=IAuthenticationVM.js.map