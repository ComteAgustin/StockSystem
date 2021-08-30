// Import dependencies
import axios from 'axios'
import { config } from 'vars'

// State
const initialState = {
    providers: []
}

// Types
const CreateProvider = '@providers/create'
const GetProviders = '@providers/get'
const DeleteProvider = '@providers/delete'

// Reducers
export const providerReducer = (state = initialState, action) => {
    switch (action.type) {
        case CreateProvider:
            return { ...state }
        case GetProviders:
            return { ...state, providers: action.payload }
        case DeleteProvider:
            state.providers = state.providers.filter(i => i._id !== action.payload)
            return state
        default:
            return state
    }
}

// Actions

// Create Provider
export const createProvider = data => async dispatch => {
    try {
        // Request        
        const res = await axios.post(`${config.API_URL}/api/provider`, {
            headers: {
                'content-type': 'application/json'
            },
            data
        })
        // Dispatch
        dispatch({
            type: CreateProvider,
            payload: res.data
        })

    } catch (err) {
        console.log(err)
    }
}

// Get Providers
export const getProviders = () => async dispatch => {
    try {
        // Request
        const res = await axios.get(`${config.API_URL}/api/provider`)
        // Dispatch
        dispatch({
            type: GetProviders,
            payload: res.data
        })
    } catch (err) {
        console.log(err)
    }
}

// Delete Provider
export const deleteProvider = id => async dispatch => {
    try {
        await axios.delete(`${config.API_URL}/api/provider/${id}`)
        dispatch({
            type: DeleteProvider,
            payload: id
        })
    } catch (err) {
        console.log(err)
    }
}