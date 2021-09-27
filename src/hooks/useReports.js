// Hook
export default () => {

    // Function for sort all the values in a array
    const sortMonthlyValues = values => {

        let sortedArrays = []

        values.forEach(value => {
            let month = parseInt(value.createdAt.substring(5, 7).replace('0', '')) - 1
            let age = value.createdAt.substring(0, 4)

            console.log(age)

            console.log(Boolean(sortedArrays.find(i => i.label == age)))

            if (sortedArrays.find(i => i.label == age)) {
                let index = sortedArrays.findIndex(i => i.label == age)
                sortedArrays[index].data[month] = sortedArrays[index].data[month] + value.amount
            } else {
                sortedArrays.push({
                    label: age,
                    data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
                })
                let index = sortedArrays.findIndex(i => i.label == age)
                sortedArrays[index].data[month] = sortedArrays[index].data[month] + value.amount
            }
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


/*

    Entries:
    [
        {
            _id: "613fe6893dd6e900166d87b6",
            amount: 200,
            articleID: "612ed5d44107a200160d3485",
            createdAt: "2021-09-14T00:02:17.502Z",
            quantity: 1,
            updatedAt: "2021-09-14T00:02:17.502Z",
        },{
            _id: "613fe6893dd6e900166d87b6",
            amount: 200,
            articleID: "612ed5d44107a200160d3485",
            createdAt: "2021-09-14T00:02:17.502Z",
            quantity: 1,
            updatedAt: "2021-09-14T00:02:17.502Z",
        },{
            _id: "613fe6893dd6e900166d87b6",
            amount: 200,
            articleID: "612ed5d44107a200160d3485",
            createdAt: "2022-09-14T00:02:17.502Z",
            quantity: 1,
            updatedAt: "2022-09-14T00:02:17.502Z",
        },{
            _id: "613fe6893dd6e900166d87b6",
            amount: 200,
            articleID: "612ed5d44107a200160d3485",
            createdAt: "2022-09-14T00:02:17.502Z",
            quantity: 1,
            updatedAt: "2022-09-14T00:02:17.502Z",
        }
    ]


    Output:
    [
        {
            label = age,
            data = totalAmount
        }, {
            label,
            data
        }, {
            label,
            data
        }
    ]

*/