import { CSSProperties, ReactElement, createContext} from 'react';
import { useProducts } from '../hooks/useProducts';
import styles from '../styles/styles.module.css'
import { Product, ProductContextProps, onChangeArgs, InitialValues, ProductCardHandlers } from '../interfaces/interfaces';



export const ProductContext = createContext({} as ProductContextProps);
const { Provider } = ProductContext;

// NO ES NECESARIA
// interface ProductButtonsProps {
//     increaseBy: (value: number) => void;
//     counter: number;
// }

export interface Props {
  product: Product;
  //children?: ReactElement | ReactElement[];
  children: (args:ProductCardHandlers)=> JSX.Element,
  className?: string;
  style?: CSSProperties;
  onChange?: (args:onChangeArgs)=>void;
  value?: number;
  initialValues?: InitialValues;
}

export const ProductCard = ({children, product, className, style, onChange, value, initialValues}:Props) => {

    const {counter, increaseBy, maxCount, isMaxCountReached, reset} = useProducts({ onChange, product, value, initialValues });
    console.log(initialValues?.count)
  return (

    <Provider value={{
        counter,
        increaseBy,
        product,
        maxCount,
    }}>

        <div 
          className={`${styles.productCard}  ${className}`}
          style={style}
        >

            {children({
              count: counter,
              isMaxCountReached,
              maxCount: initialValues?.maxCount,
              product,
              increaseBy,
              reset
            })}
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
