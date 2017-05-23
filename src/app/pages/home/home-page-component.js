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
var DATA_CONST_1 = require("../../const/DATA_CONST");
var requestService_1 = require('../../services/requestService');
var dataFlowService_1 = require('../../services/dataFlowService');
var sessionService_1 = require('../../services/sessionService');
var dataStorageService_1 = require("../../services/dataStorageService");
var HomePageComponent = (function () {
    function HomePageComponent(requestService, dataFlowService, sessionService, dataStorageService) {
        this.requestService = requestService;
        this.dataFlowService = dataFlowService;
        this.sessionService = sessionService;
        this.dataStorageService = dataStorageService;
        this.goButton = 'Go';
        this.showMoreResult = 'Show More Results';
        this.favesButton = 'Faves';
        this.data_types = DATA_CONST_1.DATA.TYPES;
        this.showButton = false;
        this.listing = 0;
    }
    HomePageComponent.prototype.letSearch = function (value) {
        var _this = this;
        this.listing = 0;
        this.requestService.search(value)
            .subscribe(function (data) { return _this.data = data; });
        this.dataStorageService.setRecentSearch(value);
        this.dataFlowService.catchData(this.data);
        this.locationName = value;
    };
    HomePageComponent.prototype.recentSearch = function (recentSearch) {
        this.listing = 0;
        this.letSearch(recentSearch);
    };
    ;
    HomePageComponent.prototype.catch = function () {
        this.data = this.requestService.dataPasser();
        this.dataFlowService.catchData(this.data);
        return this.data;
    };
    HomePageComponent.prototype.getDetails = function (property) {
        return this.sessionService.getDetailedProperty(property);
    };
    HomePageComponent.prototype.getListing = function () {
        this.catch();
        this.getTotalPages() > 0 ? this.showButton = true : this.showButton = false;
        return this.dataFlowService.getOptions(this.data_types.LISTINGS);
    };
    HomePageComponent.prototype.getTotalPages = function () {
        return this.dataFlowService.getCounts(this.data_types.TOTAL_PAGES);
    };
    HomePageComponent.prototype.showMoreResults = function () {
        this.listing = this.getListing().length + this.listing;
        this.dataFlowService.showMoreResults(this.locationName);
    };
    HomePageComponent.prototype.getTotalResult = function () {
        return this.dataFlowService.getCounts(this.data_types.TOTAL_RESULTS);
    };
    HomePageComponent.prototype.getSearches = function () {
        return this.dataStorageService.getRecentSearches();
    };
    HomePageComponent = __decorate([
        core_1.Component({
            selector: 'pc-home',
            template: "\n<pc-header></pc-header>\n<pc-button [text]=\"favesButton\" routerLink=\"/favorites\"></pc-button>\n<h3> Use the form below to search for houses to buy. You can search by place-name, postcode, or click 'My location',\n to search in your current location!</h3>\n<input type=\"text\" #propertyName (keyup.enter)=\"letSearch(propertyName.value)\">\n <pc-button [text]=\"goButton\" (click)=\"letSearch(propertyName.value)\"> </pc-button>\n <p> Search Result: </p> \n <p *ngFor=\"let searchResult of getSearches()\" (click)=\"recentSearch(searchResult)\">{{searchResult}} </p>\n <p> Displaying {{getListing().length + listing}} of {{getTotalResult()}}</p>\n <div *ngFor=\"let property of getListing()\" routerLink=\"/details\" (click)=\"getDetails(property)\"> \n<img [src]=property.thumb_url>\n<p> {{property.price | currency:'USD': true}}</p>\n<p> {{property.title}}</p>\n</div>\n<pc-button *ngIf=\"showButton\" [text]=\"showMoreResult\" (click)=\"showMoreResults()\"></pc-button>\n"
        }), 
        __metadata('design:paramtypes', [requestService_1.RequestService, dataFlowService_1.DataFlowService, sessionService_1.SessionService, dataStorageService_1.DataStorageService])
    ], HomePageComponent);
    return HomePageComponent;
}());
exports.HomePageComponent = HomePageComponent;
//# sourceMappingURL=home-page-component.js.map