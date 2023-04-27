import { Formik, Field, Form, ErrorMessage} from 'formik'
import * as Yup from 'yup'
import '../styles/styles.css'
import { MyCheckbox, MySelect, MyTextInput } from '../components';

// interface FormValues {
//     firstName: string;
//     lastName: string;
//     email: string;
// }

export const FormikAbstraction = () => {

  return (
    <div>
        <h1>Formik Abstraction</h1>

        <Formik
            initialValues={{
                firstName: '',
                lastName:'',
                email:'',
                terms: false,
                jobType:'',
            }}
            onSubmit={ (values) =>{
                console.log(values)
            }}
            validationSchema={
                Yup.object({
                    firstName: Yup.string()
                                    .max(15, 'Debe de tener almenos 15 caracteres o menos')
                                    .required('Requerido'),
                    lastName: Yup.string()
                        .max(15, 'Debe de tener almenos 15 caracteres o menos')
                        .required('Requerido'),
                    email: Yup.string()
                                .email('Debe ser un correo Valido')
                                .required('Requerido'),
                    terms: Yup.boolean()
                                .oneOf([true], 'Debe de aceptar las condiciones'),
                    jobtype: Yup.string()
                                .notOneOf(['it-jr'], 'Esta opcion no es permitida.')
                                .required('Requerido'), 
                })
            }

        >

{
    (formik) => (
        <Form>
            <MyTextInput 
                label="First Name"
                name="firstName"
                placeholder="Nombres"
            />
            <MyTextInput 
                label="Last Name"
                name="lastName"
                placeholder="Apellidos"
            />
            <MyTextInput 
                label="Email Address"
                name="email"
                placeholder="Correo electronico"
                type="email"
            />

            <MySelect label='Job Type' name="jobtype">
                <option value="">Pick something</option>
                <option value="developer">Developer</option>
                <option value="designer">Designer</option>
                <option value="it-senior">IT Senior</option>
                <option value="it-jr">IT Jr.</option>
            </MySelect>

            <MyCheckbox label="Terms" name="terms" />

        <button type='submit'>Submit</button>

    </Form>  
    )    
}

        </Formik>

  
    </div>
  )
}
