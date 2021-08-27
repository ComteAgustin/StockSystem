// Import dependencies
import React, {useState, useEffect} from 'react'
import {faDollarSign, faBoxes, faTruck, faClone} from '@fortawesome/free-solid-svg-icons'
import {Link} from 'wouter'
import useProviders from 'hooks/useProviders'
import useStock from 'hooks/useStock'
import useReports from 'hooks/useReports'
import useSales from 'hooks/useSales'
import { useDispatch } from 'react-redux'
// Import styled component
import {
    FullCard,
    CardContainer,
    Card,
    P,
    StatusSpan,
    Icon,
} from './styles'
// Import css
import 'index.css'
import { getTotalSales } from 'redux/salesDuck'

// Component
const Cards = () => {
    
    const dispatch = useDispatch()

    const {sales, totalSales} = useSales()
    const {monthValues, spentMoney} = useReports()
    
    
    useEffect(() => {
        const monthlySales = monthValues(sales)
        dispatch(getTotalSales(spentMoney(monthlySales)))
    }, [sales])

    // Check if there are stock or not with stock hook function
    const {checkStock} = useStock()
    const statusStock = checkStock()

    // Get alls providers
    const {providers} = useProviders()

    // Return
    return(
        <CardContainer>
            <Card color="info">
                <div>
                    <StatusSpan>
                        {
                            totalSales
                        }
                    </StatusSpan>
                    <P>Ventas del mes</P>
                </div>                    
                <Icon color="info" icon={faDollarSign} />
            </Card>

            <FullCard color="stock">
                <Card>
                    <div>
                        <StatusSpan>
                            {
                                statusStock ? '+' : '-'
                            }
                        </StatusSpan>
                        <P>Compras/Stock</P>
                    </div>                    
                    <Icon color="stock" icon={faBoxes} />
                </Card>
                <div>
                    <p><Link to="/stocktable">Ver Stock</Link></p>
                </div>
            </FullCard>

            <FullCard color="providers">
                <Card>
                    <div>
                        <StatusSpan>
                            {providers.length}
                        </StatusSpan>
                        <P>Proveedores</P>
                    </div>                    
                    <Icon color="providers" icon={faTruck} />
                </Card>
                <div>
                    <p><Link to="/providerstable">Ver Proveedores</Link></p>
                </div>
            </FullCard>

            <FullCard color="reports">
                <Card>
                    <div>
                        <StatusSpan>Junio</StatusSpan>
                        <P>Reportes</P>
                    </div>                    
                    <Icon color="reports" icon={faClone} />
                </Card>
                <div>
                    <p><Link to="/reports">Mas Informacion</Link></p>
                </div>
            </FullCard>
        </CardContainer>
    )
}

// Export 
export default Cards