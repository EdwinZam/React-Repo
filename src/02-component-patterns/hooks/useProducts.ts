import { useState } from "react"


export const useProducts = () => {

    const [counter, setCountert] = useState(0)

    const increaseBy = (value:number)=>{
        setCountert(prev => Math.max(prev + value, 0))
    }

    return{
        counter,
        increaseBy
    }
}
