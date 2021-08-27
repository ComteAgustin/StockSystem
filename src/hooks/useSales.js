// Import dependencies
import {useEffect, useState} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {getSales, getTotalSales} from 'redux/salesDuck'

// Hook
export default () => {

    // Init redux hook for dispatch
    const dispatch = useDispatch()

    // Get Sales
    useEffect(() => {
        dispatch(getSales())
        dispatch(getTotalSales())
    }, [])

    const totalSales = useSelector(store => store.sales.totalSales)
    const sales = useSelector(store => store.sales.sales) 

    // Return 
    return {
        sales,        
        totalSales
    }
} 