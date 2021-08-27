// Import dependencies
import styled from '@emotion/styled'
import {FormInput} from 'styles/formStyles'

// Styles

// Select
const ifSingle = props => props.single ? `width: 100%` : null
const ifColumn = props => props.column ? `width: 90%` : null
 
export const Select = styled(FormInput)`
    width: 55%;
    cursor: pointer;

    ${ifSingle}
    ${ifColumn}
`

// Option
export const Option = styled.option`
    padding: 5px;
`
