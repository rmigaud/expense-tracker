import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "./Card";

const ExpenseItem = (props) => {
  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <h1 className="expense">{props.expense}</h1>
      <p className="cost">{props.cost}</p>
    </Card>
  );
};
export default ExpenseItem;
