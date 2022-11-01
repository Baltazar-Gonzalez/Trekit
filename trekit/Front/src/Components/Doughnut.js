import React, { useMemo } from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  ArcElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from "chart.js";
import { Doughnut as Donut } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  ArcElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

const options = {
  fill: true,
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend:{
      display: false
    }
  }
}

function Doughnut(props){
  const { id, height, width, color, type, currentColor } = props;
  const data = {
    labels: ['Molino Eolico', 'Panel Solar', 'Motor hidraulico', 'Baldosa', 'Generador'],
    datasets: [
        {
        label: 'Almacenada por producto',
        data: [11000, 17000, 2000, 4000, 2500],
        backgroundColor: [
            'rgb(255, 99, 132)',
            'rgb(54, 162, 235)',
            'rgb(255, 206, 86)',
            'rgb(75, 192, 192)',
            'rgb(255, 159, 64)',
        ],
        borderColor: [
            'rgb(255, 99, 132)',
            'rgb(54, 162, 235)',
            'rgb(255, 206, 86)',
            'rgb(75, 192, 192)',
            'rgb(255, 159, 64)',
        ],
        borderWidth: 1,
        borderBackgroundColor: "rgb(95, 105, 119)",
    },
    ]
}
  
  return (
    <div style={{width:"160px", height: "160px"}}>
        <Donut data={data} options={options} />
    </div>
  )
}

export default Doughnut