import { createContext} from 'react';
import { useProducts } from '../hooks/useProducts';
import styles from '../styles/styles.module.css'
import { ProductCardProps, ProductContextProps } from '../interfaces/interfaces';



export const ProductContext = createContext({} as ProductContextProps);
const { Provider } = ProductContext;

// NO ES NECESARIA
// interface ProductButtonsProps {
//     increaseBy: (value: number) => void;
//     counter: number;
// }

export const ProductCard = ({children, product}:ProductCardProps) => {

    const {counter, increaseBy} = useProducts();
  //  console.log(styles)
  return (

    <Provider value={{
        counter,
        increaseBy,
        product,
    }}>

        <div className={styles.productCard}>

            {children}
            {/* <img className={styles.productImg} src="./coffee-mug.png" alt="Coffe Mug" /> */}
            {/* <ProductImage img={product.img}/>
            <ProductTitle title={product.title}/>
            <ProductButtons 
                increaseBy={ increaseBy }
                counter={counter} /> */}

        </div>

    </Provider>
  )
}
