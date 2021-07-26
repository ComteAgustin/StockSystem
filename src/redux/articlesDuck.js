// Import dependencies
import axios from 'axios'
// Import Api Url
import {config} from 'vars'

// State
const initialState = {
    articles: []
}

// Types
const CreateArticle = '@articles/create'
const GetArticles = '@articles/get'

// Reducer 
export const articlesReducer = (state = initialState, action) => {
    switch(action.type){
        case GetArticles:
            return {...state, articles: action.payload}
        case CreateArticle:
            return {...state, articles: action.payload}
        default:
            return state
    }
}

// Actions

// Create Articles
export const createArticle = data => async (dispatch, getState) => {
    try {
        const res = await axios.post(`${config.API_URL}/api/articles`, {
            headers: {
                'content-type': 'application/json'
            },
            data
        })

        dispatch({
            type: CreateArticle,
            payload: res.data
        })

    } catch (err) {
        console.log(err)
    }
}

// Get Articles
export const getArticles = () => async (dispatch, getState) => {
    try {
        const res = await axios.get(`${config.API_URL}/api/articles`)
        dispatch({
            type: GetArticles,
            payload: res.data 
        })
    } catch (err) {
        console.log(err)
    }
}