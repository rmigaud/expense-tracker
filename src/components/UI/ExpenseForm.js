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
    event.preventDefault();
    const newData = {
      title: title,
      date: date,
      cost: cost,
    };
    console.log(newData);
    setTitle("");
    setDate("");
    setCost("");
  };

  return (
    <form className="expense-form" onSubmit={submitExpenseHandler}>
      <Card className="expense-input">
        <label htmlFor="date">date:</label>
        <input
          id="date"
          type="date"
          onChange={dateChangeHandler}
          value={date}
        />
      </Card>
      <Card className="expense-input">
        <label htmlFor="title">title:</label>
        <input id="title" onChange={titleChangeHandler} value={title} />
      </Card>
      <Card className="expense-input">
        <label htmlFor="cost">cost:</label>
        <input
          id="cost"
          type="number"
          min="0.01"
          step="0.01"
          onChange={costChangeHandler}
          value={cost}
        />
      </Card>
      <div>
        <Card className="expense-input">
          <button type="submit" onClick={submitExpenseHandler}>
            Track Expense
          </button>
        </Card>
      </div>
    </form>
  );
};

export default ExpenseForm;
