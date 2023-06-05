import { useContext, useEffect } from "react";
import { CartContext } from "../CartContext/CartContext";



const Carrito = () => {

    const { cart, setCart } = useContext(CartContext);
  
    const subTotal = cart.reduce((acc, prod) => acc + prod.cantidad * prod.precio, 0);
  
    const eliminar = (id) => {
        const carrito = cart.filter((p) => p.id !== id)
        setCart(carrito);
    };

    useEffect(() => {
        localStorage.setItem("carrito", JSON.stringify(cart))
    }, [cart])
  
    return (
      <div>
        <h1 className="text-primary">Mi Compra</h1>
        <div className="productos-carrito">
          {
            cart && cart.map((prod) => {
              return (
                <div key={prod.id} className="prod-carrito">
                  <div className="nombre-prod">
                    <h3>Nombre</h3>
                    <p>{prod.nombre}</p>
                  </div>
                  <div className="cantidad-prod">
                    <h3>Cantidad</h3>
                    <p>{prod.cantidad}</p>
                  </div>
                  <div className="total-prod">
                    <h3>Total</h3>
                    <p>{prod.cantidad * prod.precio}</p>
                  </div>
                  <button className="btn-eliminar" onClick={() => eliminar(prod.id)}>Eliminar</button>
                </div>
  
              )
            })
          }
        </div>
        {cart.length > 0 ? <h3>Cantidad: {subTotal}</h3> : <p className="text-warning">Seleccione sus Productos</p>}
        
  
      </div>
    )
  };
  
  export default Carrito;