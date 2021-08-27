// Import dependencies
import React from 'react'
import {Formik} from 'formik'
import useUser from 'hooks/useUser'
import useLogin from 'hooks/useLogin'
// Import components
import {
    Section,
    SectionBody,
    SectionH3,
    SectionBodyH2
} from 'styles/formCrudStyles'
import {
    FormButton,
    FormContainer, FormError, FormGroup, FormInput, FormLabel
} from 'styles/formStyles'

// Component
const Config = () => {

    const {user, updateData} = useUser()
    const {logout} = useLogin()

    // Initial Values for formik
    const initialValues = {
        username: String,
        newPassword: String,
        password: String
    }

    // Validate function for validate form
    const validate = values => {
        let errors


        return errors
    }

    return (
        <Section>
            <SectionH3>
                Configuracion de usuario
            </SectionH3>
            <SectionBody>

                <SectionBodyH2>
                    Configuracion
                </SectionBodyH2>

                <Formik
                    initialValues={initialValues}
                    validate={validate}
                    onSubmit={values => {
                        updateData(values, user[0]._id)
                        logout()    
                    }}
                >
                    {
                        ({username, password, newPassword}) => (
                            <FormContainer>
                                <FormGroup>
                                    <FormLabel for="username">Cambiar nombre de usuario</FormLabel>
                                    <FormInput article name="username" value={username} autoFocus />
                                    <FormError name="username" component="span" />
                                </FormGroup>
                                <FormGroup>
                                    <FormLabel for="newPassword">Cambiar contraseña</FormLabel>
                                    <FormInput article name="newPassword" value={newPassword} />
                                    <FormError name="newPassword" component="span" />
                                </FormGroup>
                                <FormGroup>
                                    <FormLabel for="password">Contraseña actual para verificar autenticidad</FormLabel>
                                    <FormInput article name="password" value={password} />
                                    <FormError name="password" component="span" />
                                </FormGroup>

                                <FormButton>Modificar datos</FormButton>
                            </FormContainer>
                        )
                    }
                </Formik>

            </SectionBody>
        </Section>
    )
}

// Export 
export default Config