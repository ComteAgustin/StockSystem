// Import dependencies
import styled from '@emotion/styled'

// Styles

// Cashier
export const Cashier = styled.div` 
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    margin-top: 50px;

    & p, & span {
        color: var(--dark-color);
        text-align: left;
    }
`

// Cashier Container
export const CashierContainer = styled.div`
    width: 49.25%;
    background-color: #fff;

    & form > div:first-child > input {
        width: 95%;
    }
`

// Cashier p
export const CashierP = styled.p`
    margin: 10px 0 30px 0;
`

// Cashier H3
export const CashierH3 = styled.h3`
    color: var(--dark-color);
    font-size: 2em;
    font-weight: 300;
    text-align: left;
    margin: 20px 0 0 0;
`

// Cashier Ul
export const CashierUl = styled.ul`
    display: flex;
    flex-direction: column;
`

// Cashier Li
export const CashierLi = styled.li`
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    margin: 0 0 10px 0;

    & small {
        color: var(--sidebar-h3-color);
    }

    & span {
        background-color: var(--reports-icon-color);
        color: var(--dark-color);
        padding: 2px 6px;
    }

`

// Summary Container
export const SummaryContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-top: 20px;

    & span {
        background-color: var(--stock-icon-color);
        color: var(--font-color);
        padding: 2px 6px;
    }
`   

// Summary Icon
export const SummaryIcon = styled.i`
    color: var(--error-color);
    font-size: 1.5em;
    margin-left: 10px;
    cursor: pointer;
`