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
var storageService_1 = require('./storageService');
var ITEMS_CONST_1 = require("../const/ITEMS_CONST");
var DataStorageService = (function () {
    function DataStorageService(storageService) {
        this.storageService = storageService;
        this.items = ITEMS_CONST_1.ITEMS.TYPES;
    }
    DataStorageService.prototype.getFaveItems = function () {
        return this.storageService.getItem(this.items.HOUSE) || [];
    };
    DataStorageService.prototype.setFaveItems = function (value) {
        var index = this.findItem(value), currentItems = this.getFaveItems();
        index === -1 ?
            currentItems.push(value) :
            currentItems.splice(index, 1);
        this.storageService.setItem(this.items.HOUSE, currentItems);
        return this.findItem(value);
    };
    DataStorageService.prototype.findItem = function (item) {
        var items = this.getFaveItems(), index = -1;
        for (var i = 0; i < items.length; i++) {
            if (items[i].img_url === item.img_url) {
                index = i;
            }
        }
        return index;
    };
    DataStorageService.prototype.getRecentSearches = function () {
        return this.storageService.getItem(this.items.SEARCHES) || [];
    };
    DataStorageService.prototype.setRecentSearch = function (currentLocation) {
        if (!currentLocation.length) {
            return false;
        }
        var recentSearch = this.getRecentSearches();
        if (recentSearch.length > 4) {
            recentSearch.pop();
        }
        recentSearch.unshift(currentLocation);
        this.storageService.setItem(this.items.SEARCHES, recentSearch);
        return recentSearch;
    };
    DataStorageService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [storageService_1.StorageService])
    ], DataStorageService);
    return DataStorageService;
}());
exports.DataStorageService = DataStorageService;
//# sourceMappingURL=dataStorageService.js.map