import Store from '../store'
import { createExpense, submitEditExpense } from '../containers/expenses/expensesActions'

export const expenseCreator = (values) => {
    Store.dispatch(createExpense(values))
}

export const expenseEditor = (values) => {
    Store.dispatch(submitEditExpense(values))
}