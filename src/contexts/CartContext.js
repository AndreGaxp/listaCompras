import React, {useState, createContext} from "react";

export const CartContext = createContext({});

function CartProvider({ children }){
  const [cart, serCart] = useState([
  ]);

  return(
    <CartContext.Provider
    value={{
      cart
    }}
    >
      {children}
    </CartContext.Provider>
  )
}

export default CartProvider;