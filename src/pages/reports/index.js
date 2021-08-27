// Import dependencies 
import React from 'react'
import useReports from 'hooks/useReports'
import useSales from 'hooks/useSales'
import usePurchases from 'hooks/usePurchases'
import {faPoll} from '@fortawesome/free-solid-svg-icons'
// Import components
import {Insight} from 'components/Insight'
import {Icon} from 'components/sidebar/styles'
import CardContainer from 'components/cards-container/ReportsCards'
import {
    Section,
    SectionH3
} from 'styles/formCrudStyles'
import {InsightContainer} from './styles'

// Component
const Reports = () => {

    const {sortMonthlyValues} = useReports()
    const {sales} = useSales()
    const {purchases} = usePurchases()

    const sortedSales = sortMonthlyValues(sales)
    const sortedPurchases = sortMonthlyValues(purchases)

    return(
        <Section>
            <SectionH3>
                Reportes
            </SectionH3>

            <CardContainer />

            <InsightContainer>
                <h3>
                    <Icon icon={faPoll} />
                    Ventas Realizadas ($)
                </h3>

                <Insight data={sortedSales}/>
            </InsightContainer>

            <InsightContainer>
                <h3>
                    <Icon icon={faPoll} />
                    Compras Realizadas ($)
                </h3>

                <Insight data={sortedPurchases} />
            </InsightContainer>

        </Section>
    )
}

// Export 
export default Reports
