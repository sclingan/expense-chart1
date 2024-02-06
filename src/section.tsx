import datajs from '../data.json'
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

 const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top' as const,
    },
    },
};

function Section() {
  const day = datajs.map(({day}) => day);
  const amount = datajs.map(({amount}) => amount);
  const labels = day;

   const data = {
    labels,
    datasets:  [{
      label: '',
      data: amount,
      backgroundColor: 'hsl(10, 79%, 65%)'
    }],
 
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
  