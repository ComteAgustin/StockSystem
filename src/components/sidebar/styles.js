// Import dependencies
import styled from '@emotion/styled'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {Link} from 'wouter'
import {Container} from 'styles'

// Create Styles

// Sidebar Container
export const SidebarContainer = styled.div`
    background-color: var(--background-sidebar-color);
    width: 20vw;
    height: 90vh;
    margin: 0 auto 0 0;
    text-align: left;

    position: fixed;
    bottom: 0;
`

// Siderbar H3
export const SidebarH3 = styled.h3`
    color: var(--sidebar-h3-color);
    padding: 14px 0 10px 0;
    text-align: left;
`

// Navigation ul 
export const NavigationUl = styled.ul`
    display: flex;
    flex-direction: column;
`

// Navigation Li
const dropdown = props => props.dropdown 
    ? `display: flex;
        flex-direction: row;
        justify-content: space-between;
        
        :hover {
            cursor: pointer;
        }
    ` : null

export const NavigationLi = styled.li`
    text-align: left;
    padding: 10px 0;

    ${dropdown}
`

// Icon 
const arrow = props => props.arrow ? `transform: rotate(-90deg);` : null

export const Icon = styled(FontAwesomeIcon)`
    margin-right: 10px;
    font-size: 1.2em;

    ${arrow}
`

// Dropdown Menu
export const DropdownMenu = styled.div`
    background-color: #193044;
    padding: 15px 0 0 0;
    width: 20vw;
    margin-left: -0.5vw;
`

// ContainerUl
export const ContainerUl = Container.withComponent('ul')

// Li 
export const Li = styled.li`
    text-align: left;
    margin-bottom: 20px;

    :hover {
        transform: scale(1.1, 1.1);
        margin-left: .9vw;
    }

    &:hover a {
        color: var(--font-color);
    }

    &:hover a svg path {
        fill: var(--font-color);
    } 
`

// DropdownLink
export const DropdownLink = styled(Link)`
    color: var(--sidebar-dropdown-color);
    transition: .1s;
` 
// Dropdown Icon
export const DropdownIcon = styled(FontAwesomeIcon)`
    margin-right: 10px;
    transition: .1s;

    & path {
        fill: var(--sidebar-dropdown-color);
    }
`