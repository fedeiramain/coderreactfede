import { createContext, useState } from "react";


export const CartContext = createContext();



export const CartShop = ({children}) => {

    const carritoInicial = JSON.parse(localStorage.getItem("carrito"));

    const [cart, setCart] = useState(carritoInicial ? carritoInicial : []);

    return (
        <CartContext.Provider value={ {cart, setCart} }>
           {children}
        </CartContext.Provider>
    )
};