import axios from 'axios';
import endpoints from './endpoints';

const URL = "https://donidunite-back.herokuapp.com";

axios.get('https://donidunite-back.herokuapp.com/management/expenses');

export default {
    fetchProducts:          ()      => axios.get(`${URL}${endpoints.PRODUCTS}`),
    fetchOrders:            ()      => axios.get(`${URL}${endpoints.ORDERS}`),
    fetchIncomes:           ()      => axios.get(`${URL}${endpoints.INCOMES}`),
    fetchExpenses:          ()      => axios.get(`${URL}${endpoints.INCOMES}`),
    fetchCategoriesByType:  (type)  => axios.get(`${URL}${endpoints.CATEGORIES_BY_TYPE}${type}`),
} 
  