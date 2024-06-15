// components/BarChart.js
import { Bar } from "react-chartjs-2";
import PropTypes from "prop-types";



export const BarChart = ({ chartData }) => {
  return (
    <div className="chart-container">
      <h2 style={{ textAlign: "center" }}>Your savings over the past 7 days</h2>
      <Bar
        data={chartData}
        options={{
          plugins: {
            title: {
              display: true,
              text: "15 April - 21 April"
            },
            legend: {
              display: false
            }
          }
        }}
      />
    </div>
  );
};

BarChart.propTypes = {
  chartData: PropTypes.object.isRequired
};