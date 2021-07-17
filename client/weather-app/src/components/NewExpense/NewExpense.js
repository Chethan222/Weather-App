import React from 'react';

import ExpenseForm from './ExpenseForm';
import './NewExpense.css';


const NewExpense = (props) => {

  //Function to handle submited exprense data
  const onFormSubmitHandler = (enteredData) =>{
    const data = {
      ...enteredData,
      id:Math.random().toString()
    };

    props.onAddNewExpense(data);
  };

  return (
    <div className='new-expense'>
      <ExpenseForm onFormSubmit={onFormSubmitHandler}/>
    </div>
  );
};

export default NewExpense;