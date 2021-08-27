// Import dependencies
import React, {useEffect, useState} from 'react' 
import useSales from 'hooks/useSales'
import useReports from 'hooks/useReports'
import usePurchases from 'hooks/usePurchases'
import {faCaretSquareUp, faCaretSquareDown, faPoll, faLandmark} from '@fortawesome/free-solid-svg-icons'
// Import components
import {
    CardContainer, 
    Card,
    StatusSpan,
    P,
    Icon    
} from './styles'

// Component
const ReportsCards = () => {

    // Get Monthly Sales
    const {sales} = useSales()
    const {purchases} = usePurchases()
    const {monthValues, spentMoney} = useReports()
    
    const [incomes, setIncomes] = useState(0)
    const [expenses, setExpenses] = useState(0)

    useEffect(() => {
        const monthlySales = monthValues(sales)
        setIncomes(spentMoney(monthlySales))
        const monthlyPurchases = monthValues(purchases)
        setExpenses(spentMoney(monthlyPurchases))
    }, [sales, purchases])

    return(
        <CardContainer>
            <Card color="stock">
                <div>
                    <StatusSpan>
                        {
                            incomes
                        }
                    </StatusSpan>
                    <P>Ganancias del mes</P>
                </div>
                <Icon icon={faCaretSquareUp} color="stock" />
            </Card>

            <Card color="reports">
                <div>
                    <StatusSpan>
                        {
                            expenses
                        }
                    </StatusSpan>
                    <P>Gastos del mes</P>
                </div>
                <Icon icon={faCaretSquareDown} color="reports" />
            </Card>

            <Card color="info">
                <div>
                    <StatusSpan>
                        {
                            incomes - expenses
                        }
                    </StatusSpan>
                    <P>Balance</P>
                </div>
                <Icon icon={faPoll} color="info" />
            </Card>

            <Card color="providers">
                <div>
                    <StatusSpan>AFIP</StatusSpan>
                    <P>proximamente</P>
                </div>
                <Icon icon={faLandmark} color="providers" />
            </Card>
        </CardContainer>
    )
} 

// Export 
export default ReportsCards