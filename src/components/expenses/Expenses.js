import "./Expenses.css";
import "../Chart/Chart.css";
import ExpensesList from "./ExpensesList";
import Card from "../UI/Card";
import ExpenseForm from "../UI/ExpenseForm";
import ExpensesFilter from "./ExpensesFilter";
import { useState } from "react";
import Chart from "../Chart/Chart";

let mockExpenses = [
  {
    id: 0,
    date: new Date(2021, 11, 12),
    expense: "School tuition",
    cost: 19000,
  },
  { id: 1, date: new Date(2023, 0, 15), expense: "Rent", cost: 1000 },
  { id: 2, date: new Date(2022, 10, 12), expense: "Groceries", cost: 200 },
  {
    id: 3,
    date: new Date(2019, 11, 12),
    expense: "Streaming Subscription",
    cost: 20,
  },
  {
    id: 4,
    date: new Date(2020, 11, 12),
    expense: "Music Subscription",
    cost: 10,
  },
  {
    id: 5,
    date: new Date(2022, 11, 12),
    expense: "Movie Subscription",
    cost: 20,
  },
];

const Expenses = () => {
  const [filterYear, setFilterYear] = useState("2022");
  const [expenses, setExpenses] = useState(mockExpenses);
  const [isEditing, setIsEditing] = useState(false);
  const chartData = [
    { label: "Jan", cost: 0 },
    { label: "Feb", cost: 0 },
    { label: "Mar", cost: 0 },
    { label: "Apr", cost: 0 },
    { label: "May", cost: 0 },
    { label: "Jun", cost: 0 },
    { label: "Jul", cost: 0 },
    { label: "Aug", cost: 0 },
    { label: "Sep", cost: 0 },
    { label: "Oct", cost: 0 },
    { label: "Nov", cost: 0 },
    { label: "Dec", cost: 0 },
  ];

  const startEditingHandler = () => {
    setIsEditing(true);
  };
  const stopEditingHandler = () => {
    setIsEditing(false);
  };
  const onSaveExpenseDataHandler = (expenseData) => {
    setExpenses((expenses) => {
      return [...expenses, { ...expenseData, id: Math.random().toString() }];
    });
  };

  const changeFilterHandler = (event) => {
    setFilterYear(event.target.value);
  };

  const filteredExpenses = expenses.filter((expense) => {
    let filteredCost = expense.date.getFullYear().toString() === filterYear;
    if (expense.date.getFullYear().toString() === filterYear) {
      chartData[expense.date.getMonth()]["cost"] += expense.cost;
    }
    return filteredCost;
  });

  return (
    <div>
      <Card className="expenses">
        {!isEditing ? (
          <button type="button" onClick={startEditingHandler}>
            Add an Expense
          </button>
        ) : (
          <div>
            <button type="button" onClick={stopEditingHandler}>
              Cancel
            </button>
            <ExpenseForm onSaveExpenseData={onSaveExpenseDataHandler} />
          </div>
        )}
      </Card>
      <Card className="expenses">
        <Chart dataPoints={chartData} />
        <Card>
          <ExpensesFilter
            year={filterYear}
            onChangeFilter={changeFilterHandler}
          />
        </Card>
      </Card>
      <ExpensesList items={filteredExpenses} />
    </div>
  );
};
export default Expenses;
