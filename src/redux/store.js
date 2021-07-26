// Import dependencies
import {createStore, combineReducers, compose, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'

// Import Reducers
import {articlesReducer} from './articlesDuck'

// Combine Reducers
const rootReducer = combineReducers({
    articles: articlesReducer
})

// Config for a devtools
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// Create Store
const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)))

// Export 
export default store