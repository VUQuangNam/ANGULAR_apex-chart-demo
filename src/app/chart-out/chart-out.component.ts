import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';

declare var require: any;
let Boost = require('highcharts/modules/boost');
let noData = require('highcharts/modules/no-data-to-display');
let More = require('highcharts/highcharts-more');

Boost(Highcharts);
noData(Highcharts);
More(Highcharts);
noData(Highcharts);

@Component({
    selector: 'app-output-graph',
    templateUrl: './chart-out.component.html',
    styleUrls: ['./chart-out.component.scss']
})
export class ChartOutComponent implements OnInit {
    enginePerformance: any[] = [
        {
            rpm: 0,
            torque: 50,
            power: 10,
            min: 10,
            max: 15
        },
        {
            rpm: 100,
            torque: 65,
            power: 20,
            min: 11,
            max: 19
        },
        {
            rpm: 200,
            torque: 80,
            power: 30,
            min: 15,
            max: 20
        }
    ];
    public series: any[] = [
        {
            name: "Power",
            type: "scatterLine",
            data: this.enginePerformance,
            xField: "rpm",
            yField: "power",
            tooltip: {
                format: "{1} bhp @ {0:N0} rpm"
            }
        },
        {
            name: "Torque",
            type: "scatterLine",
            data: this.enginePerformance,
            xField: "rpm",
            yField: "torque",
            yAxis: "torque",
            tooltip: {
                format: "{1} lb-ft @ {0:N0} rpm"
            }
        }
    ];
    public crossingValues: number[] = [0, 250];
    public weatherData = [
        { month: "January", min: 55, max: 100 },
        { month: "February", min: 65, max: 130 },
        { month: "March", min: 70, max: 150 },
        { month: "April", min: 100, max: 190 },
        { month: "May", min: 103, max: 230 },
        { month: "June", min: 107, max: 280 },
        { month: "July", min: 200, max: 300 },
        { month: "August", min: 200, max: 300 },
        { month: "September", min: 107, max: 260 },
        { month: "October", min: 103, max: 220 },
        { month: "November", min: 90, max: 160 },
        { month: "December", min: 60, max: 130 }
    ];


    public labelContentFrom(e: any): string {
        return `${e.value.from}`;
    }

    public labelContentTo(e: any): string {
        return `${e.value.to}`;
    }
    constructor() { }

    value: any = {
        chart: {
            zoomType: 'xy'
        },
        title: {
            text: 'Average Monthly Weather Data for Tokyo',
            align: 'left'
        },
        subtitle: {
            text: 'Source: WorldClimate.com',
            align: 'left'
        },
        xAxis: [
            {
                categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
                    'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
                crosshair: true
            }
        ],
        yAxis: [{ // Primary yAxis
            labels: {
                format: '{value}°C',
                style: {
                    color: Highcharts.getOptions().colors[2]
                }
            },
            title: {
                text: 'Temperature',
                style: {
                    color: Highcharts.getOptions().colors[2]
                }
            },
            opposite: true

        },
        { // Secondary yAxis
            gridLineWidth: 0,
            title: {
                text: 'Rainfall',
                style: {
                    color: Highcharts.getOptions().colors[0]
                }
            },
            labels: {
                format: '{value} mm',
                style: {
                    color: Highcharts.getOptions().colors[0]
                }
            }

        },
        { // Tertiary yAxis
            gridLineWidth: 0,
            title: {
                text: 'Sea-Level Pressure',
                style: {
                    color: Highcharts.getOptions().colors[1]
                }
            },
            labels: {
                format: '{value} mb',
                align: 'left',
                style: {
                    color: Highcharts.getOptions().colors[1]
                }
            },
            opposite: true
        }],
        tooltip: {
            shared: true
        },
        legend: {
            layout: 'vertical',
            align: 'left',
            x: 80,
            verticalAlign: 'top',
            y: 55,
            floating: true,
            backgroundColor:
                Highcharts.defaultOptions.legend.backgroundColor || // theme
                'rgba(255,255,255,0.25)'
        },
        series: [
            {
                name: 'Observations',
                type: 'boxplot',
                data: [
                    [760, 801, 848, 895, 965],
                    [733, 853, 939, 980, 1080],
                    [714, 762, 817, 870, 918],
                    [724, 802, 806, 871, 950],
                    [834, 836, 864, 882, 910],
                    [760, 801, 848, 895, 965],
                    [733, 853, 939, 980, 1080],
                    [714, 762, 817, 870, 918],
                    [724, 802, 806, 871, 950],
                    [834, 836, 864, 882, 910],
                    [724, 802, 806, 871, 950],
                    [834, 836, 864, 882, 910]
                ],
                tooltip: {
                    headerFormat: '<em>Experiment No {point.key}</em><br/>'
                }
            },
            {
                name: 'Sea-Level Pressure',
                type: 'line',
                yAxis: 1,
                data: [1016, 1016, 1015.9, 1015.5, 1012.3, 1009.5, 1009.6, 1010.2, 1013.1, 1016.9, 1018.2, 1016.7],
                marker: {
                    enabled: false
                },
                tooltip: {
                    valueSuffix: ' mb'
                }

            }],
        responsive: {
            rules: [{
                condition: {
                    maxWidth: 500
                },
                chartOptions: {
                    legend: {
                        floating: false,
                        layout: 'horizontal',
                        align: 'center',
                        verticalAlign: 'bottom',
                        x: 0,
                        y: 0
                    },
                    yAxis: [{
                        labels: {
                            align: 'right',
                            x: 0,
                            y: -6
                        },
                        showLastLabel: false
                    }, {
                        labels: {
                            align: 'left',
                            x: 0,
                            y: -6
                        },
                        showLastLabel: false
                    }, {
                        visible: false
                    }]
                }
            }]
        }
    }

    ngOnInit() {
        Highcharts.chart('container', this.value);
    }
}