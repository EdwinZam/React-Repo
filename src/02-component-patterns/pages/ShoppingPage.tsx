import { ProductButtons, ProductCard, ProductImage, ProductTitle } from '../components'
import "../styles/custom-styles.css";
import { products } from '../data/products';

const product = products[0];

export const ShoppingPage = () => {

  return (
    <div >
        <h1>Shopping Store</h1>
        <hr />
        <div>
          <ProductCard 
            key={product.id}   
            product={product}
            initialValues={{
              count: 4,
              maxCount: 10
            }}
          > 
          {
            ({reset,isMaxCountReached, maxCount, increaseBy, count})=>(
              <>
                <ProductImage />
                <ProductTitle />
                <ProductButtons />
              </>
            )
          }                      
          </ProductCard>
        </div>
    </div>
  )
}
