// Import dependencies
import axios from 'axios'
import { config } from 'vars'

// State
const initialState = {
    user: []
}

// Types
const CreateUser = '@user/create'
const GetUser = '@user/get'

// Reducers
export const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case CreateUser:
            return { ...state, user: action.payload }
        case GetUser:
            return { ...state, user: action.payload }
        default:
            return state
    }
}

// Actions

// Create user
export const createUser = data => async dispatch => {
    try {
        // Request        
        const res = await axios.post(`${config.API_URL}/api/user`, {
            headers: {
                'content-type': 'application/json'
            },
            data
        })

        // Dispatch
        dispatch({
            type: CreateUser,
            payload: res.data
        })

    } catch (err) {
        console.log(err)
    }
}

// Get User
export const getUser = () => async dispatch => {
    try {
        // Request
        const res = await axios.get(`${config.API_URL}/api/user`)

        // Dispatch
        dispatch({
            type: GetUser,
            payload: res.data
        })
    } catch (err) {
        console.log(err)
    }
}