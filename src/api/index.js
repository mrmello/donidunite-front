import axios from 'axios';
import endpoints from './endpoints';

const URL = "https://donidunite-back.herokuapp.com";
//const URL = "http://localhost:3100";

export default {
    fetchProducts:    ()  => axios.get(`${URL}${endpoints.PRODUCTS}`),
    fetchOrders:      ()  => axios.get(`${URL}${endpoints.ORDERS}`),
    fetchIncomes:     ()  => axios.get(`${URL}${endpoints.INCOMES}`),
    fetchExpenses:    ()  => axios.get(`${URL}${endpoints.EXPENSES}`),
    fetchCategories:  ()  => axios.get(`${URL}${endpoints.CATEGORIES}`),
    createIncome:     (payload)  => axios.post(`${URL}${endpoints.INCOME_CREATE}`, payload),
    createCategory:   (payload)  => axios.post(`${URL}${endpoints.CATEGORY_CREATE}`, payload),
    createExpense:    (payload)  => axios.post(`${URL}${endpoints.EXPENSE_CREATE}`, payload),
    editExpense:      (payload)  => axios.put(`${URL}${endpoints.EXPENSE_EDIT}/${payload._id}`, payload),
    editIncome:       (payload)  => axios.put(`${URL}${endpoints.INCOME_EDIT}/${payload._id}`, payload),
    createProduct:    (payload)  => axios.post(`${URL}${endpoints.PRODUCT_CREATE}`, payload),
    deleteExpense:    (payload)  => axios.delete(`${URL}${endpoints.EXPENSE_DELETE}/${payload}`),
    deleteIncome:     (payload)  => axios.delete(`${URL}${endpoints.INCOME_DELETE}/${payload}`),
    deleteProduct:    (payload)  => axios.delete(`${URL}${endpoints.PRODUCT_DELETE}/${payload}`),
    editProduct:      (payload)  => axios.put(`${URL}${endpoints.PRODUCT_EDIT}/${payload._id}`, payload),
}