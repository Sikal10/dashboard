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
            text: 'Last 6 months revenue',
            color: "grey"
        },
    },
};

const labels = ['January', 'February', 'March', 'April', 'May', 'June'];

const revenue = ["100", "800", "400", "600", "900", "700"];

export const data = {
    labels,
    datasets: [
        {
            label: '',
            data: revenue.map(item => item),
            backgroundColor: 'rgba(90,168,243,0.51)',
        }
    ],
};

const Chart = () => {
    return (
        <div className={"chart"}>
            <Bar options={options} data={data} />
        </div>
    );
};

export default Chart;