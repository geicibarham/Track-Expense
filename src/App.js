import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import Expenses from './components/expenses/expenses';
import NewExpense from './components/newExpense/NewExpense';
import piggy from '../../geici/src/assets/images/piggy.png'
const DUMMY_DATA = [
  {
    id: 'e1',
    title: 'Toilet Paper',
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: 'e3',
    title: 'Car Insurance',
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: 'e4',
    title: 'New Desk (Wooden)',
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];

function App() {
  const [expenses, setExpenses] =
    useState(DUMMY_DATA)

  const addExpenseHandler = (expense) => {
    setExpenses((previousExpenses) => {
      return [expense, ...previousExpenses]
    })
  }
  return (
    <>
    <div className='title'>
      <h2 style={{textAlign:"center",
      alignSelf:"center",
    paddingTop:"20px",
    paddingBottom:"20px"}}>
        Expense Tracker <img src={piggy}
        height="100px"
        alt=""/></h2> 
        </div>
      <NewExpense onAddexpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </>
  );
}

export default App;
