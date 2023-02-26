import { useState } from "react";
import ExpenseForm from "../UI/ExpenseForm.js";
import Card from "../UI/Card.js";

const ExpenseInput = () => {
  const [title, setTitle] = useState();

  return (
    <Card>
      <ExpenseForm></ExpenseForm>
    </Card>
  );
};

export default ExpenseInput;
