
import './newexpense.css'
import ExpenseForm from './newExpenseForm';
import React, { useState } from 'react';
const NewExpense = (props) => {

    const [editing, Setediting] = useState(false)
    const saveExpenseDataHandler =
        (enteredExpenseData) => {

            const expenseData = {
                ...enteredExpenseData,
                id: Math.random().toString()
            }
            props.onAddexpense(expenseData);
            console.log(expenseData)
            Setediting(false)
        }

    const startEditing = () => {
        Setediting(true)
    }

    const cancelEditing = () => {
        Setediting(false)
    }
    return (
        <div className="new-expense">

            {
                !editing &&
                <button onClick={startEditing}>Add New Expense</button>

            }

            {editing &&
                <ExpenseForm cancelEditing={cancelEditing}
                 onSaveExpenseData={
                    saveExpenseDataHandler

                   
                } />
                
            }
        
        </div>
    )
}

export default NewExpense;