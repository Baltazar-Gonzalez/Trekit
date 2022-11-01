import React, { useMemo } from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

const scores = [6, 5, 5, 4, 7, 2, 1]
const scores2 = [1, 2, 1, 8, 3, 6, 7]
const labels = [100, 200, 300, 400, 500, 600, 700]

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

function Sparkline(props){
  const { id, height, width, color, type, currentColor } = props;
  const data = {
    datasets: [{
      label: "Mis datos",
      data: scores,
      tension: 0.15,
      borderColor: "rgb(74, 222, 128)",
      pointRadius: 5,
      backgroundColor: "rgb(94, 222, 148)",
    },
    {
      label: "Mis datos2",
      data: scores2,
      tension: 0.15,
      borderColor: "rgb(75, 85, 99)",
      pointRadius: 5,
      backgroundColor: "rgb(95, 105, 119)",
    }],
    labels: labels
}
  
  return (
    <div style={{width:"320px", height: "360px"}}>
        <Bar data={data} options={options} />
    </div>
  )
}

export default Sparkline