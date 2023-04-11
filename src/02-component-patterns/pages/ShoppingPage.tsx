import { ProductButtons, ProductCard, ProductImage, ProductTitle } from '../components'
import "../styles/custom-styles.css";
import { useShoppingCart } from '../hooks/useShoppingCart';
import { products } from '../data/products';

export const ShoppingPage = () => {

  //const [shoppingCart, setShoppingCart] = useState<{[key:string]:ProductInCart}>({})

  // const onProductCountChange = ({count, product}:{count:number, product:Product}) =>{
  //   //console.log(count)
    
  //   setShoppingCart( oldShoppingCart => {

  //     const productInCart: ProductInCart = oldShoppingCart[product.id] || {...product, count: 0};

  //     if(Math.max(productInCart.count + count, 0) > 0){
  //       productInCart.count += count;
  //       return {
  //         ...oldShoppingCart,
  //         [product.id]: productInCart
  //       }
  //     }

  //     //Delete product
  //     const{[product.id]: toDelete, ...rest}= oldShoppingCart;
  //     return rest;
      

  //   //   if(count === 0){
  //   //     const{[product.id]: toDelete, ...rest}= oldShoppingCart;
  //   //     console.log(toDelete)
  //   //     return{
  //   //         ...rest
  //   //     }  
  //   //   }

  //   //   return {
  //   //     ...oldShoppingCart,
  //   //     [product.id]:{...product, count}
  //   //   }
  //   } )
  // }

  const {shoppingCart, onProductCountChange} = useShoppingCart();

  return (
    <div >
        <h1>Shopping Store</h1>
        <hr />
        <div style={{
            display: 'flex',
            flexDirection: 'row',
            flexWrap: 'wrap'
        }}>
          {
            products.map( product => (
              <ProductCard 
                key={product.id}   
                product={product}
                className="bg-dark text-white"
                onChange= {onProductCountChange}
                value={shoppingCart[product.id]?.count || 0}
              >                       
                <ProductImage className ="custom-image"/>
                <ProductTitle className ="text-bold"/>
                <ProductButtons className="custom-buttons"/>
              </ProductCard>
            ))  
          }
        </div>

          {

          }

        <div className='shopping-cart'>
          {
            Object.entries(shoppingCart).map(([key, product])=>(
              <ProductCard 
                key={key}
                product={product}
                className="bg-dark text-white"
                style={{width: '100px'}}
                value={product.count}
                onChange= {onProductCountChange}
              >                       
                <ProductImage className ="custom-image"/>
                <ProductTitle title={`${product.count}`}/>
                <ProductButtons 
                  className="custom-buttons"
                  style={{
                    display:'flex',
                    justifyContent:'center'   
                  }}
                  />
              </ProductCard>  
            ))
          }

              {/* <ProductCard 
                product={product1}
                className="bg-dark text-white"
                style={{width: '100px'}} 
              >                       
                <ProductImage className ="custom-image"/>
                <ProductButtons className="custom-buttons"/>
              </ProductCard>   */}
        </div>
        {/* <div>
          <code>
            {JSON.stringify(shoppingCart, null, 5)}
          </code>
        </div> */}
    </div>
  )
}
