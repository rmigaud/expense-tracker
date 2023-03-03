import "./Expenses.css";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import ExpenseForm from "../UI/ExpenseForm";

let mockExpenses = [
  {
    id: 0,
    date: new Date(2022, 11, 12),
    expense: "School tuition",
    cost: "$19,000",
  },
  { id: 1, date: new Date(2023, 0, 15), expense: "Rent", cost: "$1000" },
  { id: 2, date: new Date(2022, 11, 12), expense: "Groceries", cost: "$200" },
  {
    id: 3,
    date: new Date(2022, 11, 12),
    expense: "Movie Subscription",
    cost: "$80",
  },
  {
    id: 4,
    date: new Date(2022, 11, 12),
    expense: "Movie Subscription",
    cost: "$80",
  },
  {
    id: 5,
    date: new Date(2022, 11, 12),
    expense: "Movie Subscription",
    cost: "$80",
  },
];

const Expenses = () => {
  const onSaveExpenseDataHandler = (expenseData) => {
    const newExpenseData = { ...expenseData };
    mockExpenses = [
      ...mockExpenses,
      { ...newExpenseData, id: Math.random().toString() },
    ];
    console.log(mockExpenses);
  };

  return (
    <div>
      <Card className="expenses">
        <ExpenseForm onSaveExpenseData={onSaveExpenseDataHandler} />
      </Card>
      <Card className="expenses">
        {mockExpenses.map((item) => (
          <ExpenseItem
            key={"" + item.id}
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
