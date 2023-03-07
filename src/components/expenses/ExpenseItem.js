import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";

const ExpenseItem = (props) => {
  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <h1 className="title">{props.expense}</h1>
      <p className="cost">${props.cost}</p>
    </Card>
  );
};
export default ExpenseItem;
