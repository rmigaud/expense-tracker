import "./App.css";
import ExpenseItem from "./components/ExpenseItem";

function App() {
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
  ];

  return (
    <div className="App">
      {mockExpenses.map((item) => (
        <ExpenseItem
          key={item}
          date={item.date}
          expense={item.expense}
          cost={item.cost}
        />
      ))}
    </div>
  );
}

export default App;
