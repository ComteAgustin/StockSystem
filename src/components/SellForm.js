// Import dependencies
import React from 'react'
import {Formik, Form, Field, ErrorMessagge} from 'formik'

// Initial values for formik
const initialValues = {
    article: String,
    quantity: Number,
    amount: Number
}

// Component
const SellForm = () => {

    // Validate form
    const validate = values => {
        const errors = {}
        return errors
    }

    // Return JSX
    return(
        <div className="sell">
            <div className="container">
                
                <h3>Cargar Venta</h3>

                <Formik
                initialValues={initialValues}
                validate={validate}
                onSubmit={() => {
                    console.log('submited')
                }}
                >
                    {
                        () => (
                            <Form>
                                <div className="form-group">
                                    <label for="article" className="label-form">Articulo</label>
                                    <Field 
                                        name="article"    
                                        className="input-form" 
                                    />
                                </div>
                                <div className="form-columns">
                                    <div className="form-group">
                                        <label className="label-form">Cantidad</label>
                                        <Field
                                            name="quantity" 
                                            className="input-form" 
                                        />    
                                    </div>
                                    <div className="form-group">
                                        <label className="label-form">Precio</label>
                                        <Field 
                                            name="amount"
                                            className="input-form" 
                                        />
                                    </div>
                                </div>

                                <button className="b-form">Cargar</button>
                            </Form>
                        )
                    }
                </Formik>
            </div>
        </div>
    )
}

// Export 
export default SellForm