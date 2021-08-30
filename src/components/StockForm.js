// Import dependencies
import React, { useEffect } from 'react'
import { Formik } from 'formik'
import { useLocation } from 'wouter'
import { toast } from 'react-toastify'
import { REGEX } from 'vars'
import { useDispatch, useSelector } from 'react-redux'
import { createStock } from 'redux/stockDuck'
import { getArticles } from 'redux/articlesDuck'
import { getProviders } from 'redux/providersDuck'
// Import components
import SelectInput from 'components/selectInput'
import { Toastify } from './toast'
import {
    FormContainer,
    FormGroup,
    FormError,
    FormInput,
    FormLabel,
    FormButton,
    FormColumns
} from 'styles/formStyles'

// Initial values for formik
const initialValues = {
    article: String,
    quantity: Number,
    amount: Number,
    receipt: String,
    receiptNumber: Number,
    provider: String
}

// ReceiptType select array
const receiptType = [
    {
        name: "recibo"
    },
    {
        name: "factura"
    }
]

// Component
const StockForm = () => {

    // Init hook for navigate
    const [, navigate] = useLocation()

    // Init Redux dispatch hook
    const dispatch = useDispatch()

    // Update articles and providers for select inputs
    useEffect(() => {
        dispatch(getArticles())
        dispatch(getProviders())
    }, [dispatch])

    // Save in a var articles and providers
    const articles = useSelector(store => store.articles)
    const providers = useSelector(store => store.providers)

    // Validate form
    const validate = (values) => {
        const errors = {}

        if (!REGEX.numbers.test(values.amount)) {
            errors.amount = 'Ingresar precio'
        }

        if (!REGEX.numbers.test(values.receiptNumber)) {
            errors.receiptNumber = 'Solo se pueden ingresar numeros'
        }

        return errors
    }

    // Return
    return (
        <Formik
            initialValues={initialValues}
            validate={validate}
            onSubmit={values => {
                dispatch(createStock(values))
                toast.success("Stock registrado")

                setTimeout(() => {
                    navigate('/')
                }, 3000)
            }}
        >
            {
                ({ article, quantity, amount, receipt, receiptNumber, provider, handleChange }) => (
                    <FormContainer>
                        <FormGroup>
                            <Toastify />
                            <FormLabel for="article">Articulo</FormLabel>
                            <SelectInput single type="text" name="article" value={article} onChange={handleChange} items={articles.articles} />
                            <FormError name="article" component="span" />
                        </FormGroup>
                        <FormColumns>
                            <FormGroup>
                                <FormLabel for="quantity">Cantidad</FormLabel>
                                <FormInput type="number" name="quantity" value={quantity} />
                                <FormError name="quantity" component="span" />
                            </FormGroup>

                            <FormGroup>
                                <FormLabel for="amount">Precio Total</FormLabel>
                                <FormInput type="number" name="amount" value={amount} />
                                <FormError name="amount" component="span" />
                            </FormGroup>

                            <FormGroup>
                                <FormLabel for="receipt">Comprobante</FormLabel>
                                <SelectInput column type="text" name="receipt" value={receipt} onChange={handleChange} items={receiptType} />
                                <FormError name="receipt" component="span" />
                            </FormGroup>

                            <FormGroup>
                                <FormLabel for="receiptNumber">Numero de comprobante</FormLabel>
                                <FormInput type="number" name="receiptNumber" value={receiptNumber} />
                                <FormError name="receiptNumber" component="span" />
                            </FormGroup>

                            <FormGroup>
                                <FormLabel for="provider">Proveedor</FormLabel>
                                <SelectInput column type="text" name="provider" value={provider} onChange={handleChange} items={providers.providers} />
                                <FormError name="provider" component="span" />
                            </FormGroup>

                        </FormColumns>
                        <FormButton>Guardar</FormButton>
                    </FormContainer>
                )}
        </Formik>
    )
}

// Export 
export default StockForm

