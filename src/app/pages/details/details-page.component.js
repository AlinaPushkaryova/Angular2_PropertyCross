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
var core_1 = require('@angular/core');
var sessionService_1 = require('../../services/sessionService');
var dataStorageService_1 = require("../../services/dataStorageService");
var DetailsPageComponent = (function () {
    function DetailsPageComponent(sessionService, dataStorageService) {
        this.sessionService = sessionService;
        this.dataStorageService = dataStorageService;
        this.homeButton = 'Home';
        this.favoritesButton = 'Favorites';
        this.itemIndex = null;
    }
    DetailsPageComponent.prototype.getDetails = function () {
        this.detailedProperty = this.sessionService.dataPasser();
        this.buttonSwitcher();
        return this.detailedProperty;
    };
    DetailsPageComponent.prototype.toggleHouse = function () {
        this.itemIndex = this.dataStorageService.setFaveItems(this.detailedProperty);
    };
    DetailsPageComponent.prototype.buttonSwitcher = function () {
        this.itemIndex = this.dataStorageService.findItem(this.detailedProperty);
    };
    DetailsPageComponent = __decorate([
        core_1.Component({
            selector: 'pc-details',
            template: "\n<p> House details</p>\n<div>\n<img [src]=getDetails().img_url>\n<p> {{getDetails().price | currency:'USD': true}}</p>\n<p> {{getDetails().title}}</p>\n<p> {{getDetails().bedroom_number}} bed, {{getDetails().bathroom_number}} bathroom</p>\n<p> {{getDetails().summary}}</p>\n<pc-button [text]=\"homeButton\" routerLink=\"/home\"></pc-button>\n<pc-button [text]=\"favoritesButton\" routerLink=\"/favorites\"></pc-button>\n<button type=\"button\" (click)=\"toggleHouse(getDetails())\">{{itemIndex !== -1 ? '-' : '+'}} </button>\n</div>\n\n"
        }), 
        __metadata('design:paramtypes', [sessionService_1.SessionService, dataStorageService_1.DataStorageService])
    ], DetailsPageComponent);
    return DetailsPageComponent;
}());
exports.DetailsPageComponent = DetailsPageComponent;
//# sourceMappingURL=details-page.component.js.map