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
var dropdown_item_component_1 = require('./dropdown-item.component');
var DropdownComponent = (function () {
    function DropdownComponent(element) {
        this.element = element;
        this.select = new core_1.EventEmitter();
        this.filter = "";
        this.showList = false;
        this.selectedItem = null;
    }
    DropdownComponent.prototype.ngOnChanges = function (changes) {
        this.updateFilterValues(this.filter);
    };
    DropdownComponent.prototype.updateFilterValues = function (value) {
        var _this = this;
        console.log(value);
        this.filter = value;
        if (this.filter.trim() === "")
            this.filterValues = this.values;
        else
            this.filterValues = this.values.filter(function (item) { return item.label.indexOf(_this.filter) > -1; });
    };
    DropdownComponent.prototype.onLabelClick = function () {
        var _this = this;
        this.showList = !this.showList;
        if (this.showList) {
            setTimeout(function () {
                _this.element.nativeElement.querySelector('.search-input').focus();
            }, 300);
        }
    };
    DropdownComponent.prototype.selectItem = function (value) {
        this.selectedItem = value;
        this.select.emit(value);
        this.showList = false;
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Array)
    ], DropdownComponent.prototype, "values", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], DropdownComponent.prototype, "select", void 0);
    DropdownComponent = __decorate([
        core_1.Component({
            selector: 'dropdown',
            template: "\n        <style>\n        .dropdown-wrapper{\n            box-sizing: border-box;\n            position: relative;\n            width: 300px;\n            height: 30px;\n            line-height: 20px;\n            color: #333;\n            font-size: 12px;\n            z-index: 5;\n        }\n        .label {\n            border: 1px solid #B4B4B4;\n            padding: 5px 5px;\n            box-sizing: border-box;\n            background: #BFCDDC;\n            height: 100%;\n            position: relative;\n            transition: all 0.3s;\n        }\n        .label.empty{\n            background: white;\n        }\n        .label .caret {\n            position: absolute;\n            right: 7px;\n            top: 5px;\n            font-size: 8px;\n        }\n        .search-input-wrapper {\n            line-height: 20px;\n            box-sizing: border-box;\n            height: 30px;\n            position: relative;\n        }\n        .option-list-wrapper {\n            box-sizing: border-box;\n            opacity: 0;\n            visibility: hidden;\n            position: absolute;\n            top: 25px;\n            left: 0;\n            width: 100%;\n            background: #BFCDDC;\n            border: 1px solid #B4B4B4;\n            border-top: none;\n            height: 150px;\n            transition: all 0.3s;\n        }\n        .option-list-wrapper.show {\n            opacity: 1;\n            visibility: visible;\n            top: 29px;\n        }\n        .list-wrapper {\n            overflow-y: auto;\n            height: 120px;\n        }\n        .search-input {\n            width: 100%;\n            height: 100%;\n            border: none;\n            padding-right: 30px;\n            padding-left: 5px;\n            font-size: 12px;\n            background: #DFE7EF;\n            box-sizing: border-box;\n        }\n        .search-input:focus {\n            outline: none;\n        }\n        .search-icon {\n            position: absolute;\n            top: 4px;\n            right: 8px;\n            font-size: 25px;\n            -webkit-transform: rotate(45deg);\n               -moz-transform: rotate(45deg);\n                 -o-transform: rotate(45deg);\n        }\n        ul.option-list {\n            margin: 0;\n            padding: 0;\n            list-style: none\n        }\n        </style>\n        <div class=\"dropdown-wrapper\">\n            <div class=\"label\" (click)=\"onLabelClick()\" [class.empty]=\"selectedItem === null && !showList\">\n                <span *ngIf=\"selectedItem === null\">Select driver / Pair Vehicle</span>\n                <span *ngIf=\"selectedItem !== null\">{{selectedItem.label}}</span>\n                <span class=\"caret\">\u2572\u2571</span>\n            </div>\n\n            <div class=\"option-list-wrapper\" [class.show]=\"showList\">\n                <div class=\"search-input-wrapper\">\n                    <input #search class=\"search-input\" (keyup)=\"updateFilterValues(search.value)\"/>\n                    <div class=\"search-icon\">&#9906;</div>\n                </div>\n                <div class=\"list-wrapper\">\n                    <ul class=\"option-list\">\n                        <dropdown-item *ngFor=\"let value of filterValues\"\n                            (click)=\"selectItem(value)\"\n                            [item]=\"value\"\n                            [class.selected]=\"value === selectedItem\"\n                        >\n                        </dropdown-item>\n                    </ul>\n                </div>\n            </div>\n        </div>\n        ",
            directives: [dropdown_item_component_1.DropdownItemComponent]
        }), 
        __metadata('design:paramtypes', [core_1.ElementRef])
    ], DropdownComponent);
    return DropdownComponent;
}());
exports.DropdownComponent = DropdownComponent;
//# sourceMappingURL=dropdown.component.js.map