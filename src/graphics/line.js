import React from 'react'
import styled from 'styled-components'
import ReactApexChart from 'react-apexcharts'

const GraphicsStyled = styled.div`
`

function Line() {
    const series = [{
        name: "APPROVED",
        data: [50, 5, 12]
    },
    {
        name: "PENDING",
        data: [9]
    },
    {
        name: 'REJECTED',
        data: [5, 20, 2]
    }
    ]
    const options = {
        chart: {
            height: 350,
            type: 'line',
            zoom: {
                enabled: false
            },
        },
        dataLabels: {
            enabled: false
        },
        stroke: {
            width: [5, 7, 5],
            curve: 'straight',
            dashArray: [0, 8, 5]
        },
        title: {
            text: 'Page Statistics',
            align: 'left'
        },
        legend: {
            tooltipHoverFormatter: function (val, opts) {
                return val + ' - ' + opts.w.globals.series[opts.seriesIndex][opts.dataPointIndex] + ''
            }
        },
        markers: {
            size: 0,
            hover: {
                sizeOffset: 6
            }
        },
        xaxis: {
            categories: ['01 Jan', '02 Jan', '03 Jan', '04 Jan', '05 Jan', '06 Jan', '07 Jan', '08 Jan', '09 Jan',
                '10 Jan', '11 Jan', '12 Jan'
            ],
        },
        tooltip: {
            y: [
                {
                    title: {
                        formatter: function (val) {
                            return val + " (mins)"
                        }
                    }
                },
                {
                    title: {
                        formatter: function (val) {
                            return val + " per session"
                        }
                    }
                },
                {
                    title: {
                        formatter: function (val) {
                            return val;
                        }
                    }
                }
            ]
        },
        grid: {
            borderColor: '#f1f1f1',
        }
    }


    return (
        <div id="chart" >
            <ReactApexChart options={options} series={series} type="line" height={350} />
        </div>
    );
}

export default Line