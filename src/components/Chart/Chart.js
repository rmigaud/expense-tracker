import ChartBar from "./ChartBar";
import "./Chart.css";
const Chart = (props) => {
  const max = Math.max(
    ...props.dataPoints.map((dataPoint) => {
      return dataPoint.cost;
    })
  );
  console.log("ChartBar:max=", max);

  return (
    <div className="chart">
      {props.dataPoints.map((dataPoint) => (
        <ChartBar
          key={Math.random()}
          maxValue={max}
          cost={dataPoint.cost}
          label={dataPoint.label}
        />
      ))}
    </div>
  );
};
export default Chart;
