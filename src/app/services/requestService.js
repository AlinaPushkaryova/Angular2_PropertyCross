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
var http_1 = require('@angular/http');
require('rxjs/add/operator/map');
var URL = 'http://api.nestoria.co.uk/api?country=uk&pretty=1&action=search_listings&encoding=json&listing_type=buy&page=';
var RequestService = (function () {
    function RequestService(jsonp) {
        this.jsonp = jsonp;
        this.data = {};
        this.page = 1;
    }
    RequestService.prototype.search = function (searchterm, page) {
        var _this = this;
        var apiLink = URL + page + '&place_name=' + searchterm + '&callback=JSONP_CALLBACK';
        return this.jsonp.get(apiLink)
            .map(function (res) {
            _this.data = res.json().response; // let data.next()
            console.log(_this.data);
            _this.dataPasser();
            return _this.data;
        });
    };
    RequestService.prototype.dataPasser = function () {
        return this.data;
    };
    RequestService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Jsonp])
    ], RequestService);
    return RequestService;
}());
exports.RequestService = RequestService;
//# sourceMappingURL=requestService.js.map