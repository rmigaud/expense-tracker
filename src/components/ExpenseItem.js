import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";

const ExpenseItem = (props) => {
  return (
    <div className="expense-item">
      <ExpenseDate date={props.date} />
      <h1 className="expense">{props.expense}</h1>
      <p className="cost">{props.cost}</p>
    </div>
  );
};
export default ExpenseItem;
