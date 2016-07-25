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
var dropdown_component_1 = require('./dropdown.component');
var AppComponent = (function () {
    function AppComponent(http) {
        this.http = http;
        this.list = [];
    }
    AppComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.http.get('/data.json').subscribe(function (res) {
            var data = res.json();
            _this.list = data.items.map(function (item) {
                var newItem = Object.assign(item, {
                    label: (item.driver ? item.driver.name : '-') + ' / ' +
                        (item.vehicle ? item.vehicle.plate : '-'),
                });
                return newItem;
            });
        });
    };
    AppComponent.prototype.onSelect = function (selectedValue) {
        console.log('selected', selectedValue);
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            template: "<div>\n        <h1>Dropdown demo</h1>\n        <dropdown [values]=\"list\" (select)=\"onSelect($event)\"></dropdown>\n    </div>",
            directives: [dropdown_component_1.DropdownComponent],
        }), 
        __metadata('design:paramtypes', [http_1.Http])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map