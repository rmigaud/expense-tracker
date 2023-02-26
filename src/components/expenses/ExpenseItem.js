import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
import { useState } from "react";

const ExpenseItem = (props) => {
  const [expense, setExpense] = useState(props.expense);
  const clickHandler = () => {
    setExpense("New Title");
  };

  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <h1 className="title">{expense}</h1>
      <p className="cost">{props.cost}</p>
      <button onClick={clickHandler}>change title</button>
    </Card>
  );
};
export default ExpenseItem;
