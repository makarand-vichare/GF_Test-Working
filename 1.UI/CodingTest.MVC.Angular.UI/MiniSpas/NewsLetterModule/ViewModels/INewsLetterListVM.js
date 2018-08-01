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
    var ViewModels;
    (function (ViewModels) {
        var INewsLetterListVM = /** @class */ (function (_super) {
            __extends(INewsLetterListVM, _super);
            function INewsLetterListVM() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            return INewsLetterListVM;
        }(Common.ViewModels.IBaseVM));
        ViewModels.INewsLetterListVM = INewsLetterListVM;
    })(ViewModels = NewsLetterModule.ViewModels || (NewsLetterModule.ViewModels = {}));
})(NewsLetterModule || (NewsLetterModule = {}));
//# sourceMappingURL=INewsLetterListVM.js.map