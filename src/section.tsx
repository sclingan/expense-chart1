// import datajs from '../data.json'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      // position: 'top' as const,
    },
    title: {
      display: true,
    },
  },
};

function Section() {
  const labels = ['Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat', 'Sun'];

   const data = {
    labels,
    datasets:  [{
      label: '',
      data: [17.45, 34.91, 52.36, 31.07, 23.39, 43.28, 25.48],
      backgroundColor: 'hsl(10, 79%, 65%)'
    }]
  }

 

    return (
      <section>
         <h2>Spending - Last 7 days</h2>
         <div id="myChart">
        <Bar options={options} data={data}/>
         </div>
        <footer>
          <div className="div-total">
            <p>Total this month</p>
            <p className="total">$478.33</p>
          </div>
          <div>
            <p className="percent">+2.4%</p>
            <p>from last month</p>
          </div>
        </footer>
      </section>
    )
  }
  
  export default Section
  