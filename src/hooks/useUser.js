// Import dependencies
import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getUser } from 'redux/userDuck'
import { updateDataService } from 'services/updateData'


// Hook
export default () => {

    // Init redux hooks
    const dispatch = useDispatch()

    // Get user
    useEffect(() => {
        dispatch(getUser())
    }, [])
    // Save user in a variable
    const user = useSelector(store => store.user.user)

    // Update data
    const updateData = async (values, userid) => {
        const res = await updateDataService(values, userid)

        // Validate
        return res
    }

    return {
        user,
        updateData
    }
}