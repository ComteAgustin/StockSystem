// Import dependencies
import React, { useEffect, useState } from 'react'
import { Formik } from 'formik'
import { toast } from 'react-toastify'
import { useSelector, useDispatch } from 'react-redux'
import { getArticles } from 'redux/articlesDuck'
import { createCart, clearCart, deleteCart } from 'redux/cartDuck'
import { createSale, createTotalSales } from 'redux/salesDuck'
import SelectInput from 'components/selectInput'
import { Toastify } from 'components/toast'
import useCart from 'hooks/useCart'
import { REGEX } from 'vars'
// Import components
import Cards from '../../components/cards-container'
import { Cashier, CashierP, CashierUl, CashierLi, SummaryIcon } from 'components/cashier/styles'
import {
    Section,
    SectionH3,
    SectionH3Span
} from 'styles/formCrudStyles'


// Cart Components
import {
    CashierContainer,
    CashierH3,
    SummaryContainer
} from 'components/cashier/styles'
import { Container } from 'styles'

// Sell Form components
import {
    FormContainer,
    FormButton,
    FormError,
    FormInput,
    FormGroup,
    FormLabel,
    FormColumns
} from 'styles/formStyles'

// Component
const Home = () => {

    const [totalAmount, setTotalAmount] = useState(0)

    // Init Redux hook
    const dispatch = useDispatch()

    // Get articles from redux
    useEffect(() => {
        dispatch(getArticles())
    }, [dispatch])

    const articles = useSelector(store => store.articles)

    // Cart
    const { cart } = useCart()

    // Validate form
    const validate = values => {
        const errors = {}

        let article = articles.articles.find(i => i.name === values.article)
        if (article.stock === 0) {
            errors.quantity = 'No hay stock'
        }

        if(values.quantity > article.stock) {
            errors.quantity = `El stock es de: ${article.stock} `
        }

        if (!REGEX.numbers.test(values.quantity)) {
            errors.quantity = 'Debes ingresar un numero'
        }

        if (!values.quantity < 0) {
            errors.quantity = 'No se pueden ingresar numeros negativos'
        }

        if (!REGEX.numbers.test(values.amount)) {
            errors.amount = 'Debes ingresar un numero'
        }

        if (values.amount < 0) {
            errors.amount = 'No se pueden ingresar numeros negativos'
        }

        return errors
    }

    // Initial Values
    const initialValues = {
        article: String,
        quantity: Number,
        amount: Number
    }

    // Handle Sell
    const handleSell = () => {
        for (let i = 0; i < cart.length; i++) {
            dispatch(createSale(cart[i]))
            console.log(cart[i])
        }
        toast.success("venta realizada")

        setTimeout(() => {
            dispatch(clearCart())
            setTotalAmount(0)

            for (let i = 0; i < cart.length; i++) {
                dispatch(createTotalSales(cart[i].amount))
            }
        }, 3000)

    }

    return (
        <Section>
            <Toastify />
            <SectionH3>
                Dashboard
                <SectionH3Span>
                    Panel de control
                </SectionH3Span>
            </SectionH3>
            <Cards />

            <Cashier>

                {/* SellForm */}

                <CashierContainer>
                    <Container>

                        <CashierH3>Cargar Venta</CashierH3>

                        <Formik
                            initialValues={initialValues}
                            validate={validate}
                            onSubmit={({ article = String, quantity, amount }) => {
                                dispatch(createCart(article, quantity, amount))
                                setTotalAmount(totalAmount + amount)
                            }}
                        >
                            {
                                ({ article, quantity, amount }) => (
                                    <FormContainer>
                                        <FormGroup>
                                            <FormLabel for="article">Articulo</FormLabel>
                                            <SelectInput
                                                single
                                                name="article"
                                                value={article}
                                                items={articles.articles}
                                            />
                                            <FormError name="article" component="span" />
                                        </FormGroup>
                                        <FormColumns>
                                            <FormGroup>
                                                <FormLabel for="quantity">Cantidad</FormLabel>
                                                <FormInput
                                                    type="number"
                                                    name="quantity"
                                                    value={quantity}
                                                />
                                                <FormError name="quantity" component="span" />
                                            </FormGroup>
                                            <FormGroup>
                                                <FormLabel for="amount">Precio</FormLabel>
                                                <FormInput
                                                    type="number"
                                                    name="amount"
                                                    value={amount}
                                                />
                                                <FormError name="amount" component="span" />
                                            </FormGroup>
                                        </FormColumns>

                                        <FormButton type="submit">Cargar</FormButton>
                                    </FormContainer>
                                )
                            }
                        </Formik>
                    </Container>
                </CashierContainer>

                {/* Cart */}
                <CashierContainer>
                    <Container>
                        <CashierH3>Realizar Venta</CashierH3>
                        <CashierP>Aqui vera todos los articulos</CashierP>

                        <CashierUl>
                            {
                                cart.map(item => <CashierLi key={item.article}>
                                    <p>{item.article} | <small> {item.quantity}</small></p>
                                    <div>
                                        <span>
                                            ${item.amount}
                                        </span>
                                        <SummaryIcon onClick={() => {
                                            for (var i = 0; i <= cart.length; i++) {
                                                if (cart[i].name == item.name) {
                                                    dispatch(deleteCart(cart[i].id))
                                                    setTotalAmount(totalAmount - cart[i].amount)
                                                    break
                                                }
                                            }
                                        }}>
                                            -
                                        </SummaryIcon>
                                    </div>
                                </CashierLi>)
                            }
                        </CashierUl>

                        <SummaryContainer>
                            <p>Total a pagar:</p>
                            <span>
                                $
                                {
                                    totalAmount
                                }
                            </span>
                        </SummaryContainer>

                        <FormButton onClick={handleSell}>Realizar Venta</FormButton>
                    </Container>
                </CashierContainer>

            </Cashier>
        </Section>
    )
}

// Export 
export default Home
