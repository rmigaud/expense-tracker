import ExpenseItem from "./ExpenseItem";
import "../UI/Card.css";
import Card from "../UI/Card";
import "./Expenses.css";
const ExpensesList = (props) => {
  return (
    <Card className="expenses">
      {props.items.length === 0 ? (
        <Card className="expenses"> No Expenses for the current year.</Card>
      ) : (
        props.items.map((item) => (
          <ExpenseItem
            key={item.id}
            date={item.date}
            expense={item.expense}
            cost={item.cost}
          />
        ))
      )}
    </Card>
  );
};
export default ExpensesList;
