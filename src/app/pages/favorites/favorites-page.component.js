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
var storageService_1 = require('../../services/storageService');
var ITEMS_CONST_1 = require("../../const/ITEMS_CONST");
var sessionService_1 = require("../../services/sessionService");
var FavoritesPageComponent = (function () {
    function FavoritesPageComponent(storageService, sessionService) {
        this.storageService = storageService;
        this.sessionService = sessionService;
        this.homeButton = 'Home';
        this.items = [];
        this.item_types = ITEMS_CONST_1.ITEMS.TYPES;
    }
    FavoritesPageComponent.prototype.ngOnInit = function () {
        this.items = this.showFavorites();
        console.log(this.showFavorites());
    };
    ;
    FavoritesPageComponent.prototype.showFavorites = function () {
        return this.storageService.getItem(this.item_types.HOUSE);
    };
    ;
    FavoritesPageComponent.prototype.getDetails = function (property) {
        return this.sessionService.getDetailedProperty(property);
    };
    FavoritesPageComponent = __decorate([
        core_1.Component({
            selector: 'pc-favorites',
            template: "\n<h1> Favorites </h1>\n<div *ngFor=\"let house of items\" let index=\"index\" routerLink=\"/details\" (click)=\"getDetails(house)\">\n<img [src]=house.thumb_url>\n<p> {{house.price | currency:'USD': true}} </p>\n<p> {{house.title}} </p>\n</div>\n<pc-button [text]=\"homeButton\" routerLink=\"/home\"></pc-button>\n"
        }), 
        __metadata('design:paramtypes', [storageService_1.StorageService, sessionService_1.SessionService])
    ], FavoritesPageComponent);
    return FavoritesPageComponent;
}());
exports.FavoritesPageComponent = FavoritesPageComponent;
//# sourceMappingURL=favorites-page.component.js.map