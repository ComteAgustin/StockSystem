// Import dependencies
import styled from "@emotion/styled"
import { Container } from 'styles/index'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

// Styles

// Table section
export const TableSection = styled(Container)`
    margin: 12vh 0 0 22vw;
`

// Table H2
export const TableH2 = styled.h2`
    text-align: left;
    color: var(--dark-color);
    margin-bottom: 20px;
    font-weight: 200;
`

// Table Container 
export const TableContainer = styled.div`
    background-color: var(--font-color);
    padding: 20px 20px 0 20px;
`

// Table
export const Table = styled.table`
    width: 100%;
`

// Table Tr

// If is header
const ifHeader = props => props.header ? `font-weight: bold; background-color: #fff` : null
const ifProviders = props => props.providers ? `grid-template-columns: 20% 20% 20% 20% 20%;` : null

export const TableTr = styled.tr`
    display: grid;
    grid-template-columns: 25% 25% 25% 25%;
    width: 100%;

    ${ifProviders}

    & > td {
        ${ifHeader}
    }
`

// Table Td
export const TableTd = styled.td`
    color: var(--dark-color);
    padding: 8px;
    background-color: #f2f2f2;
    
`

// Table Icon
// Color props
const ifGreen = props => props.green ? `--stock-icon-color` : null
const ifRed = props => props.red ? `--providers-color` : null

export const TableIcon = styled(FontAwesomeIcon)`
    cursor: pointer;
    margin-right: 5px;

    & path {
        fill: var(${ifGreen}${ifRed})
    }
`