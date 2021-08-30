import { getArticles } from "./articlesDuck"

// State
const initialState = {
    cart: []
}

// Types
const CreateCart = '@cart/create'
const GetCart = '@cart/get'
const DeleteCart = '@cart/delete'
const ClearCart = '@cart/clear'


// Reducers
export const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case CreateCart:
            state.cart.push(action.payload)
            console.log(state)
            return state
        case GetCart:
            return { ...state }
        case DeleteCart:
            state.cart = state.cart.filter(i => i.id !== action.payload)
            return state
        case ClearCart:
            console.log(state)
            state.cart = []
            return state
        default:
            return state
    }
}

// Actions

// Create Cart
export const createCart = (article, quantity, amount) => dispatch => {

    const newArticle = {
        id: Number,
        article,
        quantity,
        amount
    }

    newArticle.id = Math.floor(Math.random() * 9000)

    dispatch({
        type: CreateCart,
        payload: newArticle
    })
}

// Get Cart
export const getCart = () => dispatch => {
    dispatch({
        type: getArticles
    })
}

// Delete cart
export const deleteCart = id => dispatch => {
    dispatch({
        type: DeleteCart,
        payload: id
    })
}

// Clear cart
export const clearCart = () => dispatch => {
    dispatch({
        type: ClearCart
    })
}