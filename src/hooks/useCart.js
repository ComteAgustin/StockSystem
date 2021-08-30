// Import dependencies
import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getCart } from 'redux/cartDuck'

// Hook
export default () => {

    // Init hook for dispatch in redux
    const dispatch = useDispatch()

    // Get Cart
    useEffect(() => {
        dispatch(getCart())
    }, [])

    // Save cart in a variable
    const cart = useSelector(store => store.cart.cart)

    // Return
    return {
        cart
    }
}