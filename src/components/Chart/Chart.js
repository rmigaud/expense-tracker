import ChartBar from "./ChartBar";
import "./Chart.css";
const Chart = (props) => {
  const max = Math.max(
    ...props.dataPoints.map((dataPoint) => {
      console.log("dataPoint:", dataPoint.cost);
      return dataPoint.cost;
    })
  );
  console.log("max:", max);

  return (
    <div className="chart">
      {props.dataPoints.map((dataPoint) => (
        <ChartBar
          key={Math.random()}
          maxValue={max}
          value={dataPoint.value}
          label={dataPoint.label}
        />
      ))}
    </div>
  );
};
export default Chart;
