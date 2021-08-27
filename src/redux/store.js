// Import dependencies
import { createStore, combineReducers, compose, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

// Import Reducers
import { articlesReducer } from './articlesDuck'
import { providerReducer } from './providersDuck'
import { stockReducer } from './stockDuck'
import { salesReducer } from './salesDuck'
import { userReducer } from './userDuck'
import { purchasesReducer } from './purchasesDuck'
import { cartReducer } from './cartDuck'

// Combine Reducers
const rootReducer = combineReducers({
    articles: articlesReducer,
    providers: providerReducer,
    stock: stockReducer,
    sales: salesReducer,
    user: userReducer,
    purchases: purchasesReducer,
    cart: cartReducer
})

// Config for a devtools
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// Create Store
const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)))

// Export 
export default store