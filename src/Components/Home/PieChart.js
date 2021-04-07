import React from 'react'
import { Doughnut } from '@reactchartjs/react-chart.js'

const data = {
// labels: ['', ''],
  datasets: [
    {
    //   label: '# of Votes',
      data: [69, 31],
      backgroundColor: [
        'rgba(91,130,235)',
        'rgba(54, 162, 235, 0.1)',
      ],
      borderColor: [
        'rgba(91,130,235)',
        'rgba(54, 162, 235, 0.1)',
      ],
          borderWidth: 1,
    },
  ],
}

const DoughnutChart = () => (
    <Doughnut data={data} />
)

export default DoughnutChart