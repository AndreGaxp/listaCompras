import React, { useState, createContext } from "react";
import { Alert } from "react-native";

export const CartContext = createContext({});

function CartProvider({ children }) {
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0)
  const [products, setProducts] = useState([
    { id: "1", name: "Coca cola", price: 19.9 },
    { id: "2", name: "Chocolate", price: 6.5 },
    { id: "4", name: "Queijo 500g", price: 15 },
    { id: "5", name: "Batata frita", price: 23.9 },
    { id: "6", name: "Guarana lata", price: 6.0 },
  ]);

  function addItemCart(newItem) {
    const indexItem = cart.findIndex(item => item.id === newItem.id)
    if (indexItem !== -1) {
      let cartList = cart;

      cartList[indexItem].amount = cartList[indexItem].amount + 1;

      cartList[indexItem].total = cartList[indexItem].amount * cartList[indexItem].price

      setCart(cartList)
      totalResultCart(cartList)
      return;
    }

    let data = {
      ...newItem,
      amount: 1,
      total: newItem.price
    }

    setCart(products => [...products, data])
    totalResultCart([...cart, data])
  }

  function removeItemCart(product) {
    const indexItem = cart.findIndex(item => item.id === product.id)

    if (cart[indexItem]?.amount > 1) {
      let cartList = cart;

      cartList[indexItem].amount = cartList[indexItem].amount - 1;

      cartList[indexItem].total = cartList[indexItem].total - cartList[indexItem].price

      setCart(cartList);
      totalResultCart(cartList)
      return;
    }

    const removeItem = cart.filter(item => item.id !== product.id)
    setCart(removeItem)
    totalResultCart(removeItem)
  }

  function totalResultCart(item) {
    let myCart = item;
    let result = myCart.reduce((acc, obj) => { return acc + obj.total }, 0)
    setTotal(result.toFixed(2))
  }

  function addProduct(name, price) {
    if (!name || !price) {
      Alert.alert("Erro", "Preencha todos os campos!");
      return;
    }

    const newProduct = {
      id: `${Date.now()}-${Math.random()}`,
      name,
      price: parseFloat(price),
    };

    setProducts((prevProducts) => [...prevProducts, newProduct]);
  }

  return (
    <CartContext.Provider
      value={{
        cart,
        addItemCart,
        removeItemCart,
        total,
        products,
        addProduct,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

export default CartProvider;