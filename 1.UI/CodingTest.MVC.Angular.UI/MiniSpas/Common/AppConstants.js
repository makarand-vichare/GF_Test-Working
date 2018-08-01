var Common;
(function (Common) {
    var AppConstants = /** @class */ (function () {
        function AppConstants() {
        }
        Object.defineProperty(AppConstants, "BaseWebApiUrl", {
            get: function () { return "http://localhost:8888"; },
            enumerable: true,
            configurable: true
        });
        ;
        Object.defineProperty(AppConstants, "HeardAboutUsList", {
            get: function () {
                return [
                    { id: Common.HeardAboutUsList.Advert, name: "Advert" },
                    { id: Common.HeardAboutUsList.WordOfMouth, name: "Word of Mouth" },
                    { id: Common.HeardAboutUsList.Other, name: "Other" }
                ];
            },
            enumerable: true,
            configurable: true
        });
        ;
        return AppConstants;
    }());
    Common.AppConstants = AppConstants;
    var HeardAboutUsList;
    (function (HeardAboutUsList) {
        HeardAboutUsList[HeardAboutUsList["Advert"] = 1] = "Advert";
        HeardAboutUsList[HeardAboutUsList["WordOfMouth"] = 2] = "WordOfMouth";
        HeardAboutUsList[HeardAboutUsList["Other"] = 3] = "Other";
    })(HeardAboutUsList = Common.HeardAboutUsList || (Common.HeardAboutUsList = {}));
    MiniSpas.ModuleInitiator.GetModule("Common").constant("Common.AppConstants", AppConstants);
})(Common || (Common = {}));
//# sourceMappingURL=AppConstants.js.map