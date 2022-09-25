import React, { useState, useContext } from "react";
// import ItemCount from "../components/ItemCount";
const CartContext = React.createContext([]);
export const useCartContext = () => useContext(CartContext);

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const addProduct = (detail, quantity) => {
    let newCart;
    let product = cart.find(product => product.id === detail.id);
    if (product) {
      product.quantity += quantity;
      newCart = [...cart];
    } else {
      product = { ...detail, quantity: quantity };
      newCart = [...cart, product];
    }
    setCart(newCart);
  };
console.log(cart + "cart en cartContext")
  const clearCart = () => setCart([]);

  const isInCart = (id) =>
    cart.find((product) => product.id === id) ? true : false;

  const removeProduct = (id) =>
    setCart(cart.filter((product) => product.id !== id));

  const totalPrice = () => {
    return cart.reduce((prev, act) => prev + act.quantity * act.price, 0);
  };

  const totalProducts = () => cart.reduce((contador, producto) => contador + producto.quantity,0);
    

  return (
    <CartContext.Provider
      value={{
        clearCart,
        isInCart,
        removeProduct,
        addProduct,
        totalPrice,
        totalProducts,
        cart
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
export default CartProvider;
