// Import dependencies 
import { Bar } from 'react-chartjs-2'

// Component
export const Insight = values => {

    // Data
    const data = {
        labels: ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"],
        datasets: [
            {
                label: "2021",
                data: values.data,
                backgroundColor: "#6CB0EE"
            }
        ]
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
        <Bar  options={options} data={data} />
    )
}
