import React, { useState } from 'react';

import './ExpenseForm.css';

const ExpenseForm = (props) => {

  //Functions and variables to handle form inputs
  const [enteredTitle, setTitle] = useState('');
  const [enteredAmount, setAmount] = useState('');
  const [enteredDate, setDate] = useState('');

  //Or
  // const [userInput, setUserInput] = useState({
  //   enteredTitle: '',
  //   enteredAmount: '',
  //   enteredDate: '',
  // });

  const titleChangeHandler = (event) => {
    setTitle(event.target.value);

    //Or
    // setUserInput({
    //   ...userInput,
    //   enteredTitle: event.target.value,
    // });
    // setUserInput((prevState) => {
    //   return { ...prevState, enteredTitle: event.target.value };
    // });
  };

  const amountChangeHandler = (event) => {
    setAmount(event.target.value);
    //Or
    // setUserInput({
    //   ...userInput,
    //   enteredAmount: event.target.value,
    // });
  };

  const formSubmitHandler = (event) =>{
    //Preventing submission of the form
    event.preventDefault();

    const expenseData = {
      title:enteredTitle,
      amount:enteredAmount,
      date:enteredDate
    };

    //Sending data to parent component
    props.onFormSubmit(expenseData);

    //Resetting the fields
    setTitle('');
    setAmount('');
    setDate('');

  }

  const dateChangeHandler = (event) => {
    setDate(event.target.value);

    //Or
    // setUserInput({
    //   ...userInput,
    //   enteredDate: event.target.value,
    // });
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <div className='new-expense__controls'>
        <div className='new-expense__control'>
          <label>Title</label>
          <input type='text' onChange={titleChangeHandler} value={enteredTitle}/>
        </div>
        <div className='new-expense__control'>
          <label>Amount</label>
          <input
            type='number'
            min='0.01'
            step='0.01'
            onChange={amountChangeHandler}
            value={enteredAmount}
          />
        </div>
        <div className='new-expense__control'>
          <label>Date</label>
          <input
            type='date'
            min='2021-01-01'
            max='2022-12-31'
            onChange={dateChangeHandler}
            value={enteredDate}
          />
        </div>
      </div>
      <div className='new-expense__actions'>
        <button type='submit'>Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;