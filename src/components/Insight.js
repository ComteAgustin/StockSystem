// Import dependencies 
import { Bar } from 'react-chartjs-2'

// Component
export const Insight = values => {

    // Data
    const data = {
        labels: ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"],
        datasets: values.data
    };

    // Options 
    const options = {
        scales: {
            yAxes: [
                {
                    ticks: {
                        beginAtZero: true,
                    },
                },
            ],
        },
    };

    // Return 
    return (
        <Bar options={options} data={data} />
    )
}
