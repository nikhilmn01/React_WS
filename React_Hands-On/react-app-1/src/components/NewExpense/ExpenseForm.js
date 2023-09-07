import {React,useState} from 'react';

import './ExpenseForm.css';

const ExpenseForm = (props) => {
  const [userData,setUserData] = useState({
    title:'',
    amount:'',
    date:''
  });
  const handleUserInputChange = (identifier,userEvent) => {
    if(identifier === 'title'){
      setUserData({...userData,title:userEvent.target.value})
    }
    else if(identifier === 'amount'){
      setUserData({...userData,amount:userEvent.target.value})
    }
    else if(identifier === 'date'){
      setUserData({...userData,date:userEvent.target.value})
    }
  }
  const handleFormSubmit = (event) => {
    event.preventDefault();
    const expenseData = {...userData,date: new Date(userData.date).toLocaleDateString()};
    console.log(`user data: ${JSON.stringify(userData)}`);
    console.log(`expense data: ${JSON.stringify(expenseData)}`);
    setUserData({
      title:'',
      amount:'',
      date:''
    });
    props.onSubmitExpenseForm(expenseData);
  }
  return (
    <form onSubmit={handleFormSubmit}>
      <div className='new-expense__controls'>
        <div className='new-expense__control'>
          <label>Title</label>
          <input type='text' value={userData.title} onChange={(event) => {handleUserInputChange('title',event)}}/>
        </div>
        <div className='new-expense__control'>
          <label>Amount</label>
          <input type='number' min='0.01' step='0.01' value={userData.amount} onChange={(event) => {handleUserInputChange('amount',event)}}/>
        </div>
        <div className='new-expense__control'>
          <label>Date</label>
          <input type='date' min='2019-01-01' max='2022-12-31' value={userData.date} onChange={(event) => {handleUserInputChange('date',event)}}/>
        </div>
      </div>
      <div className='new-expense__actions'>
        <button type='submit'>Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
