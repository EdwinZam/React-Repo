import { useState, useEffect, useRef } from 'react';
import { InitialValues, Product, onChangeArgs } from '../interfaces/interfaces';

interface useProductArgs {
    product: Product;
    onChange?: (args:onChangeArgs)=>void;
    value?: number;
    initialValues?:InitialValues;
}

export const useProducts = ( { onChange, product, value = 0, initialValues }: useProductArgs ) => {

    const [counter, setCountert] = useState<number>(initialValues?.count || value );
   
    const isMounted = useRef(false);
   
    const increaseBy = (value:number)=>{

        let newValue = Math.max(counter + value, 0) 

        if(initialValues?.maxCount){
            newValue = Math.min( newValue, initialValues.maxCount )
        }

        setCountert(newValue);

        //setCountert(prev => Math.max(prev + value, 0))

        onChange && onChange({count: newValue, product });
    }

    const reset =()=>{
        setCountert(initialValues?.count || value)
    }    

    // useEffect(() => {
    //     isMounted.current= true;
    // }, [])

    // useEffect(() => {
    //     if(!isMounted.current) return;
    //     isMounted.current = true;
    //     setCountert(value)
    //     return()=>{
    //         isMounted.current=false;
    //     }
    // }, [value])

    return{
        counter,
        increaseBy,
        reset,
        isMaxCountReached: !!initialValues?.count && initialValues.maxCount === counter,
        maxCount: initialValues?.maxCount
    }
}
