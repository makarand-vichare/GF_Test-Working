var MiniSpas;
(function (MiniSpas) {
    var ModuleInitiator = /** @class */ (function () {
        function ModuleInitiator() {
        }
        ModuleInitiator.GetModule = function (moduleName) {
            try {
                return angular.module(moduleName);
            }
            catch (error) {
                var dependencies = this.modulesList.filter(function (o) { return o.name == moduleName; }).shift().dependencies;
                return angular.module(moduleName, dependencies);
            }
        };
        ;
        ModuleInitiator.modulesList = [
            { name: 'MiniSpas', dependencies: Array() },
            { name: 'Common', dependencies: Array() },
            { name: 'AccountModule', dependencies: Array("ngRoute", "NewsLetterModule", "Common", "LocalStorageModule", "angular-loading-bar", "ngMessages", "ngCookies") },
            { name: 'UserNewsLetterModule', dependencies: Array("ngRoute", "AccountModule", "LocalStorageModule", "angular-loading-bar", "ngMessages", "ngCookies") },
            {
                name: 'HomeModule', dependencies: Array("ngRoute", "AccountModule", "Common", "UserNewsLetterModule", "LocalStorageModule", "angular-loading-bar", "ngMessages", "ngCookies")
            },
            { name: 'NewsLetterModule', dependencies: Array("ngRoute", "AccountModule", "UserNewsLetterModule", "Common", "LocalStorageModule", "angular-loading-bar", "ngMessages", "ngCookies") },
        ];
        return ModuleInitiator;
    }());
    MiniSpas.ModuleInitiator = ModuleInitiator;
    MiniSpas.ModuleInitiator.GetModule("MiniSpas").service("MiniSpas.ModuleInitiator", ModuleInitiator);
})(MiniSpas || (MiniSpas = {}));
//# sourceMappingURL=ModuleInitiator.js.map