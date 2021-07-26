// Import dependencies
import React from 'react'
import {Formik, Form, Field, ErrorMessage} from 'formik'

// Initial values for formik
const initialValues = {
    article: String,
    quantity: Number,
    amount: Number,
    receipt: String,
    receiptNumber: Number,
    provider: String
}

// Component
const StockForm = () => {
    
    // Validate form
    const validate = (values) => {
        const errors = {}

        return errors
    }
 
    return(
        <Formik
        initialValues={initialValues}
        validate={validate}
        onSubmit={() => {}}
        >
            {
                ({article, quantity, amount, receipt, receiptNumber, provider}) => (
                <Form className="form container">
                    <div class="form-group single">
                        <label for="article" className="label-form">Articulo</label>
                        <Field type="text" name="article" className="input-form" />
                        <ErrorMessage className="error" name="article" component="span" />
                    </div>
                    <div className="form-columns">
                        <div className="form-group">
                            <label for="quantity" class="label-form">Cantidad</label>
                            <Field type="text" name="quantity" className="input-form" />
                            <ErrorMessage className="error" name="quantity" component="span" />
                        </div>

                        <div className="form-group">
                            <label for="amount" className="label-form">Precio</label>
                            <Field type="search" name="amount" className="input-form" />
                            <ErrorMessage className="error" name="amount" component="span" />
                        </div>

                        <div className="form-group">
                            <label for="receipt" className="label-form">Recibo</label>
                            <Field type="search" name="receipt" className="input-form" />
                            <ErrorMessage className="error" name="receipt" component="span" />
                        </div>

                        <div className="form-group">
                            <label for="receiptNumber" className="label-form">Numero de recibo</label>
                            <Field type="search" name="receiptNumber" className="input-form" />
                            <ErrorMessage className="error" name="receipt" component="span" />
                        </div>

                        <div className="form-group">
                            <label for="provider" className="label-form">Proveedor</label>
                            <Field type="search" name="provider" className="input-form" />
                            <ErrorMessage className="error" name="provider" component="span" />
                        </div>

                    </div>
                    <button className="b-form">Guardar</button>
                </Form>
            )}
        </Formik>
    )
}

// Export 
export default StockForm

