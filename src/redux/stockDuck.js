// Import dependencies
import axios from 'axios'
import {config} from 'config'

// State
const initialState = {
    stock: []
}

// Types
const CreateStock = '@stock/create'
const GetStock = '@stock/get'

// Reducer
export const stockReducer = (state = initialState, action) => {
    switch(action.type) {
        case CreateStock:
            return {...state, stock: action.payload}
        case GetStock:
            return {...state, stock: action.payload}
        default:
            return state
    }
}

// Actions

// Create Stock
export const createStock = data => async (dispatch, getState) => {
    try {
        // Request
        const res = await axios.post(`${config.API_URL}/api/stock`, {
            headers: {
                'content-type': 'application/json'
            },
            data
        })

        // Dispatch
        dispatch({
            type: CreateStock,
            payload: res.data
        })

    } catch (err) {
        console.log(err)
    }
}

// Get Stock
export const getStock = () => async (dispatch, getState) => {
    try {
        // Request
        const res = await axios.get(`${config.API_URL}/api/stock`)

        // Dispatch
        dispatch({
            type: GetStock,
            payload: res.data
        })

    } catch (err) {
        console.log(err)
    }
}