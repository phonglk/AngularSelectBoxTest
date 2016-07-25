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
var DropdownItemComponent = (function () {
    function DropdownItemComponent(element) {
        this.element = element;
    }
    DropdownItemComponent.prototype.updateTooltipPosition = function () {
        var _this = this;
        ["Left", "Top"].forEach(function (dir) {
            var e = _this.element.nativeElement.querySelector('li');
            var offset = 0;
            var propName = 'offset' + dir;
            do {
                if (!isNaN(e[propName]))
                    offset += e[propName];
            } while (e = e.offsetParent);
            var scroll = _this.element.nativeElement.parentElement.parentElement['scroll' + dir];
            var realOffset = offset - scroll;
            console.log(realOffset);
            _this['fixed' + dir] = realOffset;
        });
    };
    DropdownItemComponent.prototype.onEnter = function () {
        this.updateTooltipPosition();
    };
    DropdownItemComponent.prototype.onLeave = function () {
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DropdownItemComponent.prototype, "item", void 0);
    DropdownItemComponent = __decorate([
        core_1.Component({
            selector: 'dropdown-item',
            template: "\n        <style>\n            .dropdown-item {\n                line-height: 20px;\n                height: 30px;\n                box-sizing: border-box;\n                display: block;\n                padding: 5px 5px;\n                position:relative;\n                transition: all 0.3s;\n            }\n            .dropdown-item:hover {\n                background: #303947 !important;\n                color: white;\n            }\n            :host.selected .dropdown-item {\n                background: #495f82;\n                color: white;\n            }\n            .extra {\n                position: absolute;\n                background: #303947;\n                color: white;\n                font-size: 11px;\n                width: 200px;\n                border-radius: 5px;\n                padding: 5px;\n                opacity: 0;\n                visibility: hidden;\n                line-height: 16px;\n                bottom: 5px;\n                left: 40px;\n                box-sizing: border-box;\n                pointer-events: none;\n                transition: all 0.3s;\n            }\n            .extra:after{\n                content: \" \";\n                border-top: 5px solid #303947;\n                border-left: 5px solid transparent;\n                position: absolute;\n                border-right: 5px solid transparent;\n                left: 90px;\n                bottom: -4px;\n            }\n            .extra > * {\n                padding: 5px 10px;\n            }\n            .extra-wrapper{\n                position: fixed;\n            }\n            .dropdown-item:hover .extra{\n                opacity: 1;\n                visibility: visible;\n            }\n        </style>\n    \t<li class=\"dropdown-item\" (mouseenter)=\"onEnter()\" (mouseleave)=\"onLeave()\">\n    \t\t<div class=\"label\">{{item.label}}</div>\n            <div class=\"extra-wrapper\"\n                [style.top]=\"fixedTop\"\n                [style.left]=\"fixedLeft\"\n            >\n        \t\t<div class=\"extra\">\n                    <div class=\"driver\" *ngIf=\"item.driver\">\n                        <div><b>DRIVER</b></div>\n                        <div>{{item.driver.name}}</div>\n                        <div>{{item.driver.phone}}</div>\n                    </div>\n                    <div class=\"vehicle\" *ngIf=\"item.vehicle\">\n                        <div><b>VEHICLE</b></div>\n                        <div>{{item.vehicle.plate}}</div>\n                        <div>{{item.vehicle.branch}}</div>\n                    </div>\n                </div>\n            </div>\n    \t</li>\n    "
        }), 
        __metadata('design:paramtypes', [core_1.ElementRef])
    ], DropdownItemComponent);
    return DropdownItemComponent;
}());
exports.DropdownItemComponent = DropdownItemComponent;
//# sourceMappingURL=dropdown-item.component.js.map