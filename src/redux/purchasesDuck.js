// Import dependencies
import axios from 'axios'
import { config } from 'vars'

// State
const initialState = {
    purchases: []
}

// Types
const CreatePurchase = '@purchase/create'
const GetPurchases = '@purchases/get'

// Reducers
export const purchasesReducer = (state = initialState, action) => {
    switch (action.type) {
        case CreatePurchase:
            return { ...state }
        case GetPurchases:
            return { ...state, purchases: action.payload }
        default:
            return state
    }
}

// Actions

// Create Provider
export const createPurchase = data => async dispatch => {
    try {
        // Request        
        const res = await axios.post(`${config.API_URL}/api/purchases`, {
            headers: {
                'content-type': 'application/json'
            },
            data
        })

        // Dispatch
        dispatch({
            type: CreatePurchase,
            payload: res.data
        })

    } catch (err) {
        console.log(err)
    }
}

// Get Providers
export const getPurchases = () => async dispatch => {
    try {
        // Request
        const res = await axios.get(`${config.API_URL}/api/purchases`)

        // Dispatch
        dispatch({
            type: GetPurchases,
            payload: res.data
        })
    } catch (err) {
        console.log(err)
    }
}