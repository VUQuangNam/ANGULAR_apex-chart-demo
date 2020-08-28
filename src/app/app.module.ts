import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { ChartOutComponent } from './chart-out/chart-out.component';
import { ChartsModule } from '@progress/kendo-angular-charts';
import { Demochart2Component } from './demochart2/demochart2.component';
import { CanvanjsComponent } from './canvanjs/canvanjs.component';
import { ApxchartdemoComponent } from './apxchartdemo/apxchartdemo.component';


@NgModule({
    declarations: [
        AppComponent,
        ChartOutComponent,
        Demochart2Component,
        CanvanjsComponent,
        ApxchartdemoComponent,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        ChartsModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
