import React from 'react'
import styled from 'styled-components'
import ReactApexChart from 'react-apexcharts'

const GraphicsStyled = styled.div`

`

class Graphics extends React.Component {
    constructor(props) {
        super(props);

        this.state = {

            series: [16162169, 2746585, 5372273],
            options: {
                chart: {
                    width: 380,
                    type: 'pie',
                },
                labels: ['APPROVED', 'PENDING', 'REJECTED'],
                responsive: [{
                    breakpoint: 480,
                    options: {
                        chart: {
                            width: 200
                        },
                        legend: {
                            position: 'bottom'
                        }
                    }
                }]
            },


        };
    }



    render() {
        return (


            <div id="chart">
                <ReactApexChart options={this.state.options} series={this.state.series} type="pie" width={380} />
            </div>


        );
    }
}

export default Graphics
