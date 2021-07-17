import React from 'react';

import NewExpense from './components/NewExpense/NewExpense';
import Expenses from './components/Expenses/Expenses';

const App = () => {

  const addNewExpense = (expenseData) =>{
   expenses.pop(expenseData.title);
  };

  const expenses = [
    {
      id: 'i1',
      title: 'WiFi Reacharge',
      amount: 500.00,
      date: new Date(2021, 7, 14),
    },
    { id: 'i2', title: 'Fast Food', amount: 100.00, date: new Date(2021, 2, 12) },
    {
      id: 'i3',
      title: 'Bike Expenses',
      amount: 200.00,
      date: new Date(2021, 2, 28),
    },
    {
      id: 'i4',
      title: 'Stationaries',
      amount: 250.00,
      date: new Date(2021, 5, 12),
    },
  ];

  // return React.createElement(
  //   'div',
  //   {},
  //   React.createElement('h2', {}, "Let's get started!"),
  //   React.createElement(Expenses, { items: expenses })
  // );

  return (
    <div>
      <NewExpense onAddNewExpense={addNewExpense}/>
      <Expenses items={expenses} />
      
    </div>
  );
}

export default App;