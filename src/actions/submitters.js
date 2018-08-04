import Store from '../store'
import { createExpense, submitEditExpense } from '../containers/expenses/expensesActions'
import { createIncome, submitEditIncome } from '../containers/incomes/incomesActions'
import { createProduct, submitEditProduct } from '../containers/products/productsActions'
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

export const productCreator = (values) => {
    Store.dispatch(createProduct(values))
}

export const productEditor = (values) => {
    Store.dispatch(submitEditProduct(values))
}

export const categoryCreator = (values) => {
    Store.dispatch(createCategory(values))
}