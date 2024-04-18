import data from "../apple.json"
import { Line } from 'react-chartjs-2';
import {Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip} from 'chart.js' 

ChartJS.register(
    CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip   
)

const Graph = ({productName}) => {
    // Find the phone in the data array
    const phoneData = data.find(item => item["Product Name"] === productName);
    const chartData = {
        labels: phoneData.Prices.map(price => price.Month),
        datasets: [
          {
            label: "Amazon",
            data: phoneData.Prices.map(price => price.amazon),
            borderColor: "rgba(255, 153, 0, 1)",
            showLine: true,
          
          },
          {
            label: "Flipkart",
            data: phoneData.Prices.map(price => price.flipkart),
            borderColor: "rgba(0, 132, 255, 1)",
            showLine: true,
          },
          {
            label: "Croma",
            data: phoneData.Prices.map(price => price.croma),
            borderColor: "rgba(75, 192, 192, 1)",
          },
        ],
      };
      console.log(chartData.datasets[0])
      
      const options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'bottom',
                displayed: true
            },
            title: {
                displayed: true,
                text: 'Price History',
                color: 'white'
            }
        }
      };

    
      return (
        <div>
          <div style={{ height: '400px', width: '900px', margin: 'auto' }}>
            <Line
              data={chartData}
              options={options}
            />
          </div>
        </div>
      );
    
  
}

export default Graph