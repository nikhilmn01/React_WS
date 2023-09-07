import React from 'react';

import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

const NewExpense = (props) => {
  const handleSubmitExpenseForm = (expenseData) =>{
    const enteredExpenseData = {...expenseData,id:Math.random().toString()}
    props.onSubmitExpenseForm(enteredExpenseData);
  }
  return (
    <div className='new-expense'>
      <ExpenseForm onSubmitExpenseForm={handleSubmitExpenseForm}/>
    </div>
  );
};

export default NewExpense;
