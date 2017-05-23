"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
//components
var app_component_1 = require('./app.component');
var home_page_component_1 = require('./pages/home/home-page-component');
var details_page_component_1 = require('./pages/details/details-page.component');
var favorites_page_component_1 = require('./pages/favorites/favorites-page.component');
//modules
var shared_module_1 = require('./dummy/shared-module');
var core_1 = require('@angular/core');
var platform_browser_1 = require('@angular/platform-browser');
var http_1 = require('@angular/http');
var http_2 = require('@angular/http');
var router_1 = require("@angular/router");
//services
var requestService_1 = require('./services/requestService');
var dataFlowService_1 = require('./services/dataFlowService');
var sessionService_1 = require('./services/sessionService');
var dataStorageService_1 = require('./services/dataStorageService');
var storageService_1 = require("./services/storageService");
//routing
var appRoutes = [
    { path: 'home', component: home_page_component_1.HomePageComponent },
    { path: '', component: home_page_component_1.HomePageComponent },
    { path: 'details', component: details_page_component_1.DetailsPageComponent },
    { path: 'favorites', component: favorites_page_component_1.FavoritesPageComponent }
];
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [platform_browser_1.BrowserModule, shared_module_1.SharedModule, http_1.HttpModule, http_2.JsonpModule, router_1.RouterModule.forRoot(appRoutes)],
            declarations: [app_component_1.AppComponent, home_page_component_1.HomePageComponent, details_page_component_1.DetailsPageComponent, favorites_page_component_1.FavoritesPageComponent],
            providers: [requestService_1.RequestService, dataFlowService_1.DataFlowService, sessionService_1.SessionService, dataStorageService_1.DataStorageService, storageService_1.StorageService],
            bootstrap: [app_component_1.AppComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map