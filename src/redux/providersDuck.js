// Import dependencies
import axios from 'axios'
import {config} from 'vars'

// State
const initialState = {
    providers: []
}

// Types
const CreateProvider = '@providers/create'
const GetProviders = '@providers/get'

// Reducers
export const providerReducer = (state = initialState, action) => {
    switch(action.type){
        case CreateProvider:
            return {...state, providers: providers.concat(action.payload)}
        case GetProviders:
            return {...state, providers: action.payload}
        default:
            return state
    }
}

// Actions

// Create Provider
export const createProvider = data => async (dispatch, getState) => {
    try {
        // Request        
        const res = await axios.post(`${config.API_URL}/api/providers`, {
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
export const getProviders = () => async (dispatch, getState) => {
    try {
        // Request
        const res = await axios.get(`${config.API_URL}/api/providers`)

        // Dispatch
        dispatch({
            type: GetProviders,
            payload: res.data
        })
    } catch (err) {
        console.log(err)
    }
}