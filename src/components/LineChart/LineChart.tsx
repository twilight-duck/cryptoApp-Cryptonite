import { FC } from 'react';
import './LineChart.scss';
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

interface ILineChart {
    coinHistory: any,
    currentPrice: string,
    coinName: string
}

export const LineChart: FC<ILineChart> = ({ coinHistory, currentPrice, coinName }) => {
    const coinPrice = [];
    const coinTimestamp = [];

    for (let i = 0; i < coinHistory?.data?.history?.length; i += 1) {
        coinPrice.push(coinHistory?.data?.history[i].price);
      }
    
      for (let i = 0; i < coinHistory?.data?.history?.length; i += 1) {
        coinTimestamp.push(new Date(coinHistory?.data?.history[i].timestamp).toLocaleDateString());
      }

      const data = {
        labels: coinTimestamp,
        datasets: [
          {
            label: 'Price In USD',
            data: coinPrice,
            fill: false,
            backgroundColor: '#4eff9f',
            borderColor: '#4eff9f',
          },
        ],
      };

       const options = {
        responsive: true,
        plugins: {
          legend: {
            position: 'top' as const,
          },
          title: {
            display: true,
            text: 'Chart.js Line Chart',
          },
        },
      };
    return (
        <div className='line-chart'>
          <div className="chart-header">
            <h2 className="chart-title">{coinName} Price Chart </h2>
            <div className="price-container">
              <h5 className="price-change">Change: {coinHistory?.data?.change}%</h5>
              <h5 className="current-price">Current {coinName} Price: $ {currentPrice}</h5>
            </div>
          </div>
          <Line data={data} options={options}/>
        </div>
    )
};
