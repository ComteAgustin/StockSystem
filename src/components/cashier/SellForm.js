// Import dependencies
import React, {useEffect} from 'react'
import {Formik} from 'formik'
import {useSelector, useDispatch} from 'react-redux'
import {getArticles} from 'redux/articlesDuck'
import useSellCart from 'hooks/useSellCart'
// Import components
import {
    CashierContainer,
    CashierH3
} from './styles'
import {Container} from 'styles'
import {
    FormContainer,
    FormLabel,
    FormButton,
    FormInput,
    FormGroup,
    FormColumns
} from 'styles/formStyles' 
import SelectInput from 'components/selectInput'

// Initial values for formik
const initialValues = {
    article: String,
    quantity: Number,
    amount: Number
}

// Component
const SellForm = () => {

    const {addToCart} = useSellCart()

    // Init Redux hook
    const dispatch = useDispatch()

    // Get articles from redux
    useEffect(() => {
        dispatch(getArticles())
    }, [dispatch])

    const articles = useSelector(store => store.articles)

    // Validate form
    const validate = values => {
        const errors = {}
        return errors
    }

    // Return JSX
    return(
        <CashierContainer>
            <Container>
                
                <CashierH3>Cargar Venta</CashierH3>

                <Formik
                initialValues={initialValues}
                validate={validate}
                onSubmit={({article = String, quantity, amount}) => {
                    const values = {article, quantity, amount}

                    addToCart(values)
                }}
                >
                    {
                        ({article, quantity, amount}) => (
                            <FormContainer>
                                <FormGroup>
                                    <FormLabel for="article">Articulo</FormLabel>
                                    <SelectInput 
                                        single
                                        name="article"
                                        value={article}
                                        items={articles.articles}
                                    />
                                </FormGroup>
                                <FormColumns>
                                    <FormGroup>
                                        <FormLabel for="quantity">Cantidad</FormLabel>
                                        <FormInput
                                            name="quantity"
                                            value={quantity} 
                                        />    
                                    </FormGroup>
                                    <FormGroup>
                                        <FormLabel for="amount">Precio</FormLabel>
                                        <FormInput 
                                            name="amount"
                                            value={amount} 
                                        />
                                    </FormGroup>
                                </FormColumns>

                                <FormButton type="submit">Cargar</FormButton>
                            </FormContainer>
                        )
                    }
                </Formik>
            </Container>
        </CashierContainer>
    )
}

// Export 
export default SellForm