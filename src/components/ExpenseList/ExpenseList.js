
import './ExpenseList.css'
import ExpenseItem from '../expenseItem/expenseItem'


const ExpenseList = (props) => {

    if (!props.items.length) {
        return <h2 className='expenses-list__fallback'>
            No expenses for this year! 🤑
        </h2>
    }

    return (
        <ul className='expenses-list'>
            {props.items.map((expense =>
                <ExpenseItem
                    key={expense.id}
                    title={expense.title}
                    amount={expense.amount}
                    date={expense.date} />

            ))}
        </ul>
    )
}

export default ExpenseList;