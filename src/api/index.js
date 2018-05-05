import axios from 'axios';
import endpoints from './endpoints';

const URL = "https://donidunite-back.herokuapp.com";

export default {
    fetchProducts:    ()  => axios.get(`${URL}${endpoints.PRODUCTS}`),
    fetchOrders:      ()  => axios.get(`${URL}${endpoints.ORDERS}`),
    fetchIncomes:     ()  => axios.get(`${URL}${endpoints.INCOMES}`),
    fetchExpenses:    ()  => axios.get(`${URL}${endpoints.EXPENSES}`),
    fetchCategories:  ()  => axios.get(`${URL}${endpoints.CATEGORIES}`),
} 
  