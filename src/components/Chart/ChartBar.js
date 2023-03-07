const ChartBar = (props) => {
  let barHeight = "0%";

  if (props.maxValue > 0) {
    barHeight = Math.round((props.value / props.maxValue) * 100) + "%";
  }
  return (
    <div className="bar">
      <div className="chart">
        <div className="bar"></div>
      </div>
      <div
        className="bar-inner"
        style={{ height: barHeight, width: "100%" }}></div>
    </div>
  );
};
export default ChartBar;
