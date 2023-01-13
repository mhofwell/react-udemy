import React from "react";
import "ExpenseForm.css";

const ExpenseForm = () => {
  return (
    <form>
      <div className='new-expense__controls'>
        <div classname='new-expense__controls'>
          <label>Title</label>
          <input type="text" />
        </div>
        <div classname='new-expense__controls'>
          <label>Amount</label>
          <input type="number" min="0.01" step="0.01"/>
        </div>
        <div classname='new-expense__controls'>
          <label>Date</label>
          <input type="date" min="2019-01-01" step="2022-12-31"/>
        </div>
      </div>
      <div className='new-expense__actions'>
        <button type="submit">
            Add Expense
        </button>
      </div>
    </form>
  );
};

export default ExpenseForm;
