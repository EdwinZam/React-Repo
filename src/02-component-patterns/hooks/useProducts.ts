import { useState, useEffect, useRef } from "react"
import { Product, onChangeArgs } from '../interfaces/interfaces';

interface useProductArgs {
    product: Product;
    onChange?: (args:onChangeArgs)=>void;
    value?: number;
}

export const useProducts = ( { onChange, product, value = 0 }: useProductArgs ) => {

    const [counter, setCountert] = useState(value)

    const isControlled = useRef(!!onChange)

    const increaseBy = (value:number)=>{

        console.log('isControlled', isControlled.current)

        if(isControlled.current){
            return onChange!({count:value, product})
        }

        const newValue = Math.max(counter + value, 0)

        setCountert(newValue);

        //setCountert(prev => Math.max(prev + value, 0))

        onChange && onChange({count: newValue, product });
    }

    useEffect(() => {
        setCountert(value)
    }, [value])
    

    return{
        counter,
        increaseBy
    }
}
