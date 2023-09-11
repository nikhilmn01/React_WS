import React, { useState } from 'react';

import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

const NewExpense = (props) => {
  const [showForm, setShowForm] = useState(false);
  const handleSubmitExpenseForm = (expenseData) => {
    const enteredExpenseData = { ...expenseData, id: Math.random().toString() }
    props.onSubmitExpenseForm(enteredExpenseData);
  }

  const handleAddExpense = () => {
    setShowForm(true);
  }

  const handleCancel = () => {
    setShowForm(false);
  }
  return (
    <div className='new-expense'>
      {!showForm ?
        <button onClick={handleAddExpense}>Add New Expense</button>
        :
        <ExpenseForm
          onSubmitExpenseForm={handleSubmitExpenseForm}
          onCancel={handleCancel}
        />
      }
    </div>
  );
};

export default NewExpense;
