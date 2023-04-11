import { CSSProperties, ReactElement, createContext} from 'react';
import { useProducts } from '../hooks/useProducts';
import styles from '../styles/styles.module.css'
import { Product, ProductContextProps, onChangeArgs } from '../interfaces/interfaces';



export const ProductContext = createContext({} as ProductContextProps);
const { Provider } = ProductContext;

// NO ES NECESARIA
// interface ProductButtonsProps {
//     increaseBy: (value: number) => void;
//     counter: number;
// }

export interface Props {
  product: Product;
  children?: ReactElement | ReactElement[];
  className?: string;
  style?: CSSProperties;
  onChange?: (args:onChangeArgs)=>void;
  value?: number;
}

export const ProductCard = ({children, product, className, style, onChange, value}:Props) => {

    const {counter, increaseBy} = useProducts({ onChange, product, value });
  //  console.log(styles)
  return (

    <Provider value={{
        counter,
        increaseBy,
        product,
    }}>

        <div 
          className={`${styles.productCard}  ${className}`}
          style={style}
        >

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
