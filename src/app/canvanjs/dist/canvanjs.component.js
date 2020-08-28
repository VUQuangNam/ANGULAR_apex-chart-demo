"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.CanvanjsComponent = void 0;
var core_1 = require("@angular/core");
var CanvasJS = require("../../assets/js/canvasjs.min.js");
var CanvanjsComponent = /** @class */ (function () {
    function CanvanjsComponent() {
    }
    CanvanjsComponent.prototype.ngOnInit = function () {
        var chart = new CanvasJS.Chart("chartContainer", {
            theme: "light2",
            animationEnabled: true,
            title: {
                text: "Brent Crude Oil Price - 2016"
            },
            axisX: {
                title: "Year",
                valueFormatString: "####",
                interval: 2
            },
            data: [
                {
                    type: "rangeColumn",
                    xValueFormatString: "####",
                    showInLegend: false,
                    name: "Log Scale",
                    dataPoints: [
                        { x: 1993, y: [27.10, 38.99] },
                        { x: 1994, y: [27.10, 38.99] },
                        { x: 1995, y: [29.92, 37.00] },
                        { x: 1996, y: [35.95, 42.54] },
                        { x: 1997, y: [37.27, 48.50] }
                    ]
                },
                {
                    type: "line",
                    xValueFormatString: "####",
                    axisYType: "secondary",
                    showInLegend: true,
                    name: "Linear Scale",
                    dataPoints: [
                        { x: 1993, y: 0 },
                        { x: 1994, y: 30 },
                        { x: 1995, y: 26 },
                        { x: 1996, y: 27 },
                        { x: 1997, y: 28 }
                    ]
                },
                {
                    type: "line",
                    xValueFormatString: "####",
                    axisYType: "secondary",
                    showInLegend: true,
                    name: "Linear Scale",
                    dataPoints: [
                        { x: 1993, y: 0 },
                        { x: 1994, y: 30 },
                        { x: 1995, y: 26 },
                        { x: 1996, y: 27 },
                        { x: 1997, y: 28 }
                    ]
                },
                {
                    type: "line",
                    xValueFormatString: "####",
                    axisYType: "secondary",
                    showInLegend: true,
                    name: "Linear Scale",
                    dataPoints: [
                        { x: 1993, y: 1 },
                        { x: 1994, y: 40 },
                        { x: 1995, y: 11 },
                        { x: 1996, y: 17 },
                        { x: 1997, y: 21 }
                    ]
                }
            ]
        });
        chart.render();
    };
    CanvanjsComponent = __decorate([
        core_1.Component({
            selector: 'app-canvanjs',
            templateUrl: './canvanjs.component.html',
            styleUrls: ['./canvanjs.component.scss']
        })
    ], CanvanjsComponent);
    return CanvanjsComponent;
}());
exports.CanvanjsComponent = CanvanjsComponent;
