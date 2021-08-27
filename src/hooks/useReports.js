// Import dependencies

// Hook
export default () => {

    // Function for sort all the values in a array
    const sortMonthlyValues = values => {
        let sortedArrays = []

        values.forEach(value => {
            const month = parseInt(value.createdAt.substring(5, 7).replace('0', '')) - 1
            sortedArrays[month]
                ? sortedArrays[month] = parseInt(sortedArrays[month] + value.amount)
                : sortedArrays[month] = []
        })

        return sortedArrays
    }

    // Function for filter values in the currently month
    const monthValues = values => {
        // Init a var that will have the values
        let monthlyValues = []

        // Create a today data
        const date = new Date()
        if (values.length !== 0) {
            for (let i = 0; i < values.length; i++) {
                // Destructuring a month of a sale
                let m = parseInt(values[i].createdAt.substring(5, 7).replace('0', '')) - 1

                if (m == date.getMonth()) monthlyValues = [...monthlyValues, values[i]]
            }
        }
        // Return
        return monthlyValues
    }

    // Function for get all spent money
    const spentMoney = monthlyMoney => {
        let expenses = 0

        for (let i = 0; i < monthlyMoney.length; i++) {
            let x = monthlyMoney[i].amount
            expenses = expenses + x
        }

        return expenses
    }


    return {
        sortMonthlyValues,
        spentMoney,
        monthValues
    }
}

// Ordenar en arrays los datos, y agruparlos por mes