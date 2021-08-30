// Import dependencies
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getProviders, deleteProvider } from 'redux/providersDuck'

// Hooks
export default () => {

    // Init redux hook
    const dispatch = useDispatch()

    // Get stock from api
    useEffect(() => {
        dispatch(getProviders())
    }, [])

    // Saving stock in a const
    const providers = useSelector(store => store.providers.providers)

    // Function for delete provider
    const delProvider = id => {
        dispatch(deleteProvider(id))
    }

    // Return
    return {
        providers,
        delProvider
    }
}