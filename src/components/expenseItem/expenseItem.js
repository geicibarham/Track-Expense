
import './style.css'
import React, { useState } from 'react'
import Card from '../card/card'
import ExpenseDate from '../expenseDate/expenseDate'

const ExpenseItem = (props) => {


    return (
        <>
            {/* card is now a custom component defined by me */}
           <li>
            <Card className="expense-item">
                <ExpenseDate date={props.date} />
                <div className="expense-item__description">
                    <h2>{props.title}</h2>
                    <div className=
                        "expense-item__price">
                        {props.amount}</div>
                </div>
        
            </Card>
            </li>

        </>
    )
}

export default ExpenseItem;