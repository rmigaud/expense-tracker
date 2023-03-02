import "./Expenses.css";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import ExpenseForm from "../UI/ExpenseForm";
const mockExpenses = [
  {
    date: new Date(2022, 11, 12),
    expense: "School tuition",
    cost: "$19,000",
  },
  { date: new Date(2023, 0, 15), expense: "Rent", cost: "$1000" },
  { date: new Date(2022, 11, 12), expense: "Groceries", cost: "$200" },
  {
    date: new Date(2022, 11, 12),
    expense: "Movie Subscription",
    cost: "$80",
  },
  {
    date: new Date(2022, 11, 12),
    expense: "Movie Subscription",
    cost: "$80",
  },
  {
    date: new Date(2022, 11, 12),
    expense: "Movie Subscription",
    cost: "$80",
  },
];

const Expenses = () => {
  return (
    <div>
      <Card className="expenses">
        <ExpenseForm />
      </Card>
      <Card className="expenses">
        {mockExpenses.map((item) => (
          <ExpenseItem
            key={
              "" +
              item +
              item.date +
              item.expense +
              item.cost +
              new Date().toLocaleString()
            }
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
