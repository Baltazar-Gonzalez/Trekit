import React, { useMemo } from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

//const scores = [6, 5, 5, 4, 7, 2, 1]
//const scores2 = [1, 2, 1, 8, 3, 6, 7]
//const labels = [100, 200, 300, 400, 500, 600, 700]



function Sparkline(props){
  const { id, height, width, color, data, type, currentColor, point } = props;

  const options = {
    fill: true,
    responsive: true,
    plugins: {
      legend:{
        display: false
      }
    },
    scales: {
      yAxes:{
          grid: {
              drawBorder: true,
              color,
          },
          ticks:{
              beginAtZero: true,
              color: currentColor,
              fontSize: 12,
          }
      },
      xAxes: {
          grid: {
              drawBorder: true,
              color,
          },
          ticks:{
              color: currentColor,
              fontSize: 12,
          }
      },
  }
  }

  const finalData = {
    datasets: [{
      label: "Watts",
      data: data[0],
      tension: 0.15,
      borderColor: color? color : "rgb(74, 222, 128)",
      pointRadius: point ? 5 : 0,
      pointBorderColor:  color? color : "rgb(74, 222, 128)",
      pointBackgroundColor: "rgb(94, 222, 148)",
      backgroundColor: "rgba(94, 222, 148, 0.35)"
    },
    {
      label: "Watts",
      data: data[1],
      tension: 0.15,
      borderColor: "rgb(75, 85, 99)",
      pointRadius: point ? 5 : 0,
      pointBackgroundColor: "rgb(95, 105, 119)",
      backgroundColor: "rgba(95, 105, 119, 0.35)"
    },
    
  ],
    labels: data[2],
}
  
  return (
      <Line data={finalData} options={options} />
  )
}

export default Sparkline