import React from 'react'
import { Line } from '@reactchartjs/react-chart.js'

const data = {
  labels: ['0','15.01.2021', '15.02.2021', '15.03.2021', '15.03.2021', '15.04.2021', '15.05.2021'],
  datasets: [
    {
      label: 'Naqd pul orqali',
      data: [7000000, 12000000, 10000000, 7300000,15000000,10000000],
      fill: false,
      backgroundColor: '#79eb22',
      borderColor: '#79eb22',
      yAxisID: 'y-axis-1',
    },
    {
      label: 'Karta orqali',
      data: [1000000, 1000000, 8000000, 1300000,8000000,10000000],
      fill: false,
      backgroundColor: '#5B82EB',
      borderColor: '#5B82EB',
      yAxisID: 'y-axis-2',
      },
  ],
}

const options = {
  scales: {
    yAxes: [
      {
        type: 'linear',
        display: true,
        position: 'left',
        id: 'y-axis-1',
      },
      {
        type: 'linear',
        display: true,
        position: 'right',
        id: 'y-axis-2',
        gridLines: {
          drawOnArea: false,
        },
      },
    ],
  },
}

const MultiAxisLine = () => (

    <Line data={data} options={options} />
 
)

export default MultiAxisLine