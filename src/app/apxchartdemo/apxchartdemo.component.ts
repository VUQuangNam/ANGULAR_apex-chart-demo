import { Component, OnInit } from '@angular/core';

import {
    ApexAxisChartSeries,
    ApexChart,
    ApexFill,
    ApexYAxis,
    ApexTooltip,
    ApexTitleSubtitle,
    ApexXAxis,
    ApexPlotOptions,
    ApexDataLabels
} from "ng-apexcharts";

export type ChartOptions = {
    series: ApexAxisChartSeries;
    chart: ApexChart;
    dataLabels: ApexDataLabels; // ApexDataLabels;
    xaxis: ApexXAxis;
    yaxis: ApexYAxis | ApexYAxis[];
    title: ApexTitleSubtitle;
    labels: string[];
    stroke: any; // ApexStroke;
    fill: ApexFill;
    tooltip: ApexTooltip;
    plotOptions: ApexPlotOptions;
};

@Component({
    selector: 'app-apxchartdemo',
    templateUrl: './apxchartdemo.component.html',
    styleUrls: ['./apxchartdemo.component.scss']
})
export class ApxchartdemoComponent implements OnInit {
    chartOptions: any = {};
    constructor() {
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

    ngOnInit(): void {
    }

}
