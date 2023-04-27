import { ChangeEvent, useState } from "react";

export const useForm =<T>( initState: T)=>{
    
    const [formData, setFormData] = useState(initState)

    //const { name, email, password1, password2 } = registerData;

    const onChange =(event: ChangeEvent<HTMLInputElement>)=>{
        //console.log(event.target.value);
        setFormData(prev => ({
            ...prev, 
            [event.target.name]: event.target.value
        }))
    }

    const resetForm =()=>{
        setFormData({...initState})
    }

    const isValidEmail = ( email: string ) => {
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    }


    return {
        ...formData,
        //Properties
        formData,
        //Methos
        onChange,
        resetForm,
        isValidEmail
    }
}