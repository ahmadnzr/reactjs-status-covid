import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";

const TotalGraph = ({ covidStatus }) => {
  ChartJS.register(ArcElement, Tooltip, Legend);

  const data = {
    labels: ["Death", "Recovered", "Confirmed"],
    datasets: [
      {
        label: "# of Votes",
        data: [
          covidStatus["deaths"]?.value,
          covidStatus["recovered"]?.value,
          covidStatus["confirmed"]?.value,
        ],
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(255, 159, 64, 0.2)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(255, 159, 64, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };
  return (
    <div className="graph">
      <span className="title">Grafik Status covid Indonesia</span>
      <div className="pie-graph">
        <Pie data={data} />
      </div>
    </div>
  );
};

export default TotalGraph;
