import "./ExpenseForm.css";
import Card from "./Card";

const ExpenseForm = () => {
  return (
    <form className="expense-form">
      <Card className="expense-input">
        <label for="date">date:</label>
        <input id="date" />
      </Card>
      <Card className="expense-input">
        <label for="title">title:</label>
        <input id="title" />
      </Card>
      <Card className="expense-input">
        <label for="cost">cost:</label>
        <input id="cost" />
      </Card>
      <div>
        <Card className="expense-input">
          <button>Track Expense</button>
        </Card>
      </div>
    </form>
  );
};

export default ExpenseForm;
