// Import dependencies
import styled from '@emotion/styled'
import { Form, Field, ErrorMessage } from 'formik'

// Create Styles

// Form Container 
export const FormContainer = styled(Form)`
    width: 95%;
    margin: 0 auto;
`

// Form Group
export const FormGroup = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-top: 18px;
`

// Form Label
export const FormLabel = styled.label`
    color: var(--sidebar-h3-color);
    font-size: 1.2em;
`

// Form Input
const ifArticle = props => props.article ? `width: 55%;` : null
const ifSingle = props => props.single ? 'width: 100%' : null

export const FormInput = styled(Field)`
    border: none;
    border-bottom: 1px solid var(--sidebar-h3-color);
    padding: 10px 2px;
    outline: none;
    color: var(--sidebar-h3-color);
    text-align: left;
    font-size: 1.1em;

    ${ifArticle}
    ${ifSingle}
`

// Form Button
export const FormButton = styled.button`
    color: var(--info-color);
    border: none;
    background-color: transparent;
    font-size: 1.2em;
    padding: 30px 0;
    display: block;
    cursor: pointer;
`

// Form Error
export const FormError = styled(ErrorMessage)`
    color: var(--error-color) !important;
    font-size: .9em;
    margin: 10px 10px 0 10px;
`

// Form Columns
export const FormColumns = styled.div`
    display: grid;
    grid-template-columns: 50% 50%;

    & div input {
        width: 90%;
    }
`