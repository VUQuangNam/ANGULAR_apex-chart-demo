"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.ApxchartdemoComponent = void 0;
var core_1 = require("@angular/core");
var ApxchartdemoComponent = /** @class */ (function () {
    function ApxchartdemoComponent() {
        this.chartOptions = {};
        this.chartOptions = {
            series: [{
                    name: 'sales',
                    type: 'line',
                    data: [30, 40, 35, 50, 49, 60, 70, 91, 125]
                }],
            xaxis: {
                categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999]
            }
        };
    }
    ApxchartdemoComponent.prototype.ngOnInit = function () {
    };
    ApxchartdemoComponent = __decorate([
        core_1.Component({
            selector: 'app-apxchartdemo',
            templateUrl: './apxchartdemo.component.html',
            styleUrls: ['./apxchartdemo.component.scss']
        })
    ], ApxchartdemoComponent);
    return ApxchartdemoComponent;
}());
exports.ApxchartdemoComponent = ApxchartdemoComponent;
