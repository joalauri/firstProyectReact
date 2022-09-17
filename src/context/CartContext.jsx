import React, {useState, useContext} from 'react'
import ItemCount from '../components/ItemCount';
const CartContext = React.createContext([]);
export const useCartContext = () => useContext(CartContext)

const CartProvider = ( {children}) => {

const [cart, setCart] = useState([])


const addProduct = (detail, quantity) =>{
    let newCart;
    let product = cart.find(product => product.id === detail.id);
    if (product){
        product.quantity += quantity;
        newCart = [...cart];
    }else {
        product = {...ItemCount, quantity:quantity};
        newCart = [...cart, product]
    }
    setCart(newCart)
}

const clearCart = () => setCart([]); 

const isInCart = (id) => cart.find (product => product.id === id)? true:false;

const removeProduct = (id) => setCart (cart.filter (product => product.id !== id));

  return (
    <CartContext.Provider value={
        {
            clearCart,
            isInCart,
            removeProduct,
            addProduct
        }
    }>
        {children}
    </CartContext.Provider>
  )
}
export default CartProvider