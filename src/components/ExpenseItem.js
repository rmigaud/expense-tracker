import "./ExpenseItem.css";

const ExpenseItem = (props) => {
  const month = props.date.toLocaleString("en-US", { month: "long" });
  const day = props.date.toLocaleString("en-US", { day: "2-digit" });
  const year = props.date.getFullYear();
  return (
    <div className="expense-item">
      <h2 className="date">
        {month} / {day} / {year}
      </h2>
      <h1 className="expense">{props.expense}</h1>
      <p className="cost">{props.cost}</p>
    </div>
  );
};
export default ExpenseItem;
