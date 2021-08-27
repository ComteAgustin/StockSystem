// Import dependencies
import styled from '@emotion/styled'
import {Link} from 'wouter'
import {Field} from 'formik' 

// Styles 

// Signin H2
export const SinginH2 = styled.h2`
    font-size: 2em;
    color: var(--info-color);
`

// Signin Container
export const SigninContainer = styled.div`
    background-color: var(--font-color);
    width: 25vw;
    color: black;
    margin: 10vh auto 0 auto;
`

// Singin H3
export const SigninH3 = styled.h3`
    color: inherit;
    padding: 20px 0;
    font-size: 1.5em;
`

// Singin Input
export const SigninInput = styled(Field)`
    border: none;
    border-radius: 6px;
    background-color: #ececec;
    padding: 15px;
    text-align: left;
    width: 100%;
    color: var(--dark-color);
    margin-bottom: 10px;
`

// Signin Btn
export const SigninBtn = styled.button`
    border: 1px solid var(--info-color);
    border-radius: 10px;
    padding: 10px;
    color: var(--dark-color);
    cursor: pointer;
    background-color: var(--background-color);
    margin: 10px 0 10px 0;
`

// Singin Register
export const SigninRegister = styled(Link)`
    text-align: right;
    color: var(--info-color);
    padding: 0 0 0 10px;
    text-decoration: underline;
`
