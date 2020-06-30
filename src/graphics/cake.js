import React from 'react'
import styled from 'styled-components'
import ReactApexChart from 'react-apexcharts'

const CakeStyled = styled.div`

`

function Cake() {


    const series= [16162169, 2746585, 5372273]
    const options= {
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
    }

    return (


        <div id="chart">
            <ReactApexChart options={options} series={series} type="pie" width={380} />
        </div>


    );
}

export default Cake
