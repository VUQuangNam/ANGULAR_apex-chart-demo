"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AppModule = void 0;
var platform_browser_1 = require("@angular/platform-browser");
var core_1 = require("@angular/core");
var app_routing_module_1 = require("./app-routing.module");
var app_component_1 = require("./app.component");
var http_1 = require("@angular/common/http");
var chart_out_component_1 = require("./chart-out/chart-out.component");
var kendo_angular_charts_1 = require("@progress/kendo-angular-charts");
var demochart2_component_1 = require("./demochart2/demochart2.component");
var canvanjs_component_1 = require("./canvanjs/canvanjs.component");
var apxchartdemo_component_1 = require("./apxchartdemo/apxchartdemo.component");
var ng_apexcharts_1 = require("ng-apexcharts");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.AppComponent,
                chart_out_component_1.ChartOutComponent,
                demochart2_component_1.Demochart2Component,
                canvanjs_component_1.CanvanjsComponent,
                apxchartdemo_component_1.ApxchartdemoComponent,
            ],
            imports: [
                platform_browser_1.BrowserModule,
                app_routing_module_1.AppRoutingModule,
                http_1.HttpClientModule,
                kendo_angular_charts_1.ChartsModule,
                ng_apexcharts_1.NgApexchartsModule
            ],
            providers: [],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
