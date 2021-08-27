// Import dependencies
import axios from 'axios'
import { config } from 'vars'
import useSales from 'hooks/useSales'
import useReports from 'hooks/useReports'

// State
const initialState = {
    sales: [],
    totalSales: Number
}

// Types
const CreateSale = '@sale/create'
const GetSales = '@sales/get'
const GetTotalSales = '@totalSales/create'
const CreateTotalSales = '@totalSales/get'

// Reducers
export const salesReducer = (state = initialState, action) => {
    switch (action.type) {
        case CreateSale:
            state.sales.push(action.payload)
            return state
        case GetSales:
            return { ...state, sales: action.payload }
        case CreateTotalSales:
            state.totalSales = state.totalSales + action.payload
            return state
        case GetTotalSales:
            return { ...state, totalSales: action.payload }
        default:
            return state
    }
}

// Actions

// Create sales
export const createSale = data => async (dispatch, getState) => {
    try {
        // Request        
        const res = await axios.post(`${config.API_URL}/api/sales`, {
            headers: {
                'content-type': 'application/json'
            },
            data
        })

        // Dispatch
        dispatch({
            type: CreateSale,
            payload: res.data
        })

    } catch (err) {
        console.log(err)
    }
}

// Get sales
export const getSales = () => async (dispatch, getState) => {
    try {
        // Request
        const res = await axios.get(`${config.API_URL}/api/sales`)

        // Dispatch
        dispatch({
            type: GetSales,
            payload: res.data
        })
    } catch (err) {
        console.log(err)
    }
}


// Create Total Sales
export const createTotalSales = newSale => dispatch => {
    dispatch({
        type: CreateTotalSales,
        payload: newSale
    })
}

// Get Total Sales

export const getTotalSales = totalSales => dispatch => {
    dispatch({
        type: GetTotalSales,
        payload: totalSales
    })
}