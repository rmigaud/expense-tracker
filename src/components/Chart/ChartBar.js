const ChartBar = (props) => {
  let barHeight = "0%";

  if (props.maxValue > 0) {
    console.log("ChartBar:props.cost=", props.cost);
    console.log("ChartBar:props.maxValue=", props.maxValue);
    barHeight = Math.round((props.cost / props.maxValue) * 100) + "%";
    console.log("ChartBar:barHeight=", barHeight);
  }
  return (
    <div className="bar">
      <div className="bar-inner">
        <div className="bar-fill" style={{ height: barHeight }}></div>
      </div>
      <div className="bar-label">{props.label}</div>
    </div>
  );
};
export default ChartBar;
