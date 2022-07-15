import ExpenseList from '../ExpenseList/ExpenseList';
import './expenses.css'
import Card from "../card/card";
import React, { useState } from "react";
import ExpensesFilter from "../FilterComponent/filterComponent";
import ExpensesChart from '../expensesChart/expensesChart';
const Expenses = (props) => {
    const [filteredYear, setFilteredYear] = useState('2022')

    const filterChangeHandler = (selectedYear) => {
        setFilteredYear(selectedYear)
        console.log(selectedYear)
    }

    const filteredExpenses = props.items.filter((expense) => {
        return expense.date.getFullYear().toString() === filteredYear;
    });


    return (
        <>
            <div>
                <Card className="expenses">
                    < ExpensesFilter select={filteredYear}
                        filterChangeHandler={filterChangeHandler}
                    />
                    {filteredExpenses.length > 0 &&
                        <ExpensesChart
                            expenses={filteredExpenses} />}

                    <ExpenseList items={filteredExpenses} />
                </Card>
            </div>
        </>
    );

}

export default Expenses;