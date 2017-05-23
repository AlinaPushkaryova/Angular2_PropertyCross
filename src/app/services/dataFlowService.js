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
var requestService_1 = require("./requestService");
var DataFlowService = (function () {
    function DataFlowService(requestService) {
        this.requestService = requestService;
        this.currentPage = 1;
        this.currentLocation = '';
        this.totalPages = null;
    }
    DataFlowService.prototype.catchData = function (value) {
        return this.data = value;
    };
    DataFlowService.prototype.getOptions = function (type) {
        return this.data[type] || [];
    };
    DataFlowService.prototype.getCounts = function (type) {
        return this.data[type] || 0;
    };
    DataFlowService.prototype.getData = function (location, page) {
        var _this = this;
        this.page = page || 1;
        this.requestService.search(this.currentLocation, this.page).subscribe(function (res) {
            _this.data = res;
            _this.currentLocation = location;
            // this.totalPages = this.data;
        });
    };
    DataFlowService.prototype.showMoreResults = function (location) {
        this.currentLocation = location || this.currentLocation;
        this.currentPage++;
        return this.getData(this.currentLocation, this.currentPage);
    };
    ;
    DataFlowService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [requestService_1.RequestService])
    ], DataFlowService);
    return DataFlowService;
}());
exports.DataFlowService = DataFlowService;
//# sourceMappingURL=dataFlowService.js.map