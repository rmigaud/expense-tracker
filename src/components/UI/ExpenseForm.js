import { useState } from "react";
import "./ExpenseForm.css";
import Card from "./Card";

const ExpenseForm = () => {
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [cost, setCost] = useState("");

  const titleChangeHandler = (event) => {
    setTitle(event.target.value);
  };

  const dateChangeHandler = (event) => {
    setDate(event.target.value);
  };

  const costChangeHandler = (event) => {
    setCost(event.target.value);
  };

  const submitExpenseHandler = (event) => {
    console.log(title, date, cost);
  };

  return (
    <form className="expense-form">
      <Card className="expense-input">
        <label for="date">date:</label>
        <input id="date" type="date" onChange={dateChangeHandler} />
      </Card>
      <Card className="expense-input">
        <label for="title">title:</label>
        <input id="title" onChange={titleChangeHandler} />
      </Card>
      <Card className="expense-input">
        <label for="cost">cost:</label>
        <input
          id="cost"
          type="number"
          min="0.01"
          step="0.01"
          onChange={costChangeHandler}
        />
      </Card>
      <div>
        <Card className="expense-input">
          <button onClick={submitExpenseHandler}>Track Expense</button>
        </Card>
      </div>
    </form>
  );
};

export default ExpenseForm;
