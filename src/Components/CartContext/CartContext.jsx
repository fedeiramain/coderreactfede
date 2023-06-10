import { createContext, useState } from "react";


export const CartContext = createContext();



export const CartShop = ({children}) => {

    const carritoInicial = JSON.parse(localStorage.getItem("carrito"));

    const [cart, setCart] = useState(carritoInicial ? carritoInicial : []);
    const [orderId, setOrderId] = useState([]);

    return (
        <CartContext.Provider value={ {cart, setCart, orderId, setOrderId} }>
           {children}
        </CartContext.Provider>
    )
};