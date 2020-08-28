import { Component, OnInit } from '@angular/core';
import * as CanvasJS from '../../assets/js/canvasjs.min.js';

@Component({
    selector: 'app-canvanjs',
    templateUrl: './canvanjs.component.html',
    styleUrls: ['./canvanjs.component.scss']
})
export class CanvanjsComponent implements OnInit {

    constructor() { }

    ngOnInit(): void {
        var chart = new CanvasJS.Chart("chartContainer", {
            theme: "light2", // "light1", "light2", "dark1", "dark2"
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
                }
                ,
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
                }
                ,
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

    }
}
