// Import dependencies
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getPurchases } from 'redux/purchasesDuck'
// Hook
export default () => {

    const dispatch = useDispatch()

    // Get purchases
    useEffect(() => {
        dispatch(getPurchases())
    }, [])
    const purchases = useSelector(store => store.purchases.purchases)

    return {
        purchases
    }
}