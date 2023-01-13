import React, { useState } from 'react';
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
import "./ExpenseItem.css";

const ExpenseItem = ({date, title, price}) => {

const [expense, setExpense] = useState(title);

const clickHandler = () => {
  setExpense('Updated');
}

  return (
    <Card className="expense-item">
    <ExpenseDate date={date}/>
      <div className="expense-item__description">
        <h2>{expense}</h2>
        <div className="expense-item__price">{price}</div>
      </div>
      <button onClick={clickHandler}>Change Title</button>
    </Card>
  );
};

export default ExpenseItem;
