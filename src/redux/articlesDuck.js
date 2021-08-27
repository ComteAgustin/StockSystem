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
const DeleteArticle = '@articles/delete'

// Reducer 
export const articlesReducer = (state = initialState, action) => {
    switch(action.type){
        case CreateArticle:
            return {...state}
        case GetArticles:
            return {...state, articles: action.payload} 
        case DeleteArticle: 
            state.articles = state.articles.filter(i => i._id !== action.payload)
            return state
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

// Delete Article
export const deleteArticle = id => async (dispatch, getState) => {
    try {
        await axios.delete(`${config.API_URL}/api/articles/${id}`)
        dispatch({
            type: DeleteArticle,
            payload: id
        })
    } catch (err) {
        console.log(err)
    }
}