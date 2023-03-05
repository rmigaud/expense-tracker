import "./Expenses.css";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import ExpenseForm from "../UI/ExpenseForm";
import ExpensesFilter from "./ExpensesFilter";
import { useState } from "react";

let mockExpenses = [
  {
    id: 0,
    date: new Date(2021, 11, 12),
    expense: "School tuition",
    cost: "$19,000",
  },
  { id: 1, date: new Date(2023, 0, 15), expense: "Rent", cost: "$1000" },
  { id: 2, date: new Date(2022, 11, 12), expense: "Groceries", cost: "$200" },
  {
    id: 3,
    date: new Date(2019, 11, 12),
    expense: "Streaming Subscription",
    cost: "$20",
  },
  {
    id: 4,
    date: new Date(2020, 11, 12),
    expense: "Music Subscription",
    cost: "$10",
  },
  {
    id: 5,
    date: new Date(2022, 11, 12),
    expense: "Movie Subscription",
    cost: "$20",
  },
];

const Expenses = () => {
  const [filterYear, setFilterYear] = useState("2022");
  const [expenses, setExpenses] = useState(mockExpenses);
  const onSaveExpenseDataHandler = (expenseData) => {
    setExpenses((expenses) => {
      return [...expenses, { ...expenseData, id: Math.random().toString() }];
    });
  };

  const changeFilterHandler = (event) => {
    setFilterYear(event.target.value);
  };

  const filteredExpenses = expenses.filter((expense) => {
    return expense.date.getFullYear().toString() === filterYear;
  });

  return (
    <div>
      <Card className="expenses">
        <ExpenseForm onSaveExpenseData={onSaveExpenseDataHandler} />
      </Card>
      <Card className="expenses">
        <ExpensesFilter
          year={filterYear}
          onChangeFilter={changeFilterHandler}
        />
      </Card>
      <Card className="expenses">
        {filteredExpenses.map((item) => (
          <ExpenseItem
            key={item.id}
            date={item.date}
            expense={item.expense}
            cost={item.cost}
          />
        ))}
      </Card>
    </div>
  );
};
export default Expenses;
