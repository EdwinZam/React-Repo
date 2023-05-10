import '../styles/styles.css'
import { useFormik } from 'formik';
import * as Yup from 'yup';

export const RegisterFormikPage = () => {

    const { handleSubmit, errors, touched, getFieldProps , resetForm } = useFormik({
    initialValues:{
        name: '',
        email: '',
        password1: '',
        password2: '',
    },onSubmit: (values) =>{
        console.log(values)
    },
    validationSchema: Yup.object({
        name: Yup.string()
                .min(2,'El nombre debe tener 3 caracteres o más')
                .max(15, 'Debe de tener almenos 15 caracteres o menos')
                .required('Requerido'),
        email: Yup.string()
                .email('Debe ser un correo Valido')
                .required('Requerido'),
        password1: Yup.string()
                    .min(6, 'Minimo 6 letras')
                    .required('Requerido'),
        password2: Yup.string()
                    .oneOf([Yup.ref('password1')], 'Las contraseñas no son iguales')
                    .required('Requerido')
    })

    });
    //const {name, email, password1, password2} = formData;
    // const onSubmit =(event: FormEvent<HTMLFormElement>)=>{
    //     event.preventDefault();
    //     console.log(formData)
    // }

  return (
    <div>
        <h1>Register Formik Page</h1>
        <form noValidate onSubmit={handleSubmit}>
            <input 
                type='text'
                {...getFieldProps('name')}
                placeholder='Nombre'
            />
            { touched.name && errors.name && <span>{errors.name}</span>}
            <input 
                type='email'
                {...getFieldProps('email')}
                placeholder='Email'
            />
            { touched.email && errors.email && <span>{errors.email}</span>}
            <input 
                type='password'
                {...getFieldProps('password1')}
                placeholder='password1'
            />
            { touched.password1 && errors.password1 && <span>{errors.password1}</span>}
            <input 
                type='password'
                {...getFieldProps('password2')}
                placeholder='password2'
            />
            { touched.password2 && errors.password2 && <span>{errors.password2}</span>}
            
            <button type='submit'> Create </button>
            <button type='button' onClick={(e)=>resetForm()}> Reset Form </button>
        </form>
    </div>
  )
}
