import Store from '../store'
import { createExpense, submitEditExpense } from '../containers/expenses/expensesActions'
import { createIncome, submitEditIncome } from '../containers/incomes/incomesActions'
import { createCategory } from '../containers/categorySelector/categorySelectorActions'


export const expenseCreator = (values) => {
    Store.dispatch(createExpense(values))
}

export const expenseEditor = (values) => {
    Store.dispatch(submitEditExpense(values))
}

export const incomeCreator = (values) => {
    Store.dispatch(createIncome(values))
}

export const incomeEditor = (values) => {
    Store.dispatch(submitEditIncome(values))
}

export const categoryCreator = (values) => {
    Store.dispatch(createCategory(values))
}